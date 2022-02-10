import React from "react";
import styles from "./styles.module.css";
import bryantImage from "../../images/leadinvestigator.jpg";
import cheyenneImage from "../../images/investigatorCheyenne.jpg";
import luImage from "../../images/techguy.jpg";

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
      title: "Investigator/Tech",
      quote: "That's a nope.",
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
