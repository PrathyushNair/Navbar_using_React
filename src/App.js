

import Styles from "./App.module.css"
import Logo from "./components/logo";
import Button from "./components/button";
import Links from "./components/links"

function App() {
  let arr=["Services","Projects","About"]
  return (
   
      <header>
        <div className={Styles.nav}>
          <div style={{color:"white"}}>
            <Logo></Logo>
          </div>
          <div style={{display:"flex",gap:"10px",color:"white"}}>
           {arr.map((el)=>(
              <Links name={el}/>
           ))}
             
          </div>
          <div >
              <Button ></Button>
          </div>
          
        </div> 
        
      </header>
    
  );
}

export default App;
