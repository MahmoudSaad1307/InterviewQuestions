import React from "react";
import Topic from "../components/topic/Topic";
import { techColors } from "../assets/styles/colors";
const htmlCssQuestions = [
  {
    question: "What is semantic HTML and why is it important?",
    answer:
      "It uses tags that describe content meaning (like <header>), improving SEO and accessibility.",
  },
  {
    question:
      "What’s the difference between block, inline, and inline-block elements?",
    answer:
      "Block takes full width, inline fits content, inline-block behaves like inline but allows width/height.",
  },
  {
    question: "What is the CSS box model?",
    answer: "It consists of content, padding, border, and margin.",
  },
  {
    question: "How do you apply CSS to an HTML page?",
    answer: "Inline styles, internal <style> tag, or external CSS via <link>.",
  },
  {
    question: "What is CSS specificity?",
    answer:
      "A set of rules that determines which style is applied when multiple rules target the same element.",
  },
  {
    question: "What are pseudo-classes in CSS?",
    answer:
      "They define a special state of an element (e.g., :hover, :nth-child).",
  },
  {
    question: "How do media queries work?",
    answer:
      "They apply styles conditionally based on screen/device characteristics.",
  },
  {
    question: "What is Flexbox and when should you use it?",
    answer: "A 1D layout system for aligning items in rows/columns.",
  },
  {
    question: "What’s the difference between Flexbox and CSS Grid?",
    answer: "Flexbox is 1D (row/column), Grid is 2D (row + column).",
  },
  {
    question: "What are some accessibility practices in HTML?",
    answer: "Use semantic tags, labels, alt text, ARIA attributes.",
  },
  {
    question: "What’s the purpose of the alt attribute?",
    answer: "Describes images for screen readers and when images fail to load.",
  },
  {
    question: "Difference between <div> and <span>?",
    answer: "<div> is block-level, <span> is inline.",
  },
  {
    question: "Explain position: relative vs absolute.",
    answer:
      "Relative keeps element in flow; absolute positions relative to nearest positioned ancestor.",
  },
  {
    question: "How to center a div both vertically and horizontally?",
    answer: "Use Flexbox with justify-content and align-items center.",
  },
  {
    question: "What are rem and em units in CSS?",
    answer: "em is relative to parent font size; rem is relative to root.",
  },
  {
    question: "What is z-index?",
    answer: "Controls the vertical stacking order of elements.",
  },
  {
    question: "What are vendor prefixes?",
    answer:
      "Browser-specific prefixes for experimental features (e.g., -webkit-).",
  },
  {
    question: "What is display: none vs visibility: hidden?",
    answer:
      "display: none removes element; visibility: hidden hides it but keeps space.",
  },
  {
    question: "How do you optimize CSS performance?",
    answer:
      "Minify, remove unused styles, combine files, avoid deep selectors.",
  },
  {
    question: "What are HTML5 semantic elements?",
    answer: "<header>, <footer>, <article>, <section>, etc.",
  },
  {
    question: "What is the difference between <section> and <div>?",
    answer: "<section> is semantic; <div> is generic and non-semantic.",
  },
  {
    question: "What is ARIA in HTML?",
    answer:
      "Accessible Rich Internet Applications – attributes that enhance accessibility.",
  },
  {
    question: "How can you make a website responsive?",
    answer: "Using fluid layouts, media queries, and flexible images.",
  },
  {
    question: "What is the difference between ID and class?",
    answer: "ID is unique per page; class can be reused.",
  },
  {
    question: "What is specificity hierarchy in CSS?",
    answer: "Inline styles > IDs > classes > elements.",
  },
  {
    question: "How do you include custom fonts in a page?",
    answer: "Using `@font-face` or linking from Google Fonts.",
  },
  {
    question: "What is the difference between min-width and max-width?",
    answer:
      "`min-width` applies from that width up, `max-width` applies up to that width.",
  },
  {
    question: "How do you hide content for all users except screen readers?",
    answer:
      "Use `aria-hidden=false` and visually hide with CSS (e.g. `clip`, `sr-only`).",
  },
  {
    question: "What are media types in CSS?",
    answer:
      "Used in media queries to target specific devices (screen, print, etc.).",
  },
  {
    question: "How do you make an element draggable?",
    answer: "Add `draggable='true'` and use JS for logic.",
  },
];

const HtmlCss = () => {
  return (
    <Topic
      title="HTML & CSS"
      icon="html-css.png"
      questions={htmlCssQuestions}
      topicColor={techColors.htmlCss}
    />
  );
};

export default HtmlCss;
