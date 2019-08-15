import React from 'react'
import ReactDOM from 'react-dom'

const JSX = <h1>Hello JSX!</h1>;
const JSX2 = <div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>;

const JSX3 = (
  <div className = "myDiv">
    <h1>This is a block of JSX</h1>
    <p>Here is a subtitle</p>
  </div>
/*<h1>Hanoi University of Science</h1>*/
);

const MyComponent = function() {
  return(
      <div>Completed challenge!</div>
  );
}

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
  }
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { }
      <ChildComponent />

        { }
      </div>
    );
  }
};

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { <TypesOfFruit /> }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { <Fruits /> }
      </div>
    );
  }
};

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};

const List= (props) => {
  return <p>{props.tasks.join(', ')}, {props.items}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["Walk", "Cook", "Bake"]} items = {"100"}/>
      </div>
    );
  }
};
List.propTypes = {
  items: PropTypes.string
};
List.defaultProps = {
  items: "59"
}

ReactDOM.render(JSX, document.getElementById('root'))
ReactDOM.render(<ToDo />, document.getElementById('challenge-node'))

//React: Use PropTypes to Define the Props You Expect
