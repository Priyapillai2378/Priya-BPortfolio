import styles from "./App.module.css";
import {MyInfo}  from "./components/MyInfo/Myinfo";
import { Navbar } from "./components/Navbar/Navbar";
import {About} from "./components/About/About";
import { Expertise } from "./components/Expertise/Expertise";
import {Projects} from './components/Projects/Projects';
import {Contact} from './components/Contact/Contact';
function App() {
  return(
 <div className={styles.App}>
  <Navbar/>
  <MyInfo />
 <About/>
 <Expertise/>
 <Projects/>
 <Contact/>
 </div>
  );
}

export default App;
