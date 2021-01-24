import styles from "./Todos.module.css";

const Todos = (props) => {
  const onEnter = (e) => {
    if (e.key === "Enter") {
      props.addTodo(e);
      e.target.value = "";
    }
  };
  return (
    <section className={styles.todosWrap}>
      <input className={styles.inp} type="text" onKeyUp={onEnter} />
    </section>
  );
};

export default Todos;
