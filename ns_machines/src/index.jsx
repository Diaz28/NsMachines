import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './css/index.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


// Pages
import ErrorPage from "./error-page";
import LandingPage from "./routes/landingPage";
import LoginPage from "./routes/loginPage";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>

      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container fluid>
          <Navbar.Brand ><Link to="/"><span class="text-warning">NS</span> Produções</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link to="/contactos">Contactos</Link></Nav.Link>
              <Nav.Link ><Link to="/produtos">Serviços</Link></Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
        </Navbar.Collapse>
        </Container>
      </Navbar>



      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top fixed-bottom">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlinkhref="/logo192.png" /></svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">&copy; Ns Casamentos</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-body-secondary bi" href="#"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
          <li class="ms-3"><a class="text-body-secondary bi" href="https://www.instagram.com/grupons_producaoeventos"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
          <li class="ms-3 mx-3"><a class="text-body-secondary bi" href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a></li>
        </ul>
      </footer>

    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
