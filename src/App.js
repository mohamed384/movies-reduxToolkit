import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'

import { useEffect } from 'react';
import Movies from './Components/Movies/Movies';
import Header from './Components/Header/Header';
import AddMovie from './Components/AddMovie/AddMovie';
import Details from './Components/Details/Details';
import Update from './Components/UpdateMovie/Update';
import { moviesActions } from './Store/Store';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch()
  const baseUrl = "http://localhost:3000/results"



useEffect(() => {
   axios.get(baseUrl).then(response => {
        dispatch(moviesActions.setData(response.data))
    }     
    )
  }, [dispatch]);

  return (
    <>
      <Header/>      
      <Routes>
        <Route path='/' Component={Movies} />
        <Route path='/add' Component={AddMovie}/>
        <Route path='/:id' Component={Details}/>
        <Route path='/:movieID/update' Component={Update}/>
      </Routes>
    </>
  );
}

export default App;
