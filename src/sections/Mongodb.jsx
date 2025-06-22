import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';


const mongoQuestions = [
  { question: "What is MongoDB?", answer: "A NoSQL, document-oriented database." },
  { question: "What is a document?", answer: "A record stored as a JSON-like object (BSON)." },
  { question: "What is a collection?", answer: "A group of related documents." },
  { question: "SQL vs NoSQL?", answer: "SQL uses tables and schemas; NoSQL uses flexible documents." },
  { question: "What is BSON?", answer: "Binary JSON – MongoDB's data format." },
  { question: "What is Mongoose?", answer: "An ODM for MongoDB to define schemas and models in Node.js." },
  { question: "How to insert a document?", answer: "Use `insertOne()` or `insertMany()`." },
  { question: "How to find documents?", answer: "`find()` returns an array; `findOne()` returns a single document." },
  { question: "How to update documents?", answer: "`updateOne()`, `updateMany()`, or `findByIdAndUpdate()` in Mongoose." },
  { question: "How to delete documents?", answer: "Use `deleteOne()`, `deleteMany()`, or `findByIdAndDelete()`." },
  { question: "How to connect to MongoDB in Node?", answer: "Use `mongoose.connect()` or MongoDB Node driver." },
  { question: "What is a schema?", answer: "Defines the structure and data types of a document in Mongoose." },
  { question: "What is an ObjectId?", answer: "A unique identifier automatically assigned to documents." },
  { question: "What is the Aggregation Pipeline?", answer: "A framework to process data through stages like `$match`, `$group`, etc." },
  { question: "How to index a field?", answer: "Use `createIndex()` to optimize query performance." },
  { question: "What is population in Mongoose?", answer: "It fills in referenced document fields automatically." },
  { question: "Difference between embedded and referenced docs?", answer: "Embedded: nested inside; Referenced: linked via ID." },
  { question: "How to secure MongoDB?", answer: "Enable auth, limit access, use TLS, and configure roles." },
  { question: "How to create a model?", answer: "`mongoose.model('Name', schema)`." },
  { question: "What is the use of `$set` in update?", answer: "To update specific fields without overwriting the whole document." }
];

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