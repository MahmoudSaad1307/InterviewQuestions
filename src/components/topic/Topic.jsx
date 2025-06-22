import React, { useState } from "react";
import TopicHeader from "./TopicHeader";
import Question from "./Question";
import styles from "./Topic.module.css";
import { Collapse } from "react-collapse";

const Topic = (props) => {
  const [isExpanded, setIsExpanded] = useState(true); // default: expanded

  const {
    title,
    questions,
    topicColor,
    icon,
    noNeedForIconContainer = false,
  } = props;
  return (
    <>
      <div
        className={`${
          title.toLowerCase() === "typescript" && !isExpanded && "mb-5"
        }`}
      >
        <TopicHeader
          title={title}
          topicColor={topicColor}
          icon={icon}
          noNeedForIconContainer={noNeedForIconContainer}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>
      <Collapse isOpened={isExpanded}>
        {questions.map((q, index) => (
          <Question
            key={q.id}
            topicColor={topicColor}
            index={index}
            question={q.question}
            answer={q.answer}
            id={q.id}
          />
        ))}
      </Collapse>
    </>
  );
};
export default Topic;
