/* import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import img from './LOGO3.png'
import UserContext from "../../context/userContext";
import { UserAuth } from "../../context/authContext";

function NavBar({ usuario }) {
  const navigate = useNavigate();
  const { logueado, setlogueado } = useContext(UserContext);
  const { logOut, user } = UserAuth();

  const logiout = async () => {
    //console.log('TE DESLOGUEASTE')
    await logOut();
    setlogueado("invitado");
    localStorage.removeItem("token");
    localStorage.removeItem("carrito");
    localStorage.removeItem("logueado");
    navigate("/login");
    window.location.reload();
  };
  console.log(logueado);

  return (
    <nav className={styles.navContainer}>
      <div>
        <ul className={styles.ulContainer}>
          <Link to={"/"} className={styles.underline}>
            <li><img src={img} style={{width:'110px', height:'90px', marginLeft:'0%'}}/></li>
          </Link>
          <Link to={"/catalogo"} style={{marginTop:'25px'}} className={styles.underline}>
            <li>Catalogo</li>
          </Link>
        </ul>
      </div>
      <div>
        {console.log(logueado)}
        <ul className={styles.ulContainer}>
          <li>
            {
              logueado === "invitado"
                ? "Invitado"
                : "¡ Hola, " +
                  logueado.name + '!'
            }

          </li>

          {logueado !== "invitado" && logueado.category === "user" ? (
            <Link to={"/miscompras"} className={styles.underline}>
              <li>Mis Compras</li>
            </Link>
          ) : logueado !== "invitado" && logueado.category === "admin" ? (
            <Link to={"/dashboard"} className={styles.underline}>
              <li>Admin</li>
            </Link>
          ) : null}

          <Link to={"/carrito"} className={styles.underline}>
            <li>Carrito</li>
          </Link>
          {usuario.email ? (
            <li onClick={logiout}>Log Out</li>
          ) : (
            <Link to={"/login"} className={styles.underline}>
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar; */





/* import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./NavBar.module.css";
import UserContext from "../../context/userContext";
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function OffcanvasExample({ usuario }) {
  const navigate = useNavigate();
  const { logueado, setlogueado } = useContext(UserContext);

  const logout = () => {
    setlogueado("invitado");
    localStorage.removeItem("token");
    localStorage.removeItem("carrito");
    localStorage.removeItem("logueado");
    navigate("/login");
    window.location.reload();
  };
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand}  sticky="top" bg="dark" expand={expand} className="mb-3" >
          <Container fluid className={styles.navContainer}>

<ul classNameName={styles.ulContainer}> 
<Link to={"/"} className={styles.underline}>
  <li>Logo</li>
</Link>
<Link to={"/catalogo"} className={styles.underline}>
  <li>Catalogo</li>
</Link>
</ul> 
<Link to={"/carrito"} classNameName={styles.underline}>
<li style={{color:'white', marginLeft:'850px', listStyle:'none'}}><AiOutlineShoppingCart/></li>
</Link>


<Navbar.Toggle className={styles.toggle} aria-controls={`offcanvasNavbar-expand-${expand}`} />
<Navbar.Offcanvas

id={`offcanvasNavbar-expand-${expand}`}
aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
placement="end"
>
<Offcanvas.Header closeButton className={styles.div}>
<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
  PERFIL
</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
<Nav className="justify-content-end flex-grow-1 pe-3">
<div>
<ul classNameName={styles.ulContainer}>
<li className={styles.list}>
{logueado === "invitado" ? "Invitado" : logueado.email}
<svg
xmlns="http://www.w3.org/2000/svg"
width="28"
height="28"
viewBox="0 0 28 28"
>
<path
fill="currentcolor"
d="M23.108 4.892C20.675 2.46 17.44 1.12 14 1.12c-3.44 0-6.675 1.34-9.108 3.772C2.46 7.325 1.12 10.56 1.12 14c0 3.44 1.34 6.675 3.772 9.108C7.325 25.54 10.56 26.88 14 26.88c3.44 0 6.675-1.34 9.108-3.772C25.54 20.675 26.88 17.44 26.88 14c0-3.44-1.34-6.675-3.772-9.108zM7.578 23.378c.538-3.102 3.226-5.39 6.422-5.39 3.197 0 5.884 2.288 6.423 5.39-1.829 1.256-4.041 1.993-6.423 1.993-2.382 0-4.594-.737-6.423-1.993zm2.327-10.995c0-2.258 1.837-4.095 4.095-4.095s4.095 1.837 4.095 4.095S16.258 16.48 14 16.48s-4.095-1.838-4.095-4.096zm11.825 9.948c-.406-1.444-1.213-2.754-2.344-3.778-.693-.628-1.483-1.123-2.332-1.472 1.534-1.001 2.55-2.733 2.55-4.698 0-3.09-2.514-5.604-5.604-5.604-3.09 0-5.605 2.514-5.605 5.604 0 1.965 1.017 3.697 2.551 4.698-.849.349-1.639.844-2.332 1.472-1.131 1.023-1.938 2.334-2.344 3.778C4.032 20.253 2.63 17.287 2.63 14 2.63 7.73 7.73 2.63 14 2.63S25.37 7.73 25.37 14c0 3.287-1.402 6.253-3.64 8.33z"
></path>
</svg>
</li>
{usuario !== "invitado" && usuario.category === "user" ? (
<>
<Link to={"/miscompras"} classNameName={styles.underline}>
<li className={styles.list}>Mis Compras</li>
</Link>

<Link to={'/favoritos'} classNameName={styles.underline}>
<li className={styles.list}>Favoritos</li>
</Link>
</>
) : usuario !== "invitado" ? (
<Link to={"/dashboard"} classNameName={styles.underline}>
<li className={styles.list}>Admin</li>
</Link>
) : null}


{usuario.email ? (
<li className={styles.list} onClick={logout}>Log Out</li>
) : (
<Link to={"/login"} classNameName={styles.underline}>
<li className={styles.list}>Login</li>
</Link>
)}
</ul>
</div>

  
</Nav>
</Offcanvas.Body>
</Navbar.Offcanvas>
</Container>
</Navbar>
))}
</>
);
}

export default OffcanvasExample;
*/

/* import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./NavBar.module.css";
import UserContext from "../../context/userContext";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img from './LOGO1.png'
import { UserAuth } from "../../context/authContext";

function NavBar({ usuario }) {
  const navigate = useNavigate();
  const { logueado, setlogueado } = useContext(UserContext);
  const { logOut, user } = UserAuth();

  const logout = () => {
    setlogueado("invitado");
    localStorage.removeItem("token");
    localStorage.removeItem("carrito");
    localStorage.removeItem("logueado");
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} sticky="top" bg="dark" expand={expand} className="mb-3" >
          <Container fluid className={styles.navContainer}>
            <div>
            <ul classNameName={styles.ulContainer}>
              <Link to={"/"} className={styles.underline}>
                <li><img src={img} style={{ width: '110px', height: '90px', marginLeft: '0%' }} /></li>
              </Link>
              <Link to={"/catalogo"} className={styles.underline}>
                <li>Catalogo</li>
              </Link>
            </ul>
            </div>
            <Link to={"/carrito"} classNameName={styles.underline}>
              <li style={{ color: '#f7d9d9', marginBottom: '20px', marginLeft: '850px', listStyle: 'none' }}><AiOutlineShoppingCart /></li>
            </Link>


            <Navbar.Toggle className={styles.toggle} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas

              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className={styles.div}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PERFIL
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav >
                  <div style={{padding:'0px'}}>
                    <ul classNameName={styles.ulContainer} style={{padding:'0px'}}>
                      <li className={styles.list}>
                        {logueado === "invitado" ? "Invitado" : logueado.email}

                      </li>
                      {usuario !== "invitado" && usuario.category === "user" ? (
                        <>
                          <Link to={"/miscompras"} classNameName={styles.underline}>
                            <li className={styles.list}>Mis Compras</li>
                          </Link>

                          <Link to={'/favoritos'} classNameName={styles.underline}>
                            <li className={styles.list}>Favoritos</li>
                          </Link>
                        </>
                      ) : usuario !== "invitado" ? (
                        <Link to={"/dashboard"} classNameName={styles.underline}>
                          <li className={styles.list}>Admin</li>
                        </Link>
                      ) : null}


                      {usuario.email ? (
                        <li className={styles.list} onClick={logout}>Log Out</li>
                      ) : (
                        <Link to={"/login"} classNameName={styles.underline}>
                          <li className={styles.list}>Login</li>
                        </Link>
                      )}
                    </ul>
                  </div>


                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar; */

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import img from './LOGO3.png';
import styles from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import UserContext from "../../context/userContext";
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function NavBar({ usuario }) {
  const navigate = useNavigate();
  const { logueado, setlogueado } = React.useContext(UserContext);


  const logout = () => {
    setlogueado("invitado");
    localStorage.removeItem("token");
    localStorage.removeItem("carrito");
    localStorage.removeItem("logueado");
    navigate("/login");
    window.location.reload();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>

      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: '#1C1C1C' }}>
      <Link to={"/"} >
        <img src={img} style={{ width: '110px', height: '90px', marginLeft: '24%' }} />
        </Link>
        <Link to={"/catalogo"} className={styles.underline}>
          Catalogo
        </Link>
        <div style={{ margin: 'auto 70vw', alignItems: 'center', display: 'flex' }}>
          <Link to={"/carrito"} >
            <AiOutlineShoppingCart style={{ color: '#f7d9d9', listStyle: 'none', fontSize: '2.5vw', marginRight:'30px' }} />
          </Link>
          <div >
            <Tooltip title="Account settings" >
              <Avatar
                onClick={handleClick}
                className={styles.toggle}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <RiUser3Line style={{ color: '#f7d9d9' }} />
              </Avatar>
            </Tooltip>
          </div>
        </div>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          {logueado === "invitado" ? null : logueado.email}
        </MenuItem>
        <MenuItem>
          <Avatar /> {logueado === "invitado" ? "Invitado" : logueado.name}
        </MenuItem>
        <Divider />
        {usuario !== "invitado" && usuario.category === "user" ? (
          <>
            <MenuItem>
              <Link to={"/miscompras"}>
                <ListItemIcon>Mis Compras</ListItemIcon>

              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/favoritos'}>
                <ListItemIcon>Favoritos</ListItemIcon>
              </Link>
            </MenuItem>
          </>
        ) : usuario !== "invitado" ? (
          <MenuItem>
            <Link to={"/dashboard"}>
              <ListItemIcon>Admin</ListItemIcon>
            </Link>
          </MenuItem>
        ) : null}


        {usuario.email ? (
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>

        ) : (
          <MenuItem>
            <Link to={"/login"} >
              <ListItemIcon>Login</ListItemIcon>
            </Link>
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}
