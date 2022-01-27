import React, { useState, Fragment, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { DateTime } from "luxon";
import ghostProfile from "../../images/ghostprofile.png";
// Styles
import styles from "./styles.module.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRegAddressCard,
  FaCity,
} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdLocalPolice } from "react-icons/md";
import { useAuth } from "../../auth/UserAuth";
import { db, storage } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const UserSetup = ({ userIsCreated }) => {
  const userRef = collection(db, "users");
  const { currentUser } = useAuth();
  const inputFile = useRef();
  const zipApiKey = process.env.REACT_APP_ZIP_API_KEY;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isStepOne, setIsStepOne] = useState(true);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [isStepThree, setIsStepThree] = useState(false);
  const [isStepFour, setIsStepFour] = useState(false);
  const [isStepFive, setIsStepFive] = useState(false);
  const [locationSet, setLocationSet] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState();
  const [imageFileName, setImageFileName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [imageAsFile, setImageAsFile] = useState();
  const [hasProfileImage, setHasProfileImage] = useState(false);
  const [imageStep, setImageStep] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  // Styles
  const {
    formWrapper,
    row,
    formContainer,
    titleContainer,
    rows,
    inputField,
    icon,
    radioOption,
    selectOption,
    selectArrow,
    checkboxOption,
    buttonWrapper,
    button,
    linkWrapper,
    image,
    imageWrapper,
  } = styles;

  useEffect(() => {
    setProfileImage(ghostProfile);
  }, []);

  const getUserAddress = (zip, key) => {
    if (!zip) {
      setCity("");
      setState("");
    } else {
      axios
        .get(
          `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${zip}?key=${key}`
        )
        .then((res) => {
          const info = res.data;
          setCity(info.City);
          setState(info.State);
          setZip(zip);
          setLocationSet(true);
        });
    }
  };

  const handleStepOneSubmit = (event) => {
    event.preventDefault();
    setFirstName(event.target.firstName.value);
    setLastName(event.target.lastName.value);
    setIsStepOne(false);
    setIsStepTwo(true);
  };

  const StepOne = () => {
    return (
      <div className={row}>
        <div className={formWrapper}>
          <div className={formContainer}>
            <div className={titleContainer}>
              <h2>Your Name</h2>
            </div>
            <div className={rows}>
              <div className="">
                <form onSubmit={handleStepOneSubmit}>
                  <div className={inputField}>
                    {" "}
                    <span>
                      <CgProfile className={icon} />
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className={inputField}>
                    {" "}
                    <span>
                      <CgProfile className={icon} />
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <input className={button} type="submit" value="Next" />
                  <div className={buttonWrapper}>
                    <button className={button}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleStepTwoChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "city") {
      setCity(value);
    }
    if (name === "state") {
      setState(value);
    }
  };

  const handleStepTwoSubmit = (event) => {
    event.preventDefault();
    const key = zipApiKey;
    let zipCode;
    if (!zip) {
      zipCode = event.target.zip.value;
    } else {
      zipCode = zip;
    }
    if (!zipCode) {
      setCity("");
      setState("");
    } else if (state && city) {
      setIsStepOne(false);
      setIsStepTwo(false);
      setIsStepThree(true);
    } else {
      getUserAddress(zipCode, key);
    }
  };

  const StepTwo = () => {
    return (
      <div className={row}>
        <div className={formWrapper}>
          <div className={formContainer}>
            <div className={titleContainer}>
              <h2>Where Are You From?</h2>
            </div>
            <div className={rows}>
              <div className="">
                <form onSubmit={handleStepTwoSubmit}>
                  {!locationSet ? (
                    <div className={inputField}>
                      {" "}
                      <span>
                        <FaRegAddressCard className={icon} />
                      </span>
                      <input
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        pattern="[0-9]{5}"
                      />
                    </div>
                  ) : null}
                  {locationSet ? (
                    <Fragment>
                      <div className={inputField}>
                        {" "}
                        <span>
                          <FaCity className={icon} />
                        </span>
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          onChange={handleStepTwoChange}
                          value={city}
                          readOnly
                        />
                      </div>
                      <div className={inputField}>
                        {" "}
                        <span>
                          <RiLockPasswordFill className={icon} />
                        </span>
                        <input
                          type="text"
                          name="state"
                          placeholder="State"
                          onChange={handleStepTwoChange}
                          value={state}
                          readOnly
                        />
                      </div>
                    </Fragment>
                  ) : null}
                  <input className={button} type="submit" value="Next" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleStepThreeSubmit = (event) => {
    event.preventDefault();
    if (inputFile && !imageStep) {
      const image = URL.createObjectURL(event.target.profileImage.files[0]);
      const file = event.target.profileImage.files[0];
      const date = DateTime.now();
      const imageName = date + file.name;
      setImageFileName(imageName);
      setProfileImage(image);
      setImageAsFile(file);
      setHasProfileImage(true);
      setImageStep(true);
    }
    if (inputFile && imageStep) {
      setIsStepOne(false);
      setIsStepTwo(false);
      setIsStepThree(false);
      setIsStepFour(true);
    }
  };

  const StepThree = () => {
    return imageStep ? (
      <div className={row}>
        <div className={formWrapper}>
          <div className={formContainer}>
            <div className={titleContainer}>
              <h2>Profile Image</h2>
            </div>
            <div className={rows}>
              <div className="">
                <form onSubmit={handleStepThreeSubmit}>
                  <div className={imageWrapper}>
                    {profileImage ? (
                      <img className={image} src={profileImage} />
                    ) : null}
                  </div>
                  <input className={button} type="submit" value="Next" />
                  <div className={buttonWrapper}>
                    <button className={button}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={row}>
        <div className={formWrapper}>
          <div className={formContainer}>
            <div className={titleContainer}>
              <h2>Profile Image</h2>
            </div>
            <div className={rows}>
              <div className="">
                <form onSubmit={handleStepThreeSubmit}>
                  <div className={inputField}>
                    <input
                      ref={inputFile}
                      name="profileImage"
                      type="file"
                      accept="image/*"
                      multiple={false}
                    />
                  </div>
                  <input className={button} type="submit" value="Next" />
                  <div className={buttonWrapper}>
                    <button className={button}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleStepFourSubmit = (event) => {
    event.preventDefault();
    setUserInfo(event.target.info.value);
    setIsStepOne(false);
    setIsStepTwo(false);
    setIsStepThree(false);
    setIsStepFour(false);
    setIsStepFive(true);
  };

  const StepFour = () => {
    return (
      <div className={row}>
        <div className={formWrapper}>
          <div className={formContainer}>
            <div className={titleContainer}>
              <h2>You Are</h2>
            </div>
            <div className={rows}>
              <div className="">
                <form onSubmit={handleStepFourSubmit}>
                  <div className={inputField}>
                    <div className={buttonWrapper}>
                      <select name="info">
                        <option value="investigator">An Investigator</option>
                        <option value="seeking">Seeking an Investigator</option>
                        <option value="fan">Just a Fan</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <input className={button} type="submit" value="Next" />
                  <div className={buttonWrapper}>
                    <button className={button}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const calculateProfilePercentage = () => {
    let count = 0;
    if (profileImage) {
      count = count + 17;
    }
    if (firstName) {
      count = count + 17;
    }
    if (lastName) {
      count = count + 17;
    }
    if (city) {
      count = count + 17;
    }
    if (state) {
      count = count + 17;
    }
    if (userInfo) {
      count = count + 17;
    }
    if (count > 100) {
      count = 100;
    }
    return count;
  };

  const handleStepFiveSubmit = async (event) => {
    event.preventDefault();
    const uid = currentUser.uid;
    const createdOn = DateTime.now().ts;
    const updatedOn = DateTime.now().ts;
    const vip = false;
    const chatUserName = `${firstName.charAt(0)}.${lastName}`;
    const email = currentUser.email;
    const flagged = false;
    const profileCompletePercentage = calculateProfilePercentage();
    const karma = 10;
    const data = {
      createdOn: createdOn,
      updatedOn: updatedOn,
      profileImage: imageFileName,
      firstName: firstName,
      lastName: lastName,
      city: city,
      state: state,
      zip: zip,
      info: userInfo,
      vip: vip,
      chatUserName: chatUserName,
      email: email,
      flagged: flagged,
      profileCompletePercentage: profileCompletePercentage,
      karma: karma,
    };

    const uploadeImage = async () => {
      const file = imageAsFile;
      const fileName = imageFileName;
      const storageRef = ref(storage, `profileImages/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
        },
        (error) => console.log(error),
        () => {
          console.log("Finished");
        }
      );
    };
    if (profileImage) {
      uploadeImage().then(
        await setDoc(doc(db, "users", uid), data).then(
          setFirstName(""),
          setLastName(""),
          setIsStepOne(false),
          setIsStepTwo(false),
          setIsStepThree(false),
          setIsStepFour(false),
          setIsStepFive(false),
          setLocationSet(false),
          setCity(""),
          setState(""),
          setZip(),
          setImageFileName(""),
          setProfileImage(),
          setImageAsFile(),
          setHasProfileImage(false),
          setImageStep(false),
          userIsCreated()
        )
      );
    }
  };

  const StepFive = () => {
    return (
      <div className={row}>
        <div className={formWrapper}>
          <div className={formContainer}>
            <div className={titleContainer}>
              <h2>Your Profile</h2>
            </div>
            <div className={rows}>
              <div className="">
                <form onSubmit={handleStepFiveSubmit}>
                  <div className={imageWrapper}>
                    {profileImage ? (
                      <img className={image} src={profileImage} />
                    ) : null}
                  </div>
                  <div className={inputField}>
                    {" "}
                    <span>
                      <CgProfile className={icon} />
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={firstName}
                      readOnly
                    />
                  </div>
                  <div className={inputField}>
                    {" "}
                    <span>
                      <CgProfile className={icon} />
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder={lastName}
                      readOnly
                    />
                  </div>
                  <div className={inputField}>
                    {" "}
                    <span>
                      <FaCity className={icon} />
                    </span>
                    <input
                      type="text"
                      name="city"
                      placeholder={city}
                      readOnly
                    />
                  </div>
                  <div className={inputField}>
                    {" "}
                    <span>
                      <RiLockPasswordFill className={icon} />
                    </span>
                    <input
                      type="text"
                      name="state"
                      placeholder={state}
                      readOnly
                    />
                  </div>
                  <div className={inputField}>
                    {" "}
                    <span>
                      <MdLocalPolice className={icon} />
                    </span>
                    <input
                      type="text"
                      name="info"
                      placeholder={userInfo}
                      readOnly
                    />
                  </div>
                  <input className={button} type="submit" value="Next" />
                  <div className={buttonWrapper}>
                    <button className={button}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {isStepOne ? <StepOne /> : null}
      {isStepTwo ? <StepTwo /> : null}
      {isStepThree ? <StepThree /> : null}
      {isStepFour ? <StepFour /> : null}
      {isStepFive ? <StepFive /> : null}
    </Fragment>
  );
};

export default UserSetup;
