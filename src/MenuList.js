import React from "react";
import MenuItem from "./MenuItem";
import './menu.css'


const MenuList = ({ items }) => {
    return (
        <div className="section-center">
            {
                items.map((item) => (
                    <MenuItem key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default MenuList;