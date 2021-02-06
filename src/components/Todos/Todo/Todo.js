import styles from "./Todo.module.css";

const Todo = (props) => {
  const onChangeHandler = (e) => {
    props.changeStatus(e, props.id);
  };
  const delHandler = () => {
    props.delTodo(props.id);
  };

  let task;
  if (props.completed) {
    task = (
      <div className={styles.todoWrapDel}>
        <del>{props.description}</del>
        <div className={styles.aside}>
          <input
            type="checkbox"
            checked={props.completed}
            onChange={onChangeHandler}
          />
          <img
            className={styles.close}
            src="/assets/icons/close.svg"
            alt="close"
          />
        </div>
      </div>
    );
  } else {
    task = (
      <div className={styles.todoWrap}>
        <p>{props.description}</p>
        <div className={styles.aside}>
          <input
            type="checkbox"
            checked={props.completed}
            onChange={onChangeHandler}
          />
          <img
            onClick={delHandler}
            className={styles.close}
            src="/assets/icons/close.svg"
            alt="close"
          />
        </div>
      </div>
    );
  }
  return <div className={styles.wrap}>{task}</div>;
};

export default Todo;
