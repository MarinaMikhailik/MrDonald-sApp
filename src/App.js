import { NavBar } from "./Components/Menu/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from './Components/Styles/GlobalStyle';
import { MenuBanner} from './Components/Menu/MenuBanner';
import React from "react";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem"; 
import { useOrder } from "./Components/Hooks/useOrder"; 

function App() {
  const openItem = useOpenItem();
  const orders = useOrder();
  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <Order {...orders}/>
    <MenuBanner/>    
    <Menu {...openItem} {...orders}/>
    {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
