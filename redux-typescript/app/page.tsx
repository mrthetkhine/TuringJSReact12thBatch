import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import Container from "@/app/components/Container";
import FormDemo from "@/app/components/FormDemo";
import Header from "@/app/components/Header";
import Greeting2 from "@/app/components/Greeting2";
import ListTodo from "@/app/components/hook/ListTodo";
import ReduxTodoList from "@/app/components/todo/ReduxTodoList";
import TodoCount from "@/app/components/hook/TodoCount";
import RtkQueryTodoList from "@/app/components/todoapi/RtkQueryTodoList";

export default function IndexPage() {

  return (<div>
    {/*<Counter />*/}
    {/*<Greeting message={"Hello"}/>*/}
    {/*<Container>
      <h1>
        First
      </h1>
      <h2>Second</h2>
    </Container>*/}
    {/*<FormDemo/>*/}
   {/* <Header message={"Hello World"} tag={"h3"}>

    </Header>*/}
    {/*<Greeting2 message={"Hello world"}/>*/}
   {/* <ListTodo/>*/}
   {/* <TodoCount/>
    <ReduxTodoList />*/}
    <RtkQueryTodoList/>
  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
