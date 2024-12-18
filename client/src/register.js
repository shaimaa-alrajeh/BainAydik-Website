import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";


function Register() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    profession: "",
    gender: "",
    phone: "",
    profileImage: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const defaultImage = "/profile.jpeg";

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: file }); // Store the actual file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);

    // Preparing form data for a POST request
    const formDataToSend = new FormData();
    formDataToSend.append("fname", formData.firstName);
    formDataToSend.append("lname", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("category", formData.profession);
    formDataToSend.append("number", formData.phone);
    if (formData.profileImage) {
      formDataToSend.append("img", formData.profileImage);
    }

    try {
      const response = await fetch("http://localhost:5000/api/regester", {
        method: "POST",
        body: formDataToSend,
      });
      const result = await response.json();
console.log("Server response:", result);

      // const result = await response.text();
      if (response.ok) {
        // const token = result.token;

        // Save the token to localStorage
        // localStorage.setItem("token", token);

        // Redirect to the profile page after successful registration
        navigate("/profile");

        // Reset the form
        setFormData(initialFormState);
        alert("Registration successful!");
      } else {
        alert(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: Please check the console for details.");
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <body className="font-sans antialiased text-white leading-normal tracking-wider bg-[#242425] flex flex-col ">
      <Navbar />
      <br></br>
      <div className="min-h-screen bg-[#242425] py-6 flex flex-col justify-center sm:py-1 mt-14 ">
        <h1 className="text-5xl font-semibold ml-[45%]">Register</h1>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-10 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 text-gray-700">
                {/* First Name and Last Name */}
                <div className="flex space-x-4">
                  <div className="relative flex-1">
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      value={formData.firstName}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      value={formData.lastName}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                {/* Email and Password */}
                <div className="flex space-x-4">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      value={formData.email}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      value={formData.password}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                {/* City and Profession */}
                <div className="flex space-x-4">
                  <div className="relative flex-1">
                    <label htmlFor="city" className="block mb-2">
                      City:
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={changeHandler}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Damascus</option>
                      <option value="Al Sweida">Al Sweida</option>
                      <option value="Tartus">Tartus</option>
                      <option value="Homs">Homs</option>
                      <option value="Latakia">Latakia</option>
                      <option value="Hama">Hama</option>
                      <option value="Daraa">Daraa</option>
                      <option value="Aleppo">Aleppo</option>
                      <option value="Deir el-Zor">Deir el-Zor</option>
                      <option value="Hasakah">Hasakah</option>
                      <option value="Raqqa">Raqqa</option>
                      <option value="Idlib">Idlib</option>
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <label htmlFor="profession" className="block mb-2">
                      Profession:
                    </label>
                    <select
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={changeHandler}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Carpentry</option>
                      <option value="Blacksmithing">Blacksmithing</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Home Appliance Repair">
                        Home Appliance Repair
                      </option>
                      <option value="painting Design">Painting</option>
                      <option value="AI">Artificial Intelligence</option>
                      <option value="Motion / Video Editing">
                        Motion / Video Editing
                      </option>
                      <option value="Marketing">Marketing</option>
                      <option value="programing">programing</option>
                      <option value="Ui / Ux">Ui / Ux</option>
                    </select>
                  </div>
                </div>
                {/* Gender and Phone */}
                <div className="flex space-x-4">
                  <div className="relative flex-1">
                    <label className="block mb-2">Gender:</label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={changeHandler}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={changeHandler}
                      />{" "}
                      Female
                    </label>
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="number"
                      name="phone"
                      placeholder="+963 912345678"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      value={formData.phone}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                {/* Profile Image and Submit Button */}
                <div className="relative  left-[310px] transform -translate-x-1/2 -translate-y-4/2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={changeProfileImage}
                    className="hidden"
                    required
                  />
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 cursor-pointer flex items-center justify-center "
                    onClick={handleImageClick}
                  >
                    <img
                      src={formData.profileImage || defaultImage}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-2 py-1 w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  // onClick={() => navigate("/profile")}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Register;
