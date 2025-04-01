import { ChevronRight, Link } from "lucide-react";
import "./learnMain.css";
import { LearnCodeBlock } from "../LearnCodeBlok/LearnCodeBlock";
import CodeBlock from "../CodeBlock/CodeBlock";

export const LearnMain = ({ theme }) => {
  const sampleCode = {
    code1: `function MyButton() {
        return (
          <button>I'm a button</button>
        );
      }`,
    code2: `export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`,
    code3: `function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`,
  };

  return (
    <div className="learnMainBox">
      <div className="learn-next ">
        <a href="#">LEARN REACT</a>
        <ChevronRight />
      </div>

      <div className="learnMainHead">
        <h1>Quick Start</h1>
        <p>
          Welcome to the React documentation! This page will give you an
          introduction to 80% of the React concepts that you will use on a daily
          basis.
        </p>
      </div>

      <div className="willLearn">
        <h2>You will learn</h2>
        <p>How to create and nest components</p>
        <p>How to add markup and styles</p>
        <p>How to display data</p>
        <p>How to render conditions and lists</p>
        <p>How to respond to events and update the screen</p>
        <p>How to share data between components</p>
      </div>

      <div className="learnText">
        <h3>
          Creating and nesting components <Link />
        </h3>
        <p>
          React apps are made out of components. A component is a piece of the
          UI (user interface) that has its own logic and appearance. A component
          can be as small as a button, or as large as an entire page.
        </p>
        <p>React components are JavaScript functions that return markup:</p>
      </div>

      <div className="tabComponent">
        <LearnCodeBlock sampleCode={sampleCode.code1} theme={theme} />
        <p>
          Now that you’ve declared <span>MyButton</span>, you can nest it into
          another component:
        </p>
        <LearnCodeBlock sampleCode={sampleCode.code2} theme={theme} />
        <p>
          Notice that <span>MyButton</span> starts with a capital letter. That’s
          how you know it’s a React component. React component names must always
          start with a capital letter, while HTML tags must be lowercase.
        </p>
        <p>Have a look at the result:</p>
        <CodeBlock sampleCode={sampleCode.code3} theme={theme} />
        <p>
          The <span>export default</span> keywords specify the main component in the file. If
          you’re not familiar with some piece of JavaScript syntax, <span className="sp">MDN</span> and
          <span className="sp">javascript.info</span> have great references.
        </p>
      </div>
    </div>
  );
};
