import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { LanguageContext } from './Contexts/LanguageContext';
import en from "./Local/English.json";
import ru from "./Local/Russian.json";
import AllBody from './Components/AllBody/AllBody';
import { Outlet, Route, Routes } from 'react-router-dom';
import TwoPage from './Components/Two-Page/Two-Page';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';

function App() {
  const [local, setLocal] = useState("en");
  const [t, setT] = useState(en);
  useEffect(() => {
    local === "en" ? setT(en) : setT(ru)
  }, [local])
  return (
    <div className='App'>
      <LanguageContext.Provider value={{
        setLocal,
        t
      }}>
        <Header />
        <Routes>
          <Route path='/' element={<AllBody/>}></Route>
          <Route path='/page-2' element={<TwoPage />}></Route>
          <Route path='/doctor-profile/:Id' element={<DoctorProfile/>}></Route>
          <Route path='/doctors' element={<TwoPage />}></Route>
        </Routes>
        <Outlet />
      </LanguageContext.Provider >
    </div >
  )
}

export default App;