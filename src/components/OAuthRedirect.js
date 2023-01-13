import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ACCESS_TOKEN, AUTHENTICATED } from "../const";

function OAuthRedirect({ authentication }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("error")) {
      setError(JSON.stringify(searchParams.get("error")));
      console.log(searchParams.get("error"));
    }
    let oAuthtoken = searchParams.get("token");
    if (oAuthtoken) {
      oAuthtoken = oAuthtoken.replace("#_=_", "");
      localStorage.setItem(ACCESS_TOKEN, oAuthtoken);
      localStorage.setItem(AUTHENTICATED, true);
      authentication(true);
      setToken(oAuthtoken);
    }
  }, []);

  if (error) {
    navigate("/login?oauthError=" + error);
  }
  if (token) {
    navigate("/profile");
  }
}

export default OAuthRedirect;
