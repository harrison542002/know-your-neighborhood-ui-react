import "../resources/css/Header.css";
import Goal from "../resources/img/goal.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AUTHENTICATED } from "../const";
const Home = ({ isAuthenticated, authentication }) => {
  useEffect(() => {
    authentication(localStorage.getItem(AUTHENTICATED) === "false");
  }, []);
  return (
    <>
      <div className="hero-banner">
        <div className="w-100 p-20 bg-gradient-to-r from-lime-200 to-lime-600">
          <div className="container m-auto text-center">
            <h1 className="header text-5xl w-100 text-gray-900 font-extrabold m-5">
              Curious About Your NEIGHBOURHOOD
            </h1>
            <p className="text-gray-700 w-9/12 m-auto">
              Knowing Your Neighbourhood can increase your convenience of
              searching stores, services so that to effect your productivity of
              your daily life.
            </p>
            <div className="py-5">
              <Link
                to={"/register"}
                className="text-lg border-b-4 border-lime-600 hover:text-gray-500"
              >
                Start Today With KN To INCREASE YOUR PRODUCTIVITY
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="p-10 mt-4">
          <h1 className="text-2xl header">
            Register now to <b>Explore</b>
          </h1>
          <p className="mt-4 mr-8 mb-4">
            KN provides tons of resources for a wide range of entities such as,
            cooking, tech, cosmetics, pets and more. By registering an account
            in KN, you are subscribed to our collaborated services and stores
            near your location.
          </p>
          {localStorage.getItem(AUTHENTICATED) === "false" ? (
            <Link
              to={"/register"}
              className="p-3 bg-gradient-to-r from-lime-600 to-lime-200 text-lg font-bold
          rounded-lg shadow-gray-300 shadow-md"
            >
              Register Now
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="relative h-64 lg:block">
          <div className="w-40 h-40 animate-pulse bg-lime-200 rounded-md shadow-lg top-10 absolute lg:left-2/4"></div>
          <div className="w-40 h-40 animate-pulse bg-lime-500 rounded-md shadow-lg top-20 absolute lg:left-72"></div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 bg-lime-300 ">
        <div className="px-10 py-5 m-auto">
          <img src={Goal} className="w-64" alt="accurate" />
        </div>
        <div className="pt-8 pl-10">
          <h1 className="text-2xl header">
            <b>Accurate</b>
          </h1>
          <p className="mt-4 mr-8 mb-4">
            KN teams investigate all kinds of services and stores to ensure the
            stability and legalitiy of each business. As a result, more than
            1000 of cusumers of KN give priceless feedbacks on the evaluation of
            KN.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
