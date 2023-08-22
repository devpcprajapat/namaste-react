import React from "react";
import ReactDOM from "react-dom/client";

// React Component
// Components are just javascript function which is return some piece of react elements or JSX
// Components are 2 types
// 1. Functional Component [New Way]
// 2. Class Component [Old Way]

const Title = () => {
  return <h1 className="title">This is title Component</h1>;
};

const HeadingComponent = () => (
  <div className="container">
    {1000 + 2000}
    {Title()}
    <Title />
    <Title></Title>
    <h2>This is HeadingComponent</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // Render the component in DOM with id root
