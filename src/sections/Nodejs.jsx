import { techColors } from "../assets/styles/colors";
import Topic from "../components/topic/Topic";
import { nodeQuestions } from "../data/questionsData";

const Nodejs = () => {
  return (
    <Topic
      title="NodeJS"
      icon="nodedotjs.svg"
      questions={nodeQuestions}
      topicColor={techColors.nodejs}
    />
  );
};

export default Nodejs;
