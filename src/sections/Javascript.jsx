import React from 'react'
import Topic from '../components/topic/Topic';
import { techColors } from '../assets/styles/colors';

const jsQuestions = [
  { question: "What are JavaScript’s data types?", answer: "String, Number, Boolean, Null, Undefined, Object, Symbol, BigInt." },
  { question: "Difference between var, let, and const?", answer: "var is function-scoped; let and const are block-scoped. const can't be reassigned." },
  { question: "What is hoisting?", answer: "JS moves variable/function declarations to the top during compile." },
  { question: "What are arrow functions?", answer: "Shorter syntax for functions, no own 'this' context." },
  { question: "What is a closure in JS?", answer: "Function that accesses outer scope even after that scope has returned." },
  { question: "Difference between == and ===?", answer: "=== checks value and type; == does type coercion." },
  { question: "What is the event loop?", answer: "It handles async callbacks in a single-threaded non-blocking way." },
  { question: "What are Promises?", answer: "Objects representing eventual completion or failure of async operations." },
  { question: "Explain async/await.", answer: "Syntax sugar for working with Promises for better readability." },
  { question: "What is a callback function?", answer: "A function passed as an argument to be executed later." },
  { question: "Difference between null and undefined?", answer: "null is assigned intentionally; undefined means not assigned." },
  { question: "What are template literals?", answer: "Strings using backticks and `${}` for interpolation." },
  { question: "What is destructuring?", answer: "Extracting values from arrays or properties from objects." },
  { question: "What is the spread operator?", answer: "Expands iterable elements or object properties." },
  { question: "Difference between .map(), .filter(), .reduce()?", answer: "map transforms, filter removes unwanted, reduce accumulates values." },
  { question: "What is event delegation?", answer: "Attaching a single event listener to parent to handle events for children." },
  { question: "What are default parameters?", answer: "Allow initializing parameters with default values." },
  { question: "How does this work in JS?", answer: "It refers to the calling context (differs in arrow vs regular functions)." },
  { question: "Difference between synchronous and asynchronous?", answer: "Sync runs sequentially; async allows concurrent execution." },
  { question: "What are JavaScript modules?", answer: "Files exporting/importing reusable code using import/export syntax." }
];

const Javascript = () => {
  return (
<Topic title="Javascript" noNeedForIconContainer={true} icon="JavaScript-logo.png" questions={jsQuestions} topicColor={techColors.javascript}/>
  )
}

export default Javascript