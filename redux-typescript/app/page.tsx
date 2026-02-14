import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import Container from "@/app/components/Container";
import FormDemo from "@/app/components/FormDemo";
import Header from "@/app/components/Header";
import Greeting2 from "@/app/components/Greeting2";
import ListTodo from "@/app/components/ListTodo";

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
    <ListTodo/>
  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
