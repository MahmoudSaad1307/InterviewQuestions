import React from 'react'
import styles from "./StatItem.module.css";
const StatItem = ({title,numberOfQuestions=20,topicColor}) => {
  // console.log("topicColor", topicColor, title);
  
  return (
    <div className={`${styles.statItem}`}>
      <div style={{color: topicColor}} className={`${styles.statNumber}`}>
        {numberOfQuestions}
      </div>
      <div>{title}</div>
    </div>
  );
}

export default StatItem