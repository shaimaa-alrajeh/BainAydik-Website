import FormAdd from "./components/form-AddProject";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useProjects } from './ProjectContext'; 

function AddProject() {
  const { addProject } = useProjects(); 
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);

    if (decodedToken.role !== "user") {
      return <Navigate to="/login" />;
    }

    return (
      <div className="flex flex-col bg-[#252525]  max-[400px]:h-auto max-[899px]:py-4 justify-center h-auto items-center min-[900px]:flex-row h-screen">
        <div className="w-full   text-center flex justify-center items-center mb-6 lg:mb-0 min-[900px]:h-1/2">
          <p className="text-3xl flex gap-4 lg:text-[100px] min-[900px]:text-6xl min-[900px]:mb-20 min-[900px]:block  ">
            <p className="text-[#356CFD] min-[900px]:pb-4">Bain Aydik</p>

            <p className="text-white">Post Form</p>
          </p>
        </div>
        <div className="w-full  min-[900px]:justify-self-start">
          <FormAdd />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/login" />;
  }
}

export default AddProject;
