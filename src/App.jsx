// import FBCUseeffect from './hooksexample/FBCUseeffect'
// import ContextWrapper from './utill/ContextWrapper'
// // // import Child1 from './hooksexample/Child1'


// // // const App = () => {
// // //   return (
// // //     <div>
// // //     {/* <FBCUseeffect/> */}
// // //     {/* <ContextWrapper>
// // //       <Child1/>
// // //     </ContextWrapper>
// // //      */}
     
// // //     </div>
// // //   )
// // // }

// // // export default App
// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <Uncontrolled/>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import "./global.css";
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Mainbar from './components/Mainbar';
// import Footer from './components/Footer';
// const App = () => {
//   return (
//     <div className="app">
//       <Navbar/>
//      <div className="parent">
//       <Sidebar/>
//       <Mainbar/>
//      </div>
//       <Footer/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import IteratingArray from './components/IteratingArray'

// const App = () => {
//   return (
//     <div>
//       <IteratingArray/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import FBCRef from './refexample/FBCRef'

// const App = () => {
//   return (
//     <div>
//       <FBCRef/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import ControlledFBC from './formexample/controlledFBC'

// const App = () => {
//   return (
//     <div>
//       <ControlledFBC/>
//     </div>
//   )
// }

// export default App


// import React, { Suspense } from 'react'
// import Navbar from './routing/Navbar'
// import {BrowserRouter,Routes,Route} from "react-router-dom" 
// import Dashbord from './routing/components/Dashbord'
// import ClassRoom from './routing/components/ClassRoom'
// import Assessment from './routing/components/Assessment'
// import Store from './routing/components/Store'
// import Calender from './routing/components/Calender'
// import News from './routing/components/News'
// import Blog from './routing/components/Blog'
// import PageNotFound from './routing/components/PageNotFound'
// import FSD1 from './routing/components/FSD1'
// import FSD2 from './routing/components/FSD2'
// import Users from './routing/components/Users'
// const store =React.lazy(()=>{"./routing/components/store"});

// const App = () => {
//   return (
    
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Dashbord/>}/>
//         <Route path='/classroom' element={<ClassRoom/>}>
//               <Route path='fsd1' element={<FSD1/>}/>
//               <Route path='fsd2' element={<FSD2/>}/>
//         </Route>
//         <Route path='/assessment' element={<Assessment/>}/>
//         <Route path='/store'element={<Suspense fallback="<div>Loading...</div>"><Store/></Suspense> }/>
//         <Route path='/calender'element={<Calender/>} />
//         <Route path=' /news' element={<News/>}/>
//         <Route path='/ blog' element={<Blog/>}/>
//         <Route path='user/:userid' element={<Users/>}/>
//         <Route path='*' element={<PageNotFound/>}/>
//       </Routes>
//     </BrowserRouter>
  
//   )
// }

// export default App

// import React from 'react'
// const App = () => {
//   return (
//     <div className='bg bg-primary'>
//       app
//     </div>
//   )
// }

// export default App
// import Portfolio from './Portfolio';

// function App() {
//   return <Portfolio />;
// }

// export default App;
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <MainContent />
        <Contact />
      </div>
    </div>
  );
}

export default App;
