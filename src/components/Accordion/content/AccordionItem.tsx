import styles from "./AccordionItem.module.scss";
import minus from "../../../assets/images/icon-minus.svg";
import plus from "../../../assets/images/icon-plus.svg";
type AccordionProps = {
  values: {
    id: number;
    title: string;
    content: string;
  };
  key: number;
  activeIndex: number;
  setActiveIndex(a: number): void;
};

function AccordionItem({
  values,
  activeIndex,
  setActiveIndex,
}: AccordionProps) {
  const isActive = activeIndex === values.id;

  function handleChange() {
    setActiveIndex(values.id);
  }
  return (
    <div className={styles.item}>
      <div className={styles.title} onClick={() => handleChange()}>
        <h3 className={isActive ? styles.active : undefined}>{values.title}</h3>
        <img src={isActive ? plus : minus} alt="toggle" />
      </div>
      {isActive && <p>{values.content}</p>}
    </div>
  );
}

export default AccordionItem;
