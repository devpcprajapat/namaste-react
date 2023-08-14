/* let heading = React.createElement(
  "h1",
  { id: "heading", msg: "message" },
  "Hello world with react!"
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

/**
   <div id="parent">
      <div id="child1">
        <h1>I'm an H1 tag </h1>
        <h2>I'm an H2 tag </h2>
      </div>
      <div id="child2">
        <h1>I'm an H1 tag </h1>
        <h2>I'm an H2 tag </h2>
      </div>
    </div>
 */

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an another H1 tag"),
    React.createElement("h2", {}, "I'm an another H2 tag"),
  ]),
]);
console.log(parent); // object
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
