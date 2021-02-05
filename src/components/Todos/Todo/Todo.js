import styles from "./Todo.module.css";

const Todo = (props) => {
  const onChangeHandler = (e) => {
    props.changeStatus(e, props.id);
  };
  return (
    <div className={styles.wrap}>
      <p className={styles.todoWrap}>
        {props.description}
        <input
          type="checkbox"
          checked={props.completed}
          onChange={onChangeHandler}
        />
      </p>
    </div>
  );
};

export default Todo;
