import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { useAuth } from "../../auth/UserAuth";
import { db, storage } from "../../firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ProfileDetails = () => {
  const { currentUser, userInfo } = useAuth();
  const {
    container,
    formRow,
    inputGroup,
    colHalf,
    colThird,
    locationWrapper,
    mainRow,
    profileImage,
    h4Color
  } = styles;
  const inputFile = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [info, setInfo] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [bio, setBio] = useState("");
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    const storageRef = ref(storage, `profileImages/${imageSrc}`);
    getDownloadURL(storageRef)
    .then((url) => {
      setImageURL(url)
    })
  }, [imageSrc])

  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.firstName)
      setLastName(userInfo.lastName)
      setCity(userInfo.city)
      setState(userInfo.state)
      setZip(userInfo.zip)
      setInfo(userInfo.info)
      setImageSrc(userInfo.profileImage)
      setBio(userInfo.bio)
    }
  }, [])

  return (
    <div className={mainRow}>
      <div className={container}>
        <form>
          <div className={formRow}>
            <div
              className={profileImage}
              style={{ backgroundImage: `url(${imageURL})` }}
            ></div>
          </div>
          <div className={formRow}>
            <h4 className={h4Color}>Profile Details</h4>
            <div className={inputGroup}>
              <input type="text" value={firstName} placeholder="First Name" />
              <input type="text" value={lastName} placeholder="Last Name" />
            </div>
          </div>
          <div className={formRow}>
            <div className={locationWrapper}>
              <input type="text" value={city} placeholder="City" />
              <input type="text" value={state} placeholder="State" />
              <input type="text" value={zip} placeholder="Zipcode" />
            </div>
          </div>
          <div className={formRow}>
            <div className={inputGroup}>
              <h4 className={h4Color}>Profile Image</h4>
              <input
                ref={inputFile}
                name="profileImage"
                type="file"
                accept="image/*"
                multiple={false}
              />
            </div>
          </div>
          <div className={formRow}>
            <h4 className={h4Color}>Your Role</h4>
            <div className={inputGroup}>
              <select name="info">
                <option value="investigator">An Investigator</option>
                <option value="seeking">Seeking an Investigator</option>
                <option value="fan">Just a Fan</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className={formRow}>
            <h4 className={h4Color}>Bio</h4>
            <div className={inputGroup}>
              <textarea value={bio}></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
