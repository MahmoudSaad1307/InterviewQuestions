import React from 'react'
import { techColors } from '../assets/styles/colors';
import Topic from '../components/topic/Topic';
const typescriptQuestions = [
  { question: "What is TypeScript?", answer: "A superset of JavaScript that adds static typing." },
  { question: "Why use TypeScript?", answer: "To catch errors at compile time and improve code maintainability." },
  { question: "How do you define a variable with a type?", answer: "`let age: number = 25;`" },
  { question: "What is a union type?", answer: "Allows a variable to have multiple types: `let val: string | number;`" },
  { question: "What is an interface in TypeScript?", answer: "A structure that defines the shape of an object." },
  { question: "Difference between interface and type?", answer: "`interface` is extendable, better for objects; `type` is more flexible (e.g. unions)." },
  { question: "What are enums?", answer: "A way to define a set of named constants: `enum Direction { Up, Down }`" },
  { question: "How do you define a function type?", answer: "`const greet: (name: string) => void = () => {}`" },
  { question: "What is type inference?", answer: "TypeScript automatically infers types when not explicitly declared." },
  { question: "What is the `any` type?", answer: "Allows any type, disables type checking (use sparingly)." },
  { question: "What is the `unknown` type?", answer: "A safer alternative to `any`; must be type-checked before use." },
  { question: "What is `never` type?", answer: "Indicates a function that never returns (e.g. throws error or infinite loop)." },
  { question: "What are generics?", answer: "Reusable code templates: `function identity<T>(arg: T): T`" },
  { question: "How do you use type assertions?", answer: "`let value = someValue as string;`" },
  { question: "What is a tuple?", answer: "A fixed-length array with specific types: `let x: [string, number];`" },
  { question: "What is `readonly` in TypeScript?", answer: "Prevents modification of a property or array." },
  { question: "How do you create optional properties?", answer: "Using `?`: `interface User { name?: string }`" },
  { question: "What is `Partial<T>` utility type?", answer: "Makes all properties in `T` optional." },
  { question: "What is `Record<K, T>`?", answer: "Constructs an object type with keys K and values T." },
  { question: "What is `Pick<T, K>`?", answer: "Creates a type with a subset of properties from `T`." }
];


const Typescript = () => {
  return (
    <Topic
      title="TypeScript"
      icon="typescript-icon.svg"
      noNeedForIconContainer={true}
      questions={typescriptQuestions}
      topicColor={techColors.typescript}
    />
  )
}

export default Typescript