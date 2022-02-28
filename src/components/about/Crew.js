import React from "react";
import styles from "./styles.module.css";
import bryantImage from "../../images/leadinvestigator.jpg";
import cheyenneImage from "../../images/investigatorCheyenne.jpg";
import luImage from "../../images/techguy.jpg";
import mattImage from "../../images/matt.png";

const Crew = () => {
  const {
    cards,
    cardsItem,
    card,
    cardImage,
    cardContent,
    cardTitleWrapper,
    cardTitle,
    cardText,
    titleWrapper
  } = styles;
  const crewMembers = [
    {
      image: bryantImage,
      name: "Bryant Richards",
      title: "Lead Investigator",
      quote: "In the end, it only matters what you believe.",
    },
    {
      image: cheyenneImage,
      name: "Cheyenne Bowman",
      title: "Investigator/Social Media Manager",
      quote: "Ah, crap. It's a ghost.",
    },
    {
      image: luImage,
      name: "Lucius Richards",
      title: "Investigator/Tech and Support",
      quote: "That's a nope.",
    },
    {
      image: mattImage,
      name: "Matthew Bowman",
      title: "Investigator/Tech and Support",
      quote: "The afterlife catches up with all of us, so why not look into it while we are here?",
    },
  ];
  return (
    <ul className={cards}>
      {crewMembers
        ? crewMembers.map((member) => (
            <li className={cardsItem}>
              <div className={card}>
                <div
                  className={cardImage}
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <div className={cardContent}>
                  <div className={cardTitleWrapper}>
                    <div className={cardTitle}>{member.name}</div>
                    <div className={cardTitle}> </div>
                    <div className={cardTitle}>{member.title}</div>
                  </div>
                  <blockquote className={cardText}>{member.quote}</blockquote>
                </div>
              </div>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Crew;
