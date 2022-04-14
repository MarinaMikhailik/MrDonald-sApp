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
import 'firebase/compat/database';
import { useEffect } from "react";
import { useTitle } from "./Components/Hooks/useTitle";
import { useDB } from "./Components/Hooks/useDB.js";
import { useOrderConfirm } from "./Components/Hooks/useOrderConfirm";
import { OrderConfirm } from "./Components/Order/OrderConfirm";
import { Context } from "./Components/utils/context"; 

const firebaseConfig = {
  apiKey: "AIzaSyDpAs2KKNRanXtRxQf_ziufYsYOaDjAZQM",
  authDomain: "mrdonalds-1db80.firebaseapp.com",
  projectId: "mrdonalds-1db80",
  storageBucket: "mrdonalds-1db80.appspot.com",
  messagingSenderId: "1049469081676",
  appId: "1:1049469081676:web:63f7a4619948f450cf3ce9",
  databaseURL: "https://mrdonalds-1db80-default-rtdb.europe-west1.firebasedatabase.app/",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const database = firebase.database();
  const { db, error}  = useDB(database);
  const openItem = useOpenItem();  
  const orders = useOrder();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);  

  return (
    <Context.Provider value = {{
      auth,
      openItem,
      orders,
      orderConfirm
    }}>
    <GlobalStyle/>
    <NavBar/>
    <Order/>
    <MenuBanner/>    
    <Menu 
     dbMenu = {db} dbMenuError = {error}/>
    {openItem.openItem && <ModalItem/>}
    {orderConfirm.openOrderConfirm && <OrderConfirm 
      database={database}/>}
    </Context.Provider>
  );
}

export default App;
