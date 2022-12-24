import styles from "./Warning.module.css";

export const Warning = (props) => {

  const warningTypes = {
    danger: "danger",
    warning: "warning",
    informative: "informative",
  };

  const result = Object.values(warningTypes).filter(
    (error) => error === props.type
  );

  let content;

  if(result.length < 1) {
    throw new Error('Classname couldnt find');
  } else {
    content =
    <div className={`${styles[props.type]} ${styles.warningWrapper}`}>
    <p className={styles.warningTitle}>Warning</p>
        {props.text}
    </div>
  }

  return (
    <div>
        {content}
    </div>
  );
};
