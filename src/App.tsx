import React from 'react';
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import AppRoutes from "./router/AppRoutes";
import 'antd/dist/antd.css';
import {useAction} from "./hooks/useAction";


function App() {

    const {login} = useAction()

    React.useEffect(() => {
        if(localStorage.username && localStorage.password)
            login(localStorage.username, localStorage.password)
    },[])

  return (
    <div className="wrapper _container">
      <Header/>
         <div className="page">
             <AppRoutes/>
         </div>
      <Footer/>
    </div>
  );
}

export default App;
