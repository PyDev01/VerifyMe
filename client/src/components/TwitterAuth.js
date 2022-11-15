import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/context";
import axios from "axios";

export default function TwitterAuth() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    let code = window.location.href.split("?");

    let oauthToken = code[1].split("=")[1];
    oauthToken = oauthToken.split("&")[0];

    let verifier = code[1].split("=")[2];

    let data = {
      oauthToken,
      verifier,
    };

    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/connect/twitter`,
        { data },
        { withCredentials: true }
      )
      .then((res) => {
        setUser(res.data.message);
        localStorage.setItem("isAuth", true);
        navigate("/wallet");
      })
      .catch((e) => {
        return console.log(e);
      });
  }, []);

  return <></>;
}
