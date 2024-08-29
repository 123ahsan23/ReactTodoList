import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard1 from './MenuCard1.js'
import NavBar from './NavBar.js'


const uniqueList = [ ...new Set(Menu.map((curElem) => {
    return curElem.category;
})
),"All",
];

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };

    return (
        <>
        <NavBar filterItem = {filterItem} menuList = {menuList}/>

          

            <MenuCard1 menuData={menuData} />



        </>
    )
}

export default Restaurant
