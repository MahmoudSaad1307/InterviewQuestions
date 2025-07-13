import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';
import { reactQuestions } from '../data/questionsData';


const ReactSection = () => {
  return (
    <Topic
      title="React"
      icon="react.svg"
      questions={reactQuestions}
      topicColor={techColors.react}
    />
  )
}

export default ReactSection