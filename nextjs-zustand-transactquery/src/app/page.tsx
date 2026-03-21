'use client';
import styles from "./page.module.css";
import Counter from "@/app/components/Counter";
import TodoListWithTanstackQuery from "@/app/components/TodoListWithTanstackQuery";
import withAuth from "@/app/components/withAuth";

 function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.intro}>
            Welcome to SPA with zustand+ tanstack query
          {/*<Counter/>*/}
           {/* <TodoListWithTanstackQuery/>*/}
        </div>
      </main>
    </div>
  );
}
const HomeWithAuth = withAuth(Home);
export default HomeWithAuth;