import styles from "./Todos.module.css";
import Todo from "./Todo/Todo";

const Todos = (props) => {
  const todos = props.todos?.map((todo, index) => {
    console.log(todo);

    return <Todo key={index} date={todo.date} description={todo.description} />;
  });

  const onEnter = (e) => {
    if (e.key === "Enter") {
      props.addTodo(e);
      e.target.value = "";
    }
  };
  return (
    <section className={styles.todosWrap}>
      <input className={styles.inp} type="text" onKeyUp={onEnter} />
      {todos}
    </section>
  );
};

export default Todos;
