import React, { Fragment, useEffect, useState } from "react";
// Pages
import Landing from "./pages/landing/Landing";
import Main from "./pages/Main/Main";
import SplashScreen from "./pages/splash/SplashScreen";
import About from "./pages/about/About";
import UserAccess from "./pages/userAccess/UserAccess";
import Profile from "./pages/userAccess/Profile";
import Signin from "./pages/userAccess/SigninPage";
// Components
import Navbar from "./components/navbar/Navbar";
import Logo from "./components/logo/Logo";
import Footer from "./components/footer/Footer";
import Logout from "./components/common/Logout";
import PrivateRoute from "./components/common/PrivateRoute";
// Styles
import "./App.css";
// Packages
import { Routes, Route, Link } from "react-router-dom";
// Firebase
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { AuthProvider } from "./auth/UserAuth";

function App() {
  const [enterSite, setEnterSite] = useState(false);
  const [testName, setTestName] = useState("Bob");
  const [test, setTest] = useState([]);
  const [single, setSingle] = useState(null);
  const testRef = collection(db, "test");
  const testID = "RbbfVf4C6de3g8V4NNjC";

  const endSplash = () => {
    setEnterSite(true);
  };

  useEffect(() => {
    // How to get all documents in a collection
    const getTest = async () => {
      const data = await getDocs(testRef);
      setTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTest();
  }, []);

  // How to get single doc
  const setDoc = async () => {
    const singleRef = await doc(db, "test", testID);
    getDoc(singleRef).then((doc) => {
      setSingle(doc.data());
    });
  };

  // How to create a document
  const createTest = async () => {
    await addDoc(testRef, { name: testName });
  };

  // How to update a doc
  const updateTest = async () => {
    const testDoc = doc(db, "test", testID);
    const newFields = { name: "Bryant" };
    await updateDoc(testDoc, newFields);
  };

  // How to delete a doc
  const deleteTest = async () => {
    const testDoc = doc(db, "test", testID);
    await deleteDoc(testDoc);
  };
  return (
    <AuthProvider>
      <Fragment>
        {enterSite ? (
          <Fragment>
            <Logo />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signup" element={<UserAccess />} />
              <Route exact path="/signin" element={<UserAccess />} />
              <Route
                exact
                path="/logout"
                element={
                  <PrivateRoute>
                    <Logout />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Routes>
            <Footer />
          </Fragment>
        ) : (
          <SplashScreen endSplash={endSplash} />
        )}
      </Fragment>
    </AuthProvider>
  );
}

export default App;
