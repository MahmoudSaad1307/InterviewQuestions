import React from 'react'
import Topic from '../components/topic/Topic';
import { techColors } from '../assets/styles/colors';
import { jsQuestions } from '../data/questionsData';



const Javascript = () => {
  return (
<Topic title="Javascript" noNeedForIconContainer={true} icon="JavaScript-logo.png" questions={jsQuestions} topicColor={techColors.javascript}/>
  )
}

export default Javascript