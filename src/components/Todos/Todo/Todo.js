import styles from "./Todo.module.css";

const Todo = (props) => {
  console.log(props.completed);
  const onChangeHandler = (e) => {
    props.changeStatus(e, props.id);
  };

  let task;
  if (props.completed) {
    task = (
      <del className={styles.todoWrapDel}>
        {props.description}
        <input
          type="checkbox"
          checked={props.completed}
          onChange={onChangeHandler}
        />
      </del>
    );
  } else {
    task = (
      <p className={styles.todoWrap}>
        {props.description}
        <input
          type="checkbox"
          checked={props.completed}
          onChange={onChangeHandler}
        />
      </p>
    );
  }
  return <div className={styles.wrap}>{task}</div>;
};

export default Todo;
