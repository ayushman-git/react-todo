import styles from "./Todos.module.css";
import Todo from "./Todo/Todo";

const Todos = (props) => {
  let input;

  const todos = props.todos?.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        description={todo.description}
        changeStatus={props.changeStatus}
        delTodo={props.delTodo}
      />
    );
  });

  const onEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length) {
      props.addTodo(e);
      e.target.value = "";
    }
  };

  if (props.showInput) {
    input = (
      <input
        className={styles.inp}
        type="text"
        onKeyUp={onEnter}
        placeholder="Add task"
      />
    );
  }
  return (
    <section className={styles.todosWrap}>
      {input}
      {todos}
    </section>
  );
};

export default Todos;
