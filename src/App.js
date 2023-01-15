import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Terms from "./components/Terms";
import Profile from "./components/Profile";
import OAuthRedirect from "./components/OAuthRedirect";
import { AUTHENTICATED } from "./const";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav
        authentication={(status) => setAuthenticated(status)}
        isAuthenticated={authenticated}
      />
      <Routes>
        <Route
          path={"/"}
          element={
            <Home
              authentication={(status) => setAuthenticated(status)}
              isAuthenticated={authenticated}
            />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Profile authentication={(status) => setAuthenticated(status)} />
          }
        ></Route>
        <Route
          path="/about"
          element={
            <About authentication={(status) => setAuthenticated(status)} />
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Contact authentication={(status) => setAuthenticated(status)} />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login authentication={(status) => setAuthenticated(status)} />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Registration
              authentication={(status) => setAuthenticated(status)}
            />
          }
        ></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route
          path="/oauth2/redirect"
          element={
            <OAuthRedirect
              authentication={(status) => setAuthenticated(status)}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
