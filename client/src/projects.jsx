import React, { useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useProjects } from "./ProjectContext";
import Card from "./components/card";
import {jwtDecode} from "jwt-decode"; 

const Projects = () => {
  const { projects, setProjects } = useProjects();
  const token = localStorage.getItem("token");
  /* console.log("Token:", token); */
  const navigate = useNavigate()
  let decodedToken = null;
  if (token) {
    try {
      decodedToken = jwtDecode(token);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  // Fetch projects when component mounts
  /* useEffect(() => {
    if (!token || !decodedToken) return;

    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        console.log("Fetched Projects:", data); 
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };


    fetchProjects();
  }, [setProjects, token, decodedToken]);
 */
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

      // Update the project rating in the state
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

  // Redirect if token is invalid or user role is not "user"
  if (!token || !decodedToken || decodedToken.role !== "user") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="bg-[#252525]  flex flex-col items-center justify-center mt-11">
      <div className="text-center text-white p-10">
        <h1 className="font-bold text-4xl mb-4">Projects</h1>
      </div>
      <section
        id="Projects"
        className="min-h-screen w-fit mx-auto flex items-center justify-center mt-10 mb-5"
      >
        {projects.length > 0 ? (
          projects.map((item, index) => (
            <Card
              key={index}
              projectName={item.title}
              price={item.price}
              image={item.img}
              onRate={(rating) => handleEvaluateProject(item.title, rating)}
            />
          ))
        ) : (
          <p className="text-white">No Project Add Yet</p>
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
};

export default Projects;



/* import React, { useEffect } from "react";
import { useProjects } from "./ProjectContext";
import { Navigate, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Projects = () => {
  const { projects, setProjects } = useProjects();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [setProjects, token]);

  if (!token || jwtDecode(token).role !== "user") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.price}</p>
            <p>{project.summary}</p>
            {project.img && (
              <img
                src={`http://localhost:5000/uploads/${project.img}`}
                alt={project.title}
              />
            )}
          </div>
        ))
      ) : (
        <p>No Projects Added Yet</p>
      )}
      <button onClick={() => navigate("/addProject")}>Add New Project</button>
    </div>
  );
};

export default Projects; */
