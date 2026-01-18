import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "@/app/components/HelloWorld";

export default function Home() {
  return (
    <div className={styles.page}>
      <main >
        <h1>Hello</h1>
          <HelloWorld/>
          <HelloWorld/>
          <HelloWorld/>
      </main>
    </div>
  );
}
