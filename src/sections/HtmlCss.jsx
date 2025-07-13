import React from "react";
import Topic from "../components/topic/Topic";
import { techColors } from "../assets/styles/colors";
import { htmlCssQuestions } from "../data/questionsData";

const HtmlCss = () => {
  
  return (
    <Topic
      title="HTML & CSS"
      icon="html-css.png"
      questions={htmlCssQuestions}
      topicColor={techColors.htmlCss}
    />
  );
};

export default HtmlCss;
