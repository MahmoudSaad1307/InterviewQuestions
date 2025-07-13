import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';
import { mongoQuestions } from '../data/questionsData';



const Mongodb = () => {
  return (
      <Topic
      title="MongoDB"
      icon="mongodb.svg"
      questions={mongoQuestions}
      topicColor={techColors.mongodb}
    />
  )
}

export default Mongodb