import logo from './images.png';
import "./App.css";

export default function Header(){
    return(
        <div>
            <img src={logo} style={{marginLeft:"30px"}} className="App-logo" alt="logo" />
            <h1 className='notaspuntocom'><b style={{color:"red"}}>NOTAS</b>.com</h1>
        </div>

    );
    }