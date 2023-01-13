import React, { useEffect, useState } from "react";
import "../resources/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import TwoWomen from "../resources/img/register.png";
import Logo from "../resources/img/navLogo.svg";
import { register } from "../services/AuthServices";
import { ACCESS_TOKEN, AUTHENTICATED } from "../const";
import { useNavigate } from "react-router";
import { StatusCodes } from "http-status-codes";
import { Reorder } from "framer-motion";
export default function Registration({ authentication }) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    authentication(localStorage.getItem(AUTHENTICATED));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      emailAddress.length <= 0 ||
      password.length <= 0 ||
      username.length <= 0
    ) {
      e.target.username.className += " border-red-500";
      e.target.password.className += " border-red-500";
      e.target.emailAddress.className += " border-red-500";
      setError("Please Enter All Required Data");
      return;
    }
    register(username, emailAddress, password)
      .then((reponse) => {
        console.log(reponse.data);
        localStorage.setItem(ACCESS_TOKEN, reponse.data.accessToken);
        localStorage.setItem(AUTHENTICATED, true);
        authentication(true);
        navigate("/profile", { replace: true });
      })
      .catch((error) => {
        if (error.response.data.status === StatusCodes.CONFLICT) {
          setError("Email has already in use, please consider Login");
        }
      });
  };

  return (
    <div>
      <div className="mx-28 my-24 lg:grid grid-cols-2 shadow-2xl">
        <div className="border-2 border-lime-500 xl:rounded-l-lg  bg-lime-500">
          <img src={Logo} className="w-52 m-auto" />
          <img className="m-auto" src={TwoWomen} alt="exchange image" />
        </div>
        <div className="border-2 border-lime-500 xl:rounded-r-lg p-5 ">
          <h1 className="text-center header text-3xl font-extrabold text-lime-500">
            Start Register A New account on KN
          </h1>
          <form className="lg:mt-8 lg:p-4" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6">
              <h1 className="font-bold text-red-500 text-center">{error}</h1>
            </div>
            <div className="mb-6">
              <label htmlFor="username">
                <h1 className="pb-2 font-bold text-lime-500">Full Name</h1>
                <input
                  type="text"
                  className="border-2 border-lime-500 p-3 w-full rounded-md 
            shadow-lime-300 shadow-md"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="eg. Harrison Yin"
                />
              </label>
            </div>
            <div className="mb-6">
              <label htmlFor="emailAddress">
                <h1 className="pb-2 font-bold text-lime-500">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl pr-1" />
                  Email Address
                </h1>
                <input
                  type="text"
                  className="border-2 border-lime-500 p-3 w-full rounded-md 
            shadow-lime-300 shadow-md"
                  name="emailAddress"
                  id="emailAddress"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="eg. example@KN.com"
                />
              </label>
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <h1 className="pb-2 font-bold text-lime-500">
                  <FontAwesomeIcon icon={faLock} className="text-xl pr-1" />
                  Password
                </h1>
                <input
                  type="password"
                  className="border-2 border-lime-500 p-3 w-full rounded-md 
            shadow-lime-300 shadow-md"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="***********"
                />
              </label>
            </div>
            <div className="mb-3 pt-4">
              <button
                className="p-4 bg-lime-500 rounded-xl border-2 border-lime-500 hover:text-lime-500 hover:bg-white"
                type="submit"
              >
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="text-xl pr-1"
                />
                Register New Account
              </button>
            </div>
            <div className="grid grid-cols-5">
              <hr className="block my-3 font-extrabold col-span-2" />
              <h1 className="text-center">or</h1>
              <hr className="block my-3 text-black font-extrabold col-span-2  " />
            </div>
            <div className="my-2">
              <a
                className="flex rounded-xl p-3 bg-blue-700 shadow-md mb-5"
                href="http://localhost:8080/oauth2/authorize/facebook?redirectUrl=http://localhost:3000/oauth2/redirect"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="social-icon icon fa-brands fa-facebook-square fa-2xl text-white"
                />
                <p className="text-white m-auto">Log In With Facebook</p>
              </a>
              <a
                className="flex rounded-xl p-3 border-2 shadow-md"
                href="http://localhost:8080/oauth2/authorize/google?redirectUrl=http://localhost:3000/oauth2/redirect"
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="social-icon icon fa-brands fa-facebook-square fa-2xl text-lime-500"
                />
                <p className="m-auto">Log In With Google</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
