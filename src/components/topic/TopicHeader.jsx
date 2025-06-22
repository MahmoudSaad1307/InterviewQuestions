/* eslint-disable no-constant-condition */
import React from "react";
import styles from "./TopicHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowUp,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const TopicHeader = ({
  title,
  topicColor,
  icon,
  noNeedForIconContainer,
  isExpanded,
  setIsExpanded,
}) => {
  console.log(icon);
  return (
    <>
      <div
        style={{ borderBottom: `2px solid ${topicColor}` }}
        className={`${styles.mainTitle} d-flex align-items-center`}
      >
        {!noNeedForIconContainer ? (
          <div
            className={`d-flex align-items-center  ${styles.iconContainer}`}
            style={{ background: topicColor }}
          >
            <img
              style={{ background: "" }}
              src={`src/assets/icons/${icon}`}
              alt={title}
              width="50"
            />{" "}
          </div>
        ) : (
          <>
            <img
            
              className="me-2"
              style={{
                borderRadius: "10px",
                height: "60px",
                width: "60px",
                // padding: "10px",
                marginRight: "10px",
              }}
              src={`src/assets/icons/${icon}`}
              alt={title}
              width="50"
            />
          </>
        )}
        {title}
         <FontAwesomeIcon
         onClick={() => setIsExpanded(!isExpanded)}
        className="ms-auto cursor-pointer"
        icon={isExpanded ? faChevronDown : faChevronUp}
  style={{ fontSize: '1.5rem' }}
        color={"#464646FF"}
      />
      </div>
      {/* <hr style={{ backgroundColor: topicColor }} className={styles.divider}></hr> */}
    </>
  );
};
export default TopicHeader;
