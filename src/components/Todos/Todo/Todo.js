import styles from "./Todo.module.css";

const Todo = (props) => {
  console.log(props);
  return (
    <div className={styles.wrap}>
      <p>{props.description}</p>
    </div>
  );
};

export default Todo;
