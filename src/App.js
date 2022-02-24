import { NavBar } from "./Components/NavBar";
import { Menu } from "./Components/Menu";
import { GlobalStyle } from './Components/GlobalStyle';
import { MenuBanner} from './Components/MenuBanner';
import React from "react";
import { ModalItem } from "./Components/ModalItem";

function App() {
  const [openItem, setOpenItem] = React.useState(null);
  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <MenuBanner/>
    <Menu setOpenItem={setOpenItem}/>
    <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
