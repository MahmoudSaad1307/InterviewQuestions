const expressQuestions = [
  { question: "What is Express.js?", answer: "A lightweight web framework for Node.js used to build APIs and web apps." },
  { question: "How do you install Express?", answer: "`npm install express`" },
  { question: "How do you define a route?", answer: "`app.get('/route', callback)`" },
  { question: "What is middleware in Express?", answer: "Functions that execute during the request/response cycle." },
  { question: "How to handle POST data?", answer: "Use `express.json()` or `body-parser` to parse incoming JSON." },
  { question: "Difference between `app.use()` and `app.get()`?", answer: "`app.use()` applies middleware; `app.get()` handles GET requests." },
  { question: "What are route parameters?", answer: "Dynamic values in route paths, accessed via `req.params`." },
  { question: "Difference between `req.params` and `req.query`?", answer: "`params` comes from the URL path; `query` from query string." },
  { question: "How to serve static files?", answer: "Use `express.static('folder')`." },
  { question: "How to handle errors globally?", answer: "Define a middleware with 4 parameters: `(err, req, res, next)`." },
  { question: "What is `next()` used for?", answer: "To pass control to the next middleware function." },
  { question: "What is Express Router?", answer: "A way to modularize route handling using `express.Router()`." },
  { question: "How to validate input?", answer: "Use `express-validator` or `joi` libraries." },
  { question: "How do you implement authentication?", answer: "Use JWT or libraries like `passport`." },
  { question: "What is the purpose of CORS?", answer: "To allow cross-origin requests. Use the `cors` package." },
  { question: "What is body-parser?", answer: "A middleware to parse incoming request bodies." },
  { question: "How to create REST APIs?", answer: "Use HTTP methods like GET, POST, PUT, DELETE with Express routes." },
  { question: "What are HTTP status codes?", answer: "`200` (OK), `400` (Bad Request), `401` (Unauthorized), etc." },
  { question: "What is Helmet in Express?", answer: "Middleware that sets security-related HTTP headers." },
  { question: "How to implement rate limiting?", answer: "Use `express-rate-limit` package." }
];
import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';

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