import React from "react"

import {
  Header,
  Logo,
  MenuBars,
  NavigationMenu,
  NavigationLinks,
  UserMenu,
  FavoriteIcon,
  CartIcon,
  UserMenuItems,
} from "./NavbarStyled"
import { menuData } from "../../db/menuData"
// import userAvatar from "../../assests/images/avatar.png"

const Navbar = () => {
  return (
    <Header>
      <Logo to="/products" exact>
        Lorem
      </Logo>

      <MenuBars fontSize="32" />

      <NavigationMenu>
        {menuData.map((link, index) => (
          <NavigationLinks key={index} to={link.path} activeClassName="current">
            {link.title}
          </NavigationLinks>
        ))}
      </NavigationMenu>

      <UserMenu>
        <FavoriteIcon fontSize="24" />
        <CartIcon fontSize="24" />
        <UserMenuItems />
      </UserMenu>
    </Header>
  )
}

export default Navbar
