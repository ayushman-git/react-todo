import styles from "./ShowDate.module.css";

const ShowDate = (props) => {
  return (
    <section className={styles.wrap}>
      <h1 className={styles.date}>{props.selectedDate.getDate()}</h1>
      <h3 className={styles.month}>
        {props.monthNames[props.selectedDate.getMonth()]}
      </h3>
    </section>
  );
};

export default ShowDate;
