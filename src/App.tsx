import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    })
  }, [])
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {
              routes?.map(({path,element},index)=> <Route key={index} path={path} element={element}/>)
            }
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
