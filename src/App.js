import CustomNav from "./component/CustomNav";
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from "./routes/AllRoutes";
import './global.css'
import LocalStorageLogin from "./LocalStorageLogin";

function App() {
  
  return (
    <div className="App">
      <LocalStorageLogin/>
      <CustomNav/>
      <AllRoutes/>
      <ToastContainer position="bottom-center"/>
=======
// import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <CustomNav/>
      {/* <Courses></Courses> */}
      {/* <Login></Login> */}
      {/* <Footer></Footer> */}
>>>>>>> origin/master
    </div>
  );
}

export default App;
