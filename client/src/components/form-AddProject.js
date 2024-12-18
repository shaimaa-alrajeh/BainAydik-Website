import React, { useState } from "react";
// import { useProjects } from "../context/ProjectContext";
import { jwtDecode } from "jwt-decode";

function FormAdd() {
  const initialFormState = {
    title: "",
    price: "",
    summary: "",
    img: null,
  };

  const token = localStorage.getItem("token");
  // const userId = jwtDecode(token)._id;

  const [formData, setFormData] = useState(initialFormState);
  const [imgPreview, setImgPreview] = useState(null);
  // const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (event) => {
    const img = event.target.files[0];
    if (img) {
      setFormData((prevData) => ({
        ...prevData,
        img: img,
      }));
      setImgPreview(URL.createObjectURL(img));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form submitted with data:", formData);
    // Preparing form data for a POST request
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("summary", formData.summary);
    // formDataToSend.append("userId",userId)
    if (formData.img) {
      formDataToSend.append("img", formData.img);
    }
    
    console.log(token)
    try {
      const response = await fetch("http://localhost:5000/api/project", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.text();

      console.log("Response from server:", result);

      // Reset form
      setFormData(initialFormState);
      setImgPreview(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto w-full px-10 min-[450px]:w-[80%] min-[600px]:w-[60%] min-[900px]:w-[80%] min-[900px]:flex min-[900px]:flex-col"
    >
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="title">
          Title of project:
        </label>
        <input
          className="shadow min-w-full appearance-none bg-[#242424] border-2 border-[#356CFD] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter your title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="price">
          Price:
        </label>
        <input
          className="shadow appearance-none bg-[#242424] border-2 border-[#356CFD] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="text"
          placeholder="Enter your price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="feedback">
          Summary:
        </label>
        <textarea
          className="shadow appearance-none bg-[#242424] border-2 border-[#356CFD] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="summary"
          rows="5"
          placeholder="Enter your summary about your project"
          value={formData.summary}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="file">
          Upload Your Image:
        </label>
        <div className="relative">
          <input
            type="file"
            id="img"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="img"
            className="circle-button w-16 h-16 rounded-full border-2 border-dashed border-white bg-transparent flex items-center justify-center cursor-pointer"
            style={{
              backgroundImage: imgPreview ? `url(${imgPreview})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: imgPreview ? "none" : "2px dashed white",
            }}
          >
            {!imgPreview && (
              <>
                <span className="absolute bg-white h-0.5 w-10"></span>
                <span className="absolute bg-white h-10 w-0.5"></span>
              </>
            )}
          </label>
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormAdd;
