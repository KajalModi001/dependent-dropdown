import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dependentdropdown from "./Pages/Dependentdropdown";



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Dependentdropdown/>}></Route>

        </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
