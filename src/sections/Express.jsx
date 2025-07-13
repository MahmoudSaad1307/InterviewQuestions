
import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';
import { expressQuestions } from '../data/questionsData';

const Express = () => {
  return (
  <Topic
      title="Express"
      icon="express-js.png"
      questions={expressQuestions}
      topicColor={techColors.express}
    />
    )
}

export default Express