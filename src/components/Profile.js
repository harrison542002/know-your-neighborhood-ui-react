import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faUser,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
import { retrieveProfileInformation } from "../services/AuthServices";
import { ACCESS_TOKEN, AUTHENTICATED } from "../const";
import { useNavigate } from "react-router";

function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(AUTHENTICATED) === "false") {
      navigate("/login", { replace: true });
      return;
    }
    retrieveProfileInformation(localStorage.getItem(ACCESS_TOKEN)).then(
      (data) => {
        setUserInfo(data.data);
      }
    );
  }, []);

  return (
    <>
      <div className="p-10">
        <div className="border-4 border-lime-500 p-5 rounded-md border-double">
          <h1 className="text-center font-bold text-3xl">
            User Infomration <FontAwesomeIcon icon={faAddressCard} />
          </h1>

          <div className="flex justify-center my-3">
            <img
              src={userInfo.imageURL}
              alt={`${userInfo.name} profile`}
              className="rounded-full w-52 shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <div className="-ml-20 mt-3">
              <div className="p-5">
                <h1 className="text-xl">
                  <FontAwesomeIcon icon={faUser} className="mr-4" />
                  User Name
                </h1>
                <h1>{userInfo.name}</h1>
              </div>
              <div className="p-5">
                <h1 className="text-xl">
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-4" />
                  Email Address
                </h1>
                <h1>{userInfo.email}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
