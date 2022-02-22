import { NavBar } from "./Components/NavBar";
import { Menu } from "./Components/Menu";
import { GlobalStyle } from './Components/GlobalStyle';
import { MenuBanner} from './Components/MenuBanner';

function App() {
  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <MenuBanner/>
    <Menu/>
    </>
  );
}

export default App;
