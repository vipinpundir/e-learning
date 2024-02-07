import React from 'react'
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { loginCheck } from '../redux/slices/LoginSlice';
import { toast } from 'react-toastify';


const CustomNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.login);

  const logoutHandle =()=>{
    toast.success("Logout successfully")
    dispatch(loginCheck(false))
    localStorage.removeItem('loginDetails');
  }

  return (
    <div className="Nav shadow">
      <Navbar expand="lg" className='navbar-dark shadow-5-strong'>

      <Container fluid>
          <Navbar.Brand ><Link style={{fontSize:"1.8rem", fontWeight: "800", textDecoration: 'none',color: "#06BBCC"}} to="/">LearnHub360</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='Nav-links'>

            <Nav className="me-auto my-2 my-lg-0" navbarScroll>  
            </Nav>
            
            <Link to="/about">About Us</Link>
                {isLoggedIn
                  ?
                  <>
                    <Link to="/enrolled/courses"> My Courses</Link>
                    <Link  onClick={() =>{logoutHandle()} } >Logout</Link>
                  </>
                  : <>
                    <Link to="/login"> Login</Link>
                    <Link to="/signup"> Signup</Link>
                  </>
                }
=======
import { Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Courses from './Courses';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import CoursePreview from './CoursePreview';
import { useSelector } from 'react-redux'
import Payment from './Payment';
import AdminPage from './Admin';



const CustomNav = () => {
  const CartItems = useSelector(state => state.cart);
  let cartNum = CartItems.length;
  const isLoggedIn = useSelector(state => state.login);
  const isAdmin = useSelector((state) => state.admin);

  let adminpath = ''
  if (isAdmin === true) {
    adminpath = '/admin@29'
  }

  return (
    <div className="Nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand ><Link style={{ textDecoration: "none", color: "black", fontWeight: "700" }} to="/">LearnHub360</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='ck'>
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#action4">App Development</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Full Stack Development</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Data Analytics</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Big data</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Data Science</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something more...</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex m-auto">
              <Form.Control type="search" placeholder="Search for anything" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Link to='cart' > <Button variant="outline-warning border" className='m-2'>Cart ({cartNum})</Button></Link>
            {isAdmin ? <Link to="admin@29"> <Button variant="outline-secondary" className='m-2' >AdminDash</Button></Link>
              : ''}
            {isLoggedIn ? <h5 style={{width: "35px",height: "35px",borderRadius: "50%",backgroundColor: "darkgrey",color: "#FFF",display: "flex",alignItems: "center",justifyContent: "center",}} >V</h5>
              : <>
                <Link to="login"> <Button variant="outline-secondary" className='m-2' >Login</Button></Link>
                <Link to="signup"> <Button variant="outline-success" className='m-2'>Signup</Button></Link>
              </>
            }
           
>>>>>>> origin/master

          </Navbar.Collapse>
        </Container>
      </Navbar>
<<<<<<< HEAD

=======
      <Routes>
        <Route path="/" element={<Courses></Courses>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/payment" element={<Payment></Payment>} />
        <Route exact path={adminpath} element={<AdminPage></AdminPage>} />
        <Route path="/coursepreview" element={<CoursePreview></CoursePreview>} />
      </Routes>
>>>>>>> origin/master
    </div>

  )
}

export default CustomNav