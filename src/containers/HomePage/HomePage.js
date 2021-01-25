import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import ShowDate from "../../components/ShowDate/ShowDate";
import Todos from "../../components/Todos/Todos";

const HomePage = () => {
  const [date, setDate] = useState(new Date());
  const [monthNames] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [todos, setTodos] = useState([]);
  const addTodo = (e) => {
    const localTodos = [...todos];
    localTodos.push({ date: new Date(), description: e.target.value });

    setTodos(localTodos);
    console.log(todos);
  };

  // useEffect(() => {
  //   (async function fetchTodos() {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const todos = await data.json();
  //     // setTodos(todos.splice(0, 5));
  //   })();
  // }, []);

  return (
    <section className={styles.wrap}>
      <ShowDate selectedDate={date} monthNames={monthNames} />
      <Todos todos={todos} addTodo={(e) => addTodo(e)} />
    </section>
  );
};

export default HomePage;
