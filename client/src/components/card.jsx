import React, { useState, useEffect } from "react";
import Rating from "./rating";

const Card = () => {
  const [projects, setProjects] = useState([]); // Store the fetched projects
  const [error, setError] = useState(null); // Store any fetch errors

  // Fetch projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token"); 
      if (!token) {
        throw new Error("No token found. Please log in.");
      }
        const response = await fetch("http://localhost:5000/api/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log("Token:", token);


        const data = await response.json();
        console.log("Fetched Data:", data);

       /*  setProjects(data); */
       if (Array.isArray(data)) {
        setProjects(data);
      } else if (data.projects) { 
        setProjects(data.projects);
      } else {
        setProjects([]);
      }
 // Update state with the fetched projects
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  const handleRatingChange = (newRating, projectId) => {
    console.log(`New rating for project ${projectId}: ${newRating}`);
    // Optionally, send the rating to the backend if needed
  };

  if (error) {
    return <p>Error: {error}</p>; // Display an error message
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {project.category || "Category"}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {project.name}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${project.price}
              </p>
              <Rating
                rating={project.rating || 0} // Pass the current rating
                setRating={(newRating) =>
                  handleRatingChange(newRating, project.id)
                } // Handle rating change
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
