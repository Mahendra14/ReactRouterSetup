import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LayoutComponent from './Components/Layout';
interface AppProps {
  
}
 
const App: FunctionComponent<AppProps> = () => {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="about">
    //     <Route index element={<About />} />
    //     <Route path=":number" element={<About />} />
    //   </Route>

    //   {/* addding the layout component on top of about */}
    //   <Route path="layout" element={<LayoutComponent />} >
    //     < Route index element={<About/>} />
    //     <Route path=":number" element={<About />} />
    //   </Route>
    // </Routes>
    // </BrowserRouter>
    <LayoutComponent></LayoutComponent>
    );
}
 
export default App;

