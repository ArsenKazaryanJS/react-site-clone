import { ChevronRight, Link } from "lucide-react";
import "./referencMain.css";

export const ReferencMain = () => {
  return (
    <div className="referencMain-box">
      <div className="referenc-next ">
        <a href="#">API REFERENCE</a>
        <ChevronRight />
      </div>

      <div className="referencMainHead">
        <h1>React Reference Overview</h1>
        <p>
          This section provides detailed reference documentation for working
          with React. For an introduction to React, please visit the{" "}
          <span>Learn</span> section.
        </p>
        <h5 className="min-text">
          The React reference documentation is broken down into functional
          subsections:
        </h5>
      </div>

      <div className="features">
        <h3>
          React <Link />
        </h3>
        <h5 className="min-text">Programmatic React features:</h5>
        <p>
          <span>Hooks</span> - Use different React features from your
          components.
        </p>
        <p>
          <span>Components</span> - Built-in components that you can use in your
          JSX.
        </p>
        <p>
          <span>APIs</span> - APIs that are useful for defining components.
        </p>
        <p>
          <span>Directives</span> - Provide instructions to bundlers compatible
          with React Server Components.
        </p>
      </div>

      <div className="features">
        <h3>
          React DOM
          <Link />
        </h3>
        <h5 className="min-text">
          React-dom contains features that are only supported for web
          applications (which run in the browser DOM environment). This section
          is broken into the following:
        </h5>
        <p>
          <span>Hooks</span> - Hooks for web applications which run in the
          browser DOM environment.
        </p>
        <p>
          <span>Components</span> - React supports all of the browser built-in
          HTML and SVG components.
        </p>
        <p>
          <span>APIs</span> - The react-dom package contains methods supported
          only in web applications.
        </p>
        <p>
          <span>Client APIs </span> - The react-dom/client APIs let you render R
        </p>
        <p>
          <span>Server APIs </span> - The react-dom/server APIs let you render
          React components to HTML on the server.
        </p>
      </div>

      <div className="features">
        <h3>
          Rules of React <Link />
        </h3>
        <h5 className="min-text">
          React has idioms — or rules — for how to express patterns in a way
          that is easy to understand and yields high-quality applications:
        </h5>
        <p>
          <span>Components and Hooks must be pure </span> - Hooks are defined
          using JavaScript functions, but they represent a special type of
          reusable UI logic with restrictions on where they can be called.
        </p>
        <p>
          <span>React calls Components and Hooks</span> - React is responsible
          for rendering components and hooks when necessary to optimize the user
          experience. JSX.
        </p>
        <p>
          <span>Rules of Hooks </span> - Hooks are defined using JavaScript
          functions, but they represent a special type of reusable UI logic with
          restrictions on where they can be called.
        </p>
      </div>

      <div className="features">
        <h3>
          Legacy APIs <Link />
        </h3>
        <p>
          <span>Legacy APIs</span> - Exported from the react package, but not
          recommended for use in newly written code.
        </p>
      </div>

      <div className="next-hooks">
            <div className="react-hooks">
                <div className="hooks">
                    <p>NEXT</p>
                    <span>Hooks</span>
                </div>
                <ChevronRight />
            </div>
        </div>
    </div>
  );
};
