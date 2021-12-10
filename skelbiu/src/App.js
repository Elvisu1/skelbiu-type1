
import './App.css';
import LoginPage from "./pages/LoginPage";
import Register from "./component/Register";
import RegisterPage from "./pages/RegisterPage";
import {NavLink} from "react-router-dom";
import styled from 'styled-components'
import Navbar from "./component/Navbar";

const Container = styled.div`
  left: 20%;
  position: relative;
  display: inline-block;
  width: 1500px;
  margin-right: auto;
  margin-left: auto;
  
  
  
  

`
function App() {
  return (
    <div className="App">
        <Container>
            <Navbar/>
        </Container>



    </div>
  );
}

export default App;
