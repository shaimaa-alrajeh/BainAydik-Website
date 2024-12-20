import React, { useContext } from "react";
// import { UserContext } from "./context/UserContext";
import Navbar from "./components/navbar";
import WhiteFooter from "./components/white-footer";
import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Profile = () => {
  // const { formData } = useContext(UserContext);
  const navigate = useNavigate();
  // const { t } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You need to log in first.");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile information");
        }

        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-sans antialiased text-white leading-normal tracking-wider bg-[#242424] flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-24 py-16">
        <div className="relative w-full max-w-5xl bg-[#505050] rounded-lg shadow-2xl flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/5 flex-shrink-0">
            <div className="w-36 h-36 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#2E90EB] shadow-lg mx-auto  mb-8 lg:mx-0 lg:ml-8 lg:mt-8">
              <img
                src={`http://localhost:5000/${userData.img.replace(
                  /\\/g,
                  "/"
                )}`}
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-8 lg:w-3/5">
            <h1 className="text-3xl font-bold">
              {userData.fname + " " + userData.lname}
            </h1>
            <div className="w-3/4 lg:w-full mt-3 border-b-2 border-[#2E90EB] opacity-25"></div>
            <p className="mt-4 text-base font-bold text-[#E0E0E0]">
              {userData.category}
            </p>
            <p className="mt-2 text-sm text-[#CFCFCF]">{userData.city}</p>
            <div className="mt-6 flex items-center bg-[#404040] text-sm text-[#E0E0E0] py-2 px-4 rounded-md shadow-md">
              <FaPhoneAlt className="text-[#2E90EB] mr-3" />
              {userData.number}
            </div>

            <div className="mt-8">
              <button
                className="bg-[#2E90EB] hover:bg-[#1B74CE] transition-transform duration-200 ease-in-out text-white font-bold py-2 px-6 rounded-md shadow-lg hover:scale-[1.05]"
                onClick={() => navigate("/projects")}
              >
                Portfolio
                {/* {t("Portfolio")} */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhiteFooter />
    </div>
  );
};

export default Profile;
