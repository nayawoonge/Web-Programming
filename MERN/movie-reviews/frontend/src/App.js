import React from'react'
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import AddReview from './components/add-review';
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';

import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'

function App() {
  const[user, setUser] = React.useState(null)

  async function login(user = null) {
    setUser(user)
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div className="App">
      Hello World
      2019250061황지웅
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              {user?(
                <a onClink = {logout} >Logout User</a>
              ):(
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path="/" element={
        <MoviesList />} />
      <Route path='/movies' element={
        <MoviesList />} />
      <Route path='/movies/:id/review' element={
        <AddReview user={user} />} />
      <Route path='/movies/:id/' element={
        <Movie user={user} />} />
      <Route path='/login' element={
        <Login login={login} />} />
    </Routes>
    </div>
  );
}

export default App;
