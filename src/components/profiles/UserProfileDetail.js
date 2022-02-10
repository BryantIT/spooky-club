import React, { useState, useEffect } from "react";
import styles from "./detail.module.css";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAuth } from "../../auth/UserAuth";
import { useNavigate } from "react-router-dom";

const UserProfileDetail = () => {
  const navigate = useNavigate();
  const { userInfo, currentUser } = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const handleClick = (path) => {
    switch (path) {
      case "under-construction":
        navigate("/under-construction");
        break;
      default:
        return;
    }
  };

  const { container, card, box, content, wrapper, section, row, line } = styles;
  return (
    <div className={wrapper}>
      <div className={section}>
        <div className={container}>
          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Profile Details</h2>
                <hr className={line} />
                <p>
                  Information pertaining to profile details such as name,
                  location and info.
                </p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>

          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Account</h2>
                <hr className={line} />
                <p>Email, password and billing info.</p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>

          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Achievements</h2>
                <hr className={line} />
                <p>
                  Look here to see your achievements and requirements for your
                  next achievement.
                </p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>

          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Investigations</h2>
                <hr className={line} />
                <p>View and log your investigations here.</p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>

          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Inventory</h2>
                <hr className={line} />
                <p>View and add to your inventory.</p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>
          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Public Profile</h2>
                <hr className={line} />
                <p>View and edit what appears in your public profile.</p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>
          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Stats</h2>
                <hr className={line} />
                <p>View stats about things you have done here.</p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>
          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Tools</h2>
                <hr className={line} />
                <p>Customize your quick access tools and links.</p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>
          <div className={card}>
            <div className={box}>
              <div className={content}>
                <h2>Team</h2>
                <hr className={line} />
                <p>View your team page.</p>
                <button onClick={() => handleClick("under-construction")}>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetail;
