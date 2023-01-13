import React, { useEffect, useState } from "react";
import "../resources/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Exchange from "../resources/img/exchange.png";
import Logo from "../resources/img/navLogo.svg";
import { login } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, AUTHENTICATED } from "../const";

function Login({ authentication }) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let oauthError = searchParams.get("oauthError");
    if (oauthError) {
      setError(oauthError);
    }
    if (searchParams.get("logout")) {
      console.log("Hi");
      localStorage.removeItem(ACCESS_TOKEN);
      authentication(false);
      localStorage.setItem(AUTHENTICATED, false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailAddress.length <= 0 || password.length <= 0) {
      e.target.emailAddress.className += " border-red-500";
      e.target.password.className += " border-red-500";
      setError("Please Enter All Required Data Information");
      return;
    }
    login(emailAddress, password)
      .then((reponse) => {
        localStorage.setItem(ACCESS_TOKEN, reponse.data.accessToken);
        localStorage.setItem(AUTHENTICATED, true);
        authentication(true);
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
        e.target.emailAddress.className += " border-red-500";
        e.target.password.className += " border-red-500";
        setError("Please Enter Correct Credentials!");
      });
  };

  return (
    <div>
      <div className="mx-28 my-24 lg:grid grid-cols-2 shadow-2xl">
        <div className="border-2 border-lime-500 rounded-l-lg p-5">
          <h1 className="text-center header text-3xl font-extrabold text-lime-500">
            Welcome Back 💗
          </h1>
          <form className="lg:mt-8 lg:p-4" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6">
              <h1 className="font-bold text-red-500 text-center">{error}</h1>
            </div>
            <div className="mb-6">
              <label htmlFor="emailAddress">
                <h1 className="pb-2 font-bold text-lime-500">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl pr-1" />
                  Email Address
                </h1>
                <input
                  type="email"
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
                  value={password}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="***********"
                />
              </label>
            </div>
            <div className="mb-6">
              <h1 className="text-lime-500">
                New Here?
                <Link
                  to={"/register"}
                  className="font-extrabold decoration-lime-500 underline"
                >
                  Register Now
                </Link>
              </h1>
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
                Log In
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
        <div className="border-2 border-lime-500 rounded-r-lg bg-lime-500">
          <img src={Logo} className="w-52 m-auto" />
          <img className="m-auto" src={Exchange} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
