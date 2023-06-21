import { FC, ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "~/themes";

interface RootProviderProps {
  children?: ReactNode;
}

const RootProvider: FC<RootProviderProps> = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div className="text-4xl">Loading</div>}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default RootProvider;
