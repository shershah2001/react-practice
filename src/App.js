// import Html from "./Html"
// import './App.css';
// import { createContext, useState } from "react";
// import TodosApp from "./TodosApp";
// export const userContext = createContext();
// import Practice from "./Practice";
// export const userContext = createContext();
// function App() {
//   const [name, setName] = useState("shershah");
//   const [never, setNever] = useState("my name is ");
//   const [child, setChild] = useState()
//   const childvalue = (secName) => {
//     setChild(secName);
//   }
//   return (
//     <div className="App">
//       <h1>{child}</h1>
//       <userContext.Provider value={{ name, never, childvalue }}>
//         <Html />
//         <h1>{childvalue}</h1> 
//         <TodosApp/>
//         <Practice />
//       </userContext.Provider>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import TodoProvider1 from './Context/TodoProvider1';
// import FormContext1 from './FormContext1';
// import List1 from './List1';

// const App = () => {
//   return (
//     <>
//       <TodoProvider1>
//         <div className="App">
//           <FormContext1 />
//           <List1 />
//         </div>
//       </TodoProvider1>
//     </>
//   )
// }

// export default App;


// import React from 'react';
// import GlobalContextProvider from './Context/GlobalContextProvider';
// import Routing from './Search/Routing';
// import NavLinking from './Search/NavLinking';
// import FetchMovie from './Search/FetchMovie';
// import { BrowserRouter } from 'react-router-dom';
// import ReduxNavbar from './Search/ReduxNavbar';
// import ReduxUserDetails from './Search/ReduxUserDetails';

// const App = () => {
//   return (
// <GlobalContextProvider>
//    <BrowserRouter>
//     <NavLinking />
//     <Routing />
//   </BrowserRouter>

// </GlobalContextProvider>
//    <>
//     <ReduxNavbar/>
//     <ReduxUserDetails /> 
//     <navbar/>
//   </>
//  )
//  }

// export default App


import React from 'react';
// import NavbarLink from './components/NavbarLink';
// import Form from './Search/Form';
import PdfGenerator from './Search/PdfGenerator';
const App = () => {
  return (
    <div>
      {/* <NavbarLink/> */}
      {/* <Form /> */}
      <PdfGenerator/>
    </div>
  )
}

export default App

