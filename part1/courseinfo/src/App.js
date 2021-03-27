import React from "react";

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = ({ name, exercise }) => {
  return (
      <p>
        {name} {exercise}
      </p>
  );
};

const Content = ({ parts }) => {
  // console.log(parts)
  return (
    <div>
      {parts.map(({ name, exercise }, index) => {
        return <Part key={index} name={name} exercise={exercise} />;
      })}
    </div>
  );
};


const Total = ({ parts }) => {
  // console.log(parts)
  let total = 0;
  parts.forEach((part) => {
    total += part.exercise;
  });
  //console.log(total);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name:"Fundamentals of React",
        exercise: 10
      },
      {
        name: "Using props to pass data",
        exercise: 7
      },
      {
        name: "State of a component",
        exercise: 14
      }
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
