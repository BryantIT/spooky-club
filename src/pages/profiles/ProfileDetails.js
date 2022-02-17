import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { useAuth } from "../../auth/UserAuth";
import { db, storage } from "../../firebase-config";
import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { DateTime } from "luxon";

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
    h4Color,
    submitWrapper

  } = styles;
  const inputFile = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [info, setInfo] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [imageOld, setImageOld] = useState()
  const [bio, setBio] = useState("");
  const [imageURL, setImageURL] = useState()

  const getImageUrl = () => {
    const storageRef = ref(storage, `profileImages/${imageSrc}`);
    getDownloadURL(storageRef)
    .then((url) => {
      setImageURL(url)
    })
  }

  useEffect(() => {
    getImageUrl()
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
      setImageOld(userInfo.profileImage)
      setBio(userInfo.bio)
    }
  }, [userInfo])

  const uploadeImage = async (file, imageName) => {
    const storageRef = ref(storage, `profileImages/${imageName}`);
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

  const deleteOldFile = () => {
    const deleteRef = ref(storage, `profileImages/${imageOld}`)
    deleteObject(deleteRef)
    .then(() => {
      console.log('image deleted')
    })
    .catch ((error) => {
      console.log('image not deleted', error)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputFile) {
      const image = URL.createObjectURL(event.target.profileImage.files[0]);
      const file = event.target.profileImage.files[0];
      const date = DateTime.now();
      const imageName = date + file.name;
      setImageSrc(imageName)
      uploadeImage(file, imageName)
      .then(
        deleteOldFile()
      )
    }
  }

  return (
    <div className={mainRow}>
      <div className={container}>
        <form onSubmit={handleSubmit}>
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
          <div className={inputGroup}>
            <div className={submitWrapper}>
              <input type='submit' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
