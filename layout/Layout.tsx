// import { Header } from "@components/";
// import Header from "@components/Header";
import Header from "@components/Header";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
