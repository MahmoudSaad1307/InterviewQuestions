import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';

const nodeQuestions = [
  { question: "What is Node.js?", answer: "Node.js is a runtime environment that lets you run JavaScript on the server side using Chrome's V8 engine." },
  { question: "How does Node.js work?", answer: "It uses a non-blocking, event-driven architecture on a single thread to handle multiple requests asynchronously." },
  { question: "What is the event loop in Node.js?", answer: "A mechanism that allows Node.js to perform non-blocking I/O operations by offloading them to the system kernel." },
  { question: "What are CommonJS and ES Modules?", answer: "CommonJS uses `require()`/`module.exports`; ES Modules use `import`/`export` syntax." },
  { question: "What is npm?", answer: "npm is the Node package manager used to install and manage JavaScript packages." },
  { question: "How do you create a basic server in Node.js?", answer: "Use the built-in `http` module with `createServer()` method." },
  { question: "What is a callback function?", answer: "A function passed as an argument that is executed after another function completes." },
  { question: "Difference between synchronous and asynchronous code?", answer: "Synchronous blocks execution; asynchronous allows non-blocking operations." },
  { question: "What is middleware?", answer: "A function that executes during the lifecycle of a request to the server." },
  { question: "What does the `fs` module do?", answer: "Provides file system-related functionality such as reading and writing files." },
  { question: "How to read a file in Node.js?", answer: "Use `fs.readFile(path, callback)`." },
  { question: "What is the purpose of `require()`?", answer: "To import built-in, user-defined, or npm modules." },
  { question: "What is the `process` object?", answer: "Provides information and control over the current Node.js process." },
  { question: "How do you handle uncaught exceptions?", answer: "Use `process.on('uncaughtException', callback)`." },
  { question: "What is the difference between spawn and exec?", answer: "`spawn` streams data; `exec` buffers the output." },
  { question: "What is a buffer in Node.js?", answer: "Temporary storage primarily for binary data during I/O operations." },
  { question: "How do you use environment variables?", answer: "With `process.env` and usually configured using the `dotenv` package." },
  { question: "What is package.json?", answer: "It contains metadata about the project and manages dependencies." },
  { question: "How do you install a local package?", answer: "Run `npm install <package-name>`." },
  { question: "How can you secure a Node.js app?", answer: "By validating inputs, avoiding eval, using helmet, rate limiting, and using HTTPS." }
];

const Nodejs = () => {

  return (
      <Topic
      title="NodeJS"
      icon="nodedotjs.svg"
      questions={nodeQuestions}
      topicColor={techColors.nodejs}
    />
  )
}

export default Nodejs