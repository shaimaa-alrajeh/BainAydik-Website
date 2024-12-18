import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useProjects } from "./ProjectContext";
import Card from "./components/card";
import { jwtDecode } from "jwt-decode";

const Projects = () =>
{
  // localStorage.clear();

  // const navigate = useNavigate();
  const { projects, setProjects } = useProjects();

  const token = localStorage.getItem("token");
  const decoedToken = jwtDecode(token);

  console.log(decoedToken.role)
  const navigate = useNavigate();

  // const handleNavigateToAddProject = () => {
  //  return <Navigate to='/addProject'/>;

  // };

  const handleEvaluateProject = async (projectName, rating) => {
    try {
      const response = await fetch("/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectName, rating }),
      });
      if (!response.ok) {
        throw new Error("Failed to send project data");
      }

      const responseData = await response.json();
      console.log("Response from backend:", responseData);
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.title === projectName
            ? { ...project, rating: responseData.rating }
            : project
        )
      );
    } catch (error) {
      console.error("Error sending project data:", error);
    }
  };



  try {
    if (!token || decoedToken.role !== "user") {
      return <Navigate to="/login" />;
    }

    return (
      <div className="bg-[#252525] min-h-screen flex flex-col items-center justify-center mt-11">
        <div className="text-center text-white p-10">
          <h1 className="font-bold text-4xl mb-4">Projects</h1>
        </div>
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {projects.length > 0 ? (
            projects.map((item, index) => (
              <Card
                key={index}
                projectName={item.title}
                price={item.price}
                image={item.image}
                onRate={(rating) => handleEvaluateProject(item.title, rating)}
              />
            ))
          ) : (
            <p className="text-white">{decoedToken.role}</p>
          )}
        </section>

        <div
          className="circle-button w-16 h-16 rounded-full border-2 border-dashed border-white bg-transparent flex items-center justify-center cursor-pointer mt-11"
          onClick={() => navigate("/addProject")}
        >
          <span className="absolute bg-white h-0.5 w-10"></span>
          <span className="absolute bg-white h-10 w-0.5"></span>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/login" />;
  }
};

export default Projects;
