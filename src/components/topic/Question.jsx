import React, { useState } from "react";
import styles from "./Question.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Question = (props) => {
  const { question, answer, index, topicColor } = props;
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
    
      style={{ borderLeft: `5px solid ${topicColor}` }}
      className={`${styles.questionContainer} my-4`}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <div className="d-flex justify-content-between align-items-center">
        <span className={`${styles.question}`}>
          <span className={styles.questionNumber}>{index + 1}</span>
          {question}
        </span>
        <div style={{ cursor: "pointer" }}>
          {isRevealed ? (
            <ChevronUp size={20} color={topicColor} />
          ) : (
            <ChevronDown size={20} color="#888" />
          )}
        </div>
      </div>

      <div
        className={`${styles.answerWrapper} ${isRevealed ? styles.show : ""}`}
      >
        <span className={styles.answer}>{answer}</span>
      </div>
    </div>
  );
};

export default Question;
