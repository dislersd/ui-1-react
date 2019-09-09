import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const MenuBar = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="massive" color="green">
      <Menu.Menu position="right">
        <Menu.Item
          name="services"
          onClick={handleItemClick}
          active={activeItem === "services"}
        />
        <Menu.Item
          name="product"
          onClick={handleItemClick}
          active={activeItem === "product"}
        />
        <Menu.Item
          name="vision"
          onClick={handleItemClick}
          active={activeItem === "vision"}
        />
        <Menu.Item
          name="features"
          onClick={handleItemClick}
          active={activeItem === "features"}
        />
        <Menu.Item
          name="about"
          onClick={handleItemClick}
          active={activeItem === "about"}
        />
        <Menu.Item
          name="contact"
          onClick={handleItemClick}
          active={activeItem === "contact"}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
