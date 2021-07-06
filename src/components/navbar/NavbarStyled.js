import styled, { css } from "styled-components/macro"
import { NavLink } from "react-router-dom"
import { IoCartOutline, IoHeartOutline, IoMenuOutline } from "react-icons/io5"

import userAvatar from "../../assests/images/avatar.png"

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  z-index: 100;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 60px;
  }
`
const NavigationLink = css`
  height: 100%;
  display: flex;
  align-items: center;

  text-decoration: none;
  cursor: pointer;
`
export const Logo = styled(NavLink)`
  ${NavigationLink}

  margin-right: 40px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;

  color: #000000;
`
export const MenuBars = styled(IoMenuOutline)`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavigationMenu = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }

  display: flex;
  height: 100%;
`
export const NavigationLinks = styled(NavLink)`
  ${NavigationLink}

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  color: #3a3a3a;

  &.current {
    color: orangered;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 68px;
    }
  }
`
export const UserMenu = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  display: flex;
  align-items: center;
  margin-left: auto;
  height: 100%;
`
const UserMenuIcons = css`
  display: block;
  margin-right: 35px;
  color: #262f56;
  cursor: pointer;
`

export const FavoriteIcon = styled(IoHeartOutline)`
  ${UserMenuIcons}
`
export const CartIcon = styled(IoCartOutline)`
  ${UserMenuIcons}
`
export const UserMenuItems = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  color: #262f56;
  cursor: pointer;
  background-image: url(${userAvatar});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
