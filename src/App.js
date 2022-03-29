import { NavBar } from "./Components/Menu/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from './Components/Styles/GlobalStyle';
import { MenuBanner} from './Components/Menu/MenuBanner';
import React from "react";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem"; 
import { useOrder } from "./Components/Hooks/useOrder"; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyDpAs2KKNRanXtRxQf_ziufYsYOaDjAZQM",
  authDomain: "mrdonalds-1db80.firebaseapp.com",
  projectId: "mrdonalds-1db80",
  storageBucket: "mrdonalds-1db80.appspot.com",
  messagingSenderId: "1049469081676",
  appId: "1:1049469081676:web:63f7a4619948f450cf3ce9"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrder();
  return (
    <>
    <GlobalStyle/>
    <NavBar {...auth}/>
    <Order {...orders} {...openItem} {...auth}/>
    <MenuBanner/>    
    <Menu {...openItem} {...orders}/>
    {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
