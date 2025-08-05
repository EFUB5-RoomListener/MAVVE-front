import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

export default function Auth({ Page, option }) {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const isLoggedIn = user.nickname !== "";

  useEffect(() => {
    if (option === "login" && !isLoggedIn) {
      navigate("/login");
    }

    if (option === "logout" && isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate, option]);

  return <Page />;
}
