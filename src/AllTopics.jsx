import React from "react";
import HtmlCss from "./sections/HtmlCss";
import Javascript from "./sections/Javascript";
import ReactSection from "./sections/ReactSection";
import Mongodb from "./sections/Mongodb";
import Nodejs from "./sections/Nodejs";
import Express from "./sections/Express";
import Typescript from "./sections/Typescript";
import styles from "./AllTopics.module.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import StatItem from "./components/StatItem";
import { techColors } from "./assets/styles/colors";
import { expressQuestions, htmlCssQuestions, jsQuestions, mongoQuestions, nodeQuestions, reactQuestions } from "./data/questionsData";

const AllTopics = () => {
  return (
    <div className={` min-h-screen p-6  `}>
      <div className="container px-0  ">
        <header className={`${styles.header} `}>
          <h1 className="text-3xl font-bold mb-2">Crack the Interview!</h1>
          <p className="opacity-80 text-sm">
            Everything a Junior Full-Stack Dev Needs to Know
          </p>
        </header>
        <div
          className={` ${styles.navigationContainer}  grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`}
        >
          <Link to="htmlcss" smooth={true} duration={800}>
            <StatItem
              title={"HTML & CSS"}
              topicColor={techColors.htmlCss}
              numberOfQuestions={htmlCssQuestions.length}
            />
          </Link>

          <Link to="javascript" smooth={true} duration={800}>
            <StatItem
              title={"Javascript"}
              topicColor={techColors.javascript}
              numberOfQuestions={jsQuestions.length}
            />
          </Link>

          <Link to="react" smooth={true} duration={800}>
            <StatItem
              title={"React"}
              topicColor={techColors.react}
              numberOfQuestions={reactQuestions.length}
            />
          </Link>

          <Link to="mongodb" smooth={true} duration={800}>
            <StatItem
              title={"MongoDB"}
              topicColor={techColors.mongodb}
              numberOfQuestions={mongoQuestions.length}
            />
          </Link>
          <Link to="nodejs" smooth={true} duration={800}>
            <StatItem
              title={"NodeJS"}
              topicColor={techColors.nodejs}
              numberOfQuestions={nodeQuestions.length}
            />
          </Link>

          <Link to="express" smooth={true} duration={800}>
            <StatItem
              title={"Express"}
              topicColor={techColors.express}
              numberOfQuestions={expressQuestions.length}
            />
          </Link>
        </div>
        <div className="container py-2">
          <Element name="htmlcss" className={styles.section}>
            <HtmlCss />
          </Element>

          <Element name="javascript" className={styles.section}>
            <Javascript />
          </Element>
          <Element name="react" className={styles.section}>
            <ReactSection />
          </Element>

          <Element name="nodejs" className={styles.section}>
            <Nodejs />
          </Element>
          <Element name="express" className={styles.section}>
            <Express />
          </Element>
          <Element name="mongodb" className={styles.section}>
            <Mongodb />
          </Element>
        </div>

        <button
          onClick={() => scroll.scrollToTop({ duration: 800 })}
          className="fixed bottom-6 right-6 bg-[#8b2a9e] text-white px-4 py-2 rounded shadow hover:bg-[#6f2380] transition"
        >
          <FontAwesomeIcon icon={faArrowUp} className="me-2" />
          Back to Top
        </button>

        {/* <HtmlCss />
      <Javascript />
      <ReactSection />
      <Mongodb />
      <Nodejs />
      <Express />
      <Typescript /> */}
      </div>
    </div>
  );
};

export default AllTopics;
