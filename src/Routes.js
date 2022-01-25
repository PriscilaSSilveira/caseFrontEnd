import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Page1 }  path="/pesquisa" exact />
           <Route component = { Page2 }  path="/pesquisa1" exact />
           <Route component = { Page3 }  path="/pesquisa2" exact />
           <Route component = { Page4 }  path="/pesquisa3" exact />
 
       </BrowserRouter>
   )
}

export default Routes;