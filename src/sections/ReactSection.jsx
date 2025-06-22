import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';

const reactQuestions = [
  { question: "What is React and why use it?", answer: "A JS library for building fast, reusable UI components." },
  { question: "What are components in React?", answer: "Building blocks of UI; can be class or functional." },
  { question: "What is JSX?", answer: "A syntax that lets you write HTML in JavaScript." },
  { question: "What are props in React?", answer: "Inputs to components passed from parent." },
  { question: "What is state in React?", answer: "Component's local, mutable data." },
  { question: "How does useState work?", answer: "Returns state value and setter function." },
  { question: "When do you use useEffect?", answer: "To perform side effects like fetching data or updating DOM." },
  { question: "How do you handle events in React?", answer: "Using onClick, onChange etc. as props." },
  { question: "What is conditional rendering?", answer: "Rendering components based on conditions (ternary or &&)." },
  { question: "Controlled vs uncontrolled components?", answer: "Controlled: state-driven; uncontrolled: relies on DOM." },
  { question: "Class vs functional components?", answer: "Functional uses hooks; class uses lifecycle methods and 'this'." },
  { question: "What is the Virtual DOM?", answer: "A lightweight copy of real DOM for efficient updates." },
  { question: "What is prop drilling?", answer: "Passing props down many levels; solved with context or Redux." },
  { question: "How do you manage forms in React?", answer: "With controlled components using state." },
  { question: "What is the Context API?", answer: "Allows passing global data without prop drilling." },
  { question: "What are keys in lists?", answer: "Unique identifiers to help React update efficiently." },
  { question: "What are React Fragments?", answer: "Allow grouping multiple elements without extra nodes." },
  { question: "What is lifting state up?", answer: "Moving shared state to the closest common ancestor." },
  { question: "What are React hooks?", answer: "Functions like useState, useEffect for managing state/lifecycle." },
  { question: "What is useRef and when would you use it?", answer: "Access DOM nodes or keep values across renders." }
];

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