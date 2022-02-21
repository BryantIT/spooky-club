import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Success from '../../components/common/Success'
// Firebase
import { useAuth } from "../../auth/UserAuth";
import { db, storage } from "../../firebase-config";
import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { DateTime } from "luxon";

const ProfileDetails = () => {
  const navigate = useNavigate();
  const { currentUser, userInfo, refreshUser } = useAuth();
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
  const [userData, setUserData] = useState()
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
  const [updatedOn, setUpdatedOn] = useState()
  const [saving, setSaving] = useState(false)
  const successMessage = "Profile Successfully Updated"

  useEffect(() => {
    if(currentUser) {
      const setUserData = async () => {
        const userDoc = await doc(db, 'users', currentUser.uid)
        getDoc(userDoc)
        .then((doc) => {
          setUserData(doc.data())
        })
      }
      setUserData()
    }
  }, [currentUser])

  const getImageUrl = () => {
    const storageRef = ref(storage, `profileImages/${imageSrc}`);
    getDownloadURL(storageRef)
    .then((url) => {
      setImageURL(url)
    })
  }

  useEffect(() => {
    if(imageSrc) {
      getImageUrl()
    }
  }, [imageSrc])

  const setUserInfo = () => {
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

  useEffect(() => {
    const time = DateTime.now().ts
    setUpdatedOn(time)
    if (userInfo) {
      setUserInfo()
    }
  }, [userInfo])

  const uploadeImage = async (file, imageName) => {
    setSaving(true)
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
    setSaving(true)
    const deleteRef = ref(storage, `profileImages/${imageOld}`)
    deleteObject(deleteRef)
    .then(() => {
      console.log('image deleted')
    })
    .catch ((error) => {
      console.log('image not deleted', error)
    })
  }

  const handleImageChange = (event) => {
    const image = URL.createObjectURL(event.target.files[0])
    const date = DateTime.now()
    const imageName = date + event.target.files[0].name;
    setImageSrc(imageName)
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case 'firstName':
      setFirstName(value)
      break
      case 'lastName':
      setLastName(value)
      break
      case 'city':
      setCity(value)
      break
      case 'state':
      setState(value)
      break
      case 'zip':
      setZip(value)
      break
      case 'info':
      setInfo(value)
      break
      case 'bio':
      setBio(value)
      break
      default:
      break
    }
  }

  const updateUser = async () => {
    const userDoc = doc(db, "users", currentUser.uid);
    const userObject = {
      bio: bio,
      city: city,
      firstName: firstName,
      info: info,
      lastName: lastName,
      profileImage: imageSrc,
      state: state,
      zip: zip,
      updatedOn: updatedOn
     };
    await updateDoc(userDoc, userObject)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setSaving(true)
    console.log(saving)
    const file = event.target.profileImage.files[0];
    console.log(imageSrc)
    if (inputFile && imageOld !== imageSrc) {
      const image = URL.createObjectURL(event.target.profileImage.files[0]);
      const file = event.target.profileImage.files[0];
      uploadeImage(file, imageSrc)
      .then(
        deleteOldFile()
      )
    }
    updateUser()
    setTimeout(() => {
      navigate("/profile")
    }, 1000)
    refreshUser()
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
              <input
                type="text"
                name='firstName'
                value={firstName}
                placeholder="First Name"
                onChange={handleChange}
               />
              <input
                type="text"
                name='lastName'
                value={lastName}
                placeholder="Last Name"
                onChange={handleChange}
               />
            </div>
          </div>
          <div className={formRow}>
            <div className={locationWrapper}>
              <input
                type="text"
                value={city}
                placeholder="City"
                name='city'
                onChange={handleChange}
              />
              <input
                type="text"
                value={state}
                placeholder="State"
                name='state'
                onChange={handleChange}
              />
              <input
                type="text"
                value={zip}
                placeholder="Zipcode"
                name='zip'
                onChange={handleChange}
               />
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
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className={formRow}>
            <h4 className={h4Color}>Your Role</h4>
            <div className={inputGroup}>
              <select
                name="info"
                value={info}
                onChange={handleChange}
                >
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
              <textarea
                value={bio}
                name='bio'
                onChange={handleChange}
                ></textarea>
            </div>
          </div>
          <div className={inputGroup}>
            <div className={submitWrapper}>
              {
                saving ? <Success message={successMessage} /> : null
              }
              <input type='submit' disabled={saving}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
