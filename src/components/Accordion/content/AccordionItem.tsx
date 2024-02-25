import styles from "./AccordionItem.module.scss";
import minus from "../../../assets/images/icon-minus.svg";
import plus from "../../../assets/images/icon-plus.svg";
import { Dispatch, SetStateAction } from "react";
type AccordionProps = {
  values: {
    id: number;
    title: string;
    content: string;
  };
  key: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

function AccordionItem({
  values,
  activeIndex,
  setActiveIndex,
}: AccordionProps) {
  const isActive = activeIndex === values.id;

  function handleChange() {
    setActiveIndex(activeIndex !== values.id ? values.id : -1);
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
