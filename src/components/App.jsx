import React, { lazy } from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route,Switch ,Routes} from 'react-router-dom'
import useStyles from './styles.js'
// import {Actors, MovieInformation,Movies,Profile,Navbar} from './index.js'
import Actors from './Actors/Actors';
import Movies from './Movies/Movies';
import MovieInformation from './MovieInformation/MoviesInformation';
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';


export default function App() {
  const classes=useStyles();


  return (
    <div className={classes.root}>
        <CssBaseline/>
        <Navbar/>
        <main className={classes.content}>
          <div className={classes.toolbar}>
          <BrowserRouter>
           <Routes>
              <Route index element={<Actors/>} />
              <Route path="movies" element={<Movies/>} />
              <Route path="movieInformation" element={<MovieInformation/>} />
              <Route path="actors" element={<Actors/>} />
              <Route path="profile" element={<Profile/>} />
              </Routes>
        </BrowserRouter>   
       
          </div>
        </main>
        
    </div>
  )
}
