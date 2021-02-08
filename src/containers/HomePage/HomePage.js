import React, { useState, useEffect, useCallback } from "react";
import styles from "./HomePage.module.css";
import ShowDate from "../../components/ShowDate/ShowDate";
import Todos from "../../components/Todos/Todos";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const [date] = useState(new Date());
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
    localTodos.push({
      description: e.target.value,
      completed: false,
      id: uuidv4(),
    });
    setTodos(localTodos);
    storeTodosLocal();
  };

  const changeStatus = (e, id) => {
    const localTodos = [...todos];
    const todoToChange = localTodos.find((todo) => todo.id === id);
    const todoToChangeIndex = localTodos.findIndex((todo) => todo.id === id);

    todoToChange.completed = !todoToChange.completed;
    localTodos[todoToChangeIndex] = todoToChange;
    setTodos(localTodos);
  };

  const delTodo = (id) => {
    let localTodos = [...todos];
    const todoToDelIndex = localTodos.findIndex((todo) => todo.id === id);

    localTodos.splice(todoToDelIndex, 1);
    setTodos(localTodos);
  };

  const storeTodosLocal = useCallback(() => {
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    storeTodosLocal();
  }, [storeTodosLocal, todos]);

  useEffect(() => {
    const todosFromLocal = JSON.parse(localStorage.getItem("todos"));
    if (todosFromLocal) {
      setTodos(todosFromLocal);
    }
  }, []);

  return (
    <section className={styles.wrap}>
      <ShowDate selectedDate={date} monthNames={monthNames} />
      <Todos
        showInput={true}
        todos={todos}
        addTodo={(e) => addTodo(e)}
        delTodo={delTodo}
        changeStatus={(e, id) => {
          changeStatus(e, id);
        }}
      />
    </section>
  );
};

export default HomePage;
