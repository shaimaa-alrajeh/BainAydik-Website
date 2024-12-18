import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Register from "./register";
import Login from "./login";
import ContactUs from "./contactUs";
import AboutUs from "./components/aboutUs";
import Home from "./home";
import Chraft from "./chraft";
import Design from "./design";
import AddProject from "./AddProject";
import MostPopular from "./MostPopular";
import Projects from "./projects";
import Profile from "./Profile";
import EmployeeUi from "./EmployeeUi";
import EmployeeAI from "./EmployeeAI";
import EmployeeBlacksmithing from "./EmployeeBlack";
import EmployeeCarpentry from "./EmployeeCarpen";
import EmployeeHome from "./EmployeeHome";
import EmployeeMarketing from "./EmployeeMark";
import EmployeeMotion from "./EmployeeMotion";
import EmployeePainting from "./EmployeePaint";
import EmployeePlumbing from "./EmployeePlum";
import EmployeePrograming from "./EmployeePrograming";
import RoleProtectedRoute from "./ProtectedRoute ";
// import { UserProvider } from "./UserContext";


function App() {
  return (
    <BrowserRouter>
      {/* <UserProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/design" element={<Design />} />
          <Route path="/chraft" element={<Chraft />} />
          <Route path="/mostPopular" element={<MostPopular />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/employeeUi" element={<EmployeeUi />} />
          <Route
            path="/EmployeeBlacksmithing"
            element={<EmployeeBlacksmithing />}
          />
          <Route path="/EmployeeAI" element={<EmployeeAI />} />
          <Route path="/EmployeeCarpentry" element={<EmployeeCarpentry />} />
          <Route path="/EmployeeHome" element={<EmployeeHome />} />
          <Route path="/EmployeeMarketing" element={<EmployeeMarketing />} />
          <Route path="/EmployeeMotion" element={<EmployeeMotion />} />
          <Route path="/EmployeePainting" element={<EmployeePainting />} />
          <Route path="/EmployeePlumbing" element={<EmployeePlumbing />} />
          <Route path="/EmployeePrograming" element={<EmployeePrograming />} />

          {/* User Role */}
          <Route
            path="/projects"
            element={
              <RoleProtectedRoute requiredRole="user">
                <Projects />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/addProject"
            element={
              <RoleProtectedRoute requiredRole="user">
                <AddProject />
              </RoleProtectedRoute>
            }
          />
        </Routes>
      {/* </UserProvider> */}
    </BrowserRouter>
  );
}

export default App;
