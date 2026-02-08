import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld,{Welcome} from "@/app/components/HelloWorld";
import Profile from "@/app/components/Profile";
import JsxDemo from "@/app/components/JsxDemo";
import Avatar from "@/app/components/Avatar";
import Bordered from "@/app/components/Bordered";
import Dashboard from "@/app/components/conditional_render/Dashboard";
import ItemWithFlag from "@/app/components/conditional_render/ItemWithFlag";
import ItemList from "@/app/components/ItemList";
import UserList from "@/app/components/UserList";
import EventDemo from "@/app/components/interactivity/EventDemo";
import PropagationDemo from "@/app/components/interactivity/PropagationDemo";
import Counter from "@/app/components/Counter";
import TimerDemo from "@/app/components/TimerDemo";
import BatchUpdateDemo from "@/app/components/BatchUpdateDemo";
import ItemListWithState from "@/app/components/ItemListWithState";
import ObjectUpdate from "@/app/components/ObjectUpdate";
import FormDemo from "@/app/components/form/FormDemo";
import LoginForm from "@/app/components/form/LoginForm";
import Tabs from "@/app/components/Tabs";
import PosForm from "@/app/components/PosForm";
import FilterableProductTable from "@/app/components/FilterableProductTable";
import StateOnPosition from "@/app/components/reconciliation/StateOnPosition";
import DestroyComponent from "@/app/components/reconciliation/DestroyComponent";
import FancyComponent from "@/app/components/reconciliation/FancyComponent";
import DifferentComponent from "@/app/components/reconciliation/DifferentComponent";
import DifferentKey from "@/app/components/reconciliation/DifferentKey";
import TodoList from "@/app/components/TodoList";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";
import TodoListWithReducer from "@/app/components/reducer/TodoListWithReducer";
import WhyContext from "@/app/components/context/WhyContext";
import ContextDemo from "@/app/components/context/ContextDemo";
import TodoWithContextDemo from "@/app/components/context/TodoWithContextDemo";
import WhyRef from "@/app/components/ref/WhyRef";
import FocusInput from "@/app/components/ref/FocusInput";
import CustomInputDemo from "@/app/components/ref/CustomInputDemo";
import EffectDemo from "@/app/components/effect/EffectDemo";
import EffectLifeCycle from "@/app/components/effect/EffectLifeCycle";
import TimerDemo2 from "@/app/components/effect/TimerDemo2";
import CleanUpDemo from "@/app/components/effect/CleanUpDemo";
import TodoWithDataFetch from "@/app/components/effect/TodoWithDataFetch";
import LoadTodo from "@/app/components/hooks/LoadTodo";
import LoadUser from "@/app/components/hooks/LoadUser";
import LoadDataWithHook from "@/app/components/hooks/LoadDataWithHook";
import FormWithHook from "@/app/components/hooks/FormWithHook";
import SimpleLoginForm from "@/app/components/form/SimpleLoginForm";
import MovieForm from "@/app/components/form/MovieForm";
import SimpleLoginFormWithUseForm from "@/app/components/form/SimpleLoginWithUseForm";
import WhyRenderProp from "@/app/components/design_pattern/render_property/WhyRenderProp";
import RenderPropDemo from "@/app/components/design_pattern/render_property/RenderPropDemo";
import WhyHoc from "@/app/components/design_pattern/hoc/WhyHoc";
import HocWithLoggerDemo from "@/app/components/design_pattern/hoc/HocWithLoggerDemo";
import WhyHocAuth from "@/app/components/design_pattern/hoc/WhyHocAuth";
import AuthDemo from "@/app/components/design_pattern/hoc/AuthDemo";
import ProtectedDemo from "@/app/components/design_pattern/compound/ProtectedDemo";
import RouterDemo from "@/app/components/router/RouterDemo";
import WhyUseCallBack from "@/app/components/hooks/WhyUseCallBack";
import MemoDemo from "@/app/components/hooks/MemoDemo";
import PortalDemo from "@/app/components/PortalDemo";
import TableDemo from "@/app/components/table/TableDemo";
import DatagridDemo from "@/app/components/table/DatagridDemo";

export default function Home() {

    //console.log('Hello World render ',HelloWorld());
  return (
    <div className={styles.page}>
      <main >

          {/*<HelloWorld/>
          <HelloWorld/>
          */}
          {/*<Welcome>

          </Welcome>
          */}
          {/*<Profile
              image = "https://i.imgur.com/MK3eW3Am.jpg"
              name = "Johnson"
              size = {100}
            />

          <Avatar
              image = "https://i.imgur.com/1bX5QH6.jpg"
              name = "Johnson"
          />*/}
          {/*<Bordered>
              <div>Hello bordered text</div>
          </Bordered>
          <Bordered>
              <h1>Hello bordered text</h1>
          </Bordered>
          <Bordered>
              <Avatar
                  image = "https://i.imgur.com/1bX5QH6.jpg"
                  name = "Johnson"
              />
              <h3>Another one</h3>
          </Bordered>
          <JsxDemo/>*/}
         {/* <Dashboard role={"admin"} />
          <ItemWithFlag flag={true} name="Apple"/>*/}
          {/*<ItemList/>*/}
         {/* <UserList/>*/}
          {/*<EventDemo/>*/}
          {/*<PropagationDemo/>*/}
         {/* <Counter/>
          */}
         {/* <Counter/>*/}
         {/* <TimerDemo/>*/}
        {/*  <BatchUpdateDemo/>*/}
       {/*   <ItemListWithState/>*/}
        {/*  <ObjectUpdate/>*/}
       {/*   <FormDemo/>*/}
       {/*   <LoginForm/>*/}
          {/*<Tabs headers={["Tab1","Tab2","Tab3"]}>
              <div>
                  Page 1
              </div>
              <div>
                  Page 2
              </div>
              <div>
                  <h3>
                      Page 3
                  </h3>
              </div>
          </Tabs>*/}
         {/* <PosForm />*/}
       {/*   <FilterableProductTable/>*/}
       {/*   <StateOnPosition />*/}
        {/*  <DestroyComponent/>*/}
         {/* <FancyComponent/>*/}
         {/* <DifferentComponent/>*/}
         {/* <DifferentKey/>*/}
          {/*<TodoList/>*/}
         {/* <CounterWithReducer/>
          <TodoListWithReducer/>*/}
         {/* <WhyContext/>*/}
         {/* <ContextDemo/>*/}
          {/*<TodoWithContextDemo/>*/}
         {/* <WhyRef/>*/}
         {/* <FocusInput/>*/}
          {/*<CustomInputDemo/>*/}
          {/*<EffectDemo/>*/}
          {/*<EffectLifeCycle/>*/}
          {/*<TimerDemo2/>*/}
          {/*<CleanUpDemo/>*/}
          {/*<TodoWithDataFetch/>*/}
          {/*<LoadTodo/>*/}
          {/*<LoadUser/>*/}
         {/* <LoadDataWithHook/>*/}
         {/* <FormWithHook/>*/}
         {/* <SimpleLoginForm/>*/}
        {/*  <MovieForm/>*/}
         {/* <SimpleLoginFormWithUseForm/>*/}
        {/*  <WhyRenderProp/>*/}
        {/*  <RenderPropDemo/>*/}
        {/*  <WhyHoc/>*/}
         {/* <HocWithLoggerDemo/>*/}
         {/* <WhyHocAuth/>*/}
         {/* <AuthDemo/>*/}
        {/*<ProtectedDemo/>*/}
         {/* <RouterDemo/>*/}
         {/* <WhyUseCallBack/>*/}
         {/* <MemoDemo/>*/}
         {/* <PortalDemo/>*/}
        {/*  <TableDemo/>*/}
          <DatagridDemo/>
      </main>
    </div>
  );
}
