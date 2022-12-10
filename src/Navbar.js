import {
  Navbar,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from "reactstrap";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

function NaviBar(data) {
  return (
    <div>
      <Navbar {...data}>
        <NavbarBrand className="maintitle">Start Bootstrap</NavbarBrand>
        <NavLink className="home">Home</NavLink>
        <NavLink className="about">About</NavLink>
        <UncontrolledDropdown inNavbar>
          <DropdownToggle nav caret className="shop">
            Shop
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>All Products</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Popular Items</DropdownItem>
            <DropdownItem>New Arrivals</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavbarText>
          <Button className="cart" color="dark" outline>
            <HiShoppingCart className="carticon" />
            Cart :
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {data.cartCount}
            </span>
          </Button>
        </NavbarText>
      </Navbar>
    </div>
  );
}

export default NaviBar;
