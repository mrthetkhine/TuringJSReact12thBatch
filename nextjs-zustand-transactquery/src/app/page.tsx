import Image from "next/image";
import styles from "./page.module.css";
import Counter from "@/app/components/Counter";
import TodoListWithTanstackQuery from "@/app/components/TodoListWithTanstackQuery";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.intro}>
          <Counter/>
           {/* <TodoListWithTanstackQuery/>*/}
        </div>
      </main>
    </div>
  );
}
