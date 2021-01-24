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
    localTodos.push({ [date]: e.target.value });

    setTodos(localTodos);
  };
  useEffect(() => {
    console.log(todos);
  });
  return (
    <section className={styles.wrap}>
      <ShowDate selectedDate={date} monthNames={monthNames} />
      <Todos addTodo={(e) => addTodo(e)} />
    </section>
  );
};

export default HomePage;
