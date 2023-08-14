import './App.css';
import  Home from './components/Home/Home';
import RootLayout from './Layout/RootLayout';
import  Movies  from './components/Movies/Movies';
import Tv from './components/Tv/Tv';
import  People from './components/People/People';
import {createHashRouter , RouterProvider} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ItemDetails  from './components/ItemDetails/ItemDetails';
// import { Signin } from './components/Signin/Signin';
// import { Signup } from './components/Signup/Signup';


function App() {

 
  // function ProtectedRouters(props){
  //   let tokeen = localStorage.getItem('token');
  //   if(!tokeen)
  //   {
  //     return <Navigate to ='/signin'/>
  //   }
  //   else
  //   {
  //     return props.children;
  //     // props.children == <Home/>, <Movies/>,  <Tv/>,..etc.
  //   }
  // }
  let routers = createHashRouter([
    {path :'/' , element : <RootLayout/>, children :[
      {index : true, element :<Home/>},
      {path : 'home', element : <Home/>},
      {path : 'movies', element :<Movies/>},
      {path : 'tv', element :    <Tv/> },
      {path : 'people', element :  <People/>  },
      {path : 'details/:id/:media', element : <ItemDetails/>  },
      {path :'*' , element :    <NotFound/> },
    ]},
    // {path :'/' , element : <AuthLayout/>, children :[
    //   {index : true, element : <Signin/>},
    //   {path : 'signin', element : <Signin/>},
    //   {path : 'signup', element : <Signup/>},
      
    // ]}
  ]);
  return (
    < >
      <RouterProvider  router={routers} ></RouterProvider>
    </>
  );
}

export default App;
