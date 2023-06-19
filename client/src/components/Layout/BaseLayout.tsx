import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { styled } from "@mui/material/styles";

const BaseLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <BaseLayoutStyled>
        <Outlet />
      </BaseLayoutStyled>
    </div>
  );
};

const BaseLayoutStyled = styled("div")(() => ({
  height: "100%",
  backgroundImage: "url(/images/galaxy.jpg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingTop: "56px",
}));

export default BaseLayout;
