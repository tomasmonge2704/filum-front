import { Navbar,Badge, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Logo } from "./Logo.js";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { MoonIcon } from "@/components/icons/MoonIcon.js";
import { SunIcon } from "@/components/icons/SunIcon.js";
import { CartIcon } from "./icons/CartIcon.js";
import { useContext } from 'react'
import { UserContext } from '@/context/userContext'
import { CartContext } from "@/context/cartContext.js";
import Router from 'next/router'

export default function NavbarComponent({page}){
    const collapseItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
      ];
    const navbarLinks = [
        {nombre:"Home",href:"/"},
        {nombre:"Productos",href:"/productos"},
        {nombre:"Cart",href:"/cart"}
      ];
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    function dropdownAction (e){
      if(e == "logout"){
         localStorage.removeItem('token')
         Router.push('/login')
      }
    }
    const { user, setUser } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);
    return(
    <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Logo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          {navbarLinks.map((item, index) => (
            <Navbar.Link href={item.href} key={index} isActive={page == item.href ? true : false }>{item.nombre}</Navbar.Link>
          ))}
        </Navbar.Content>
        
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
            <Switch
                checked={isDark}
                iconOff={<SunIcon filled />}
                iconOn={<MoonIcon filled />}
                size="xl"
                color="error"
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                id="navbarSwich"
            />
        <Badge
          color="error"
          content={cart.length}
          shape="circle"
        >
            <CartIcon fill="currentColor" size={30} />
        </Badge>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => dropdownAction(actionKey)}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user.username}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" id="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>)
}