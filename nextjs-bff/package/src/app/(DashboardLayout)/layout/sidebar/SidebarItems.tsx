
import React, {useContext} from "react";
import Menuitems from "./MenuItems";
import { Box, Typography } from "@mui/material";
import {
  Logo,
  Sidebar as MUI_Sidebar,
  Menu,
  MenuItem,
  Submenu,
} from "react-mui-sidebar";
import { IconPoint } from '@tabler/icons-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Upgrade } from "./Updrade";
import {AuthContext} from "@/app/util/AuthContext";


const renderMenuItems = (items: any, pathDirect: any,auth :boolean) => {

  console.log('Items ',items);
  return items.map((item: any) => {

    const Icon = item.icon ? item.icon : IconPoint;

    const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

    if (item.subheader) {
      // Display Subheader
      return (
        <Menu
          subHeading={item.subheader}
          key={item.subheader}
        />
      );
    }

    //If the item has children (submenu)
    if (item.children) {
      return (
        <Submenu
          key={item.id}
          title={item.title}
          icon={itemIcon}
          borderRadius='7px'
        >
          {renderMenuItems(item.children, pathDirect,auth)}
        </Submenu>
      );
    }

    // If the item has no children, render a MenuItem

    if(item.show(auth))
    {
      return (
          <Box px={3} key={item.id}>
            <MenuItem
                key={item.id}
                isSelected={pathDirect === item?.href}
                borderRadius='8px'
                icon={itemIcon}
                link={item.href}
                component={Link}
            >
              {item.title}
            </MenuItem >
          </Box>

      );
    }
    else
    {
      return null;
    }

  });
};


const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;
  console.log('SidebarItems');
  const authContext = useContext(AuthContext);
  console.log('Authenticated ',authContext.authenticated);
  return (
    < >
      <MUI_Sidebar width={"100%"} showProfile={false} themeColor={"#5D87FF"} themeSecondaryColor={'#49beff'} >

        <Logo img='/images/logos/dark-logo.svg' component={Link} to="/" >Modernize</Logo>

        {renderMenuItems(Menuitems, pathDirect,authContext.authenticated)}
        {/*<Box px={2}>
          <Upgrade />
        </Box>*/}
      </MUI_Sidebar>

    </>
  );
};
export default SidebarItems;
