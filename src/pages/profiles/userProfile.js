import React, { Fragment, useState, useEffect } from "react";
import UserSetup from "../../components/profiles/UserSetup";
import UserProfileDetail from "../../components/profiles/UserProfileDetail";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "../../auth/UserAuth";

const UserProfile = () => {
  const { userInfo, currentUser } = useAuth();
  const [isProfileCreated, setIsProfileCreated] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setIsProfileCreated(true);
    }
  }, [userInfo]);

  const userIsCreated = () => {
    setIsProfileCreated(true);
  };

  return (
    <Fragment>
      {isProfileCreated ? (
        <UserProfileDetail />
      ) : (
        <UserSetup userIsCreated={userIsCreated} />
      )}
    </Fragment>
  );
};

export default UserProfile;
