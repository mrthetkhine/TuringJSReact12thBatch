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
          <ItemList/>
      </main>
    </div>
  );
}
