import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconMovie,
  IconLogout,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

type MenuShow ={
  show(auth:boolean):boolean,
}
const isAuthenticated= (auth:boolean)=>auth
function not(pred:(auth:boolean)=>boolean)
{
  return function(auth:boolean)
  {
    return !pred(auth);
  }
}
const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
    show:isAuthenticated
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
    show:isAuthenticated
  },
  /*
  {
    navlabel: true,
    subheader: "UTILITIES",
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Shadow",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "AUTH",
  },

   */
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
    show:not(isAuthenticated)
  },
  {
    id: uniqueId(),
    title: "Movies",
    icon: IconMovie,
    href: "/movies",
    show:isAuthenticated
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
    show:isAuthenticated,
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogout,
    href: "/authentication/logout",
    show:isAuthenticated
  },
    /*
  {
    navlabel: true,
    subheader: " EXTRA",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },

     */

];

export default Menuitems;


