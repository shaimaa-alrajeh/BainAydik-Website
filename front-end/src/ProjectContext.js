    import React, { createContext, useContext, useState } from 'react';


    const ProjectContext = createContext();
    export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    const addProject = (newProject) => {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject }}>
        {children}
        </ProjectContext.Provider>
    );
    };

    export const useProjects = () => {
    return useContext(ProjectContext);
    };



