import * as React from "react";
import { Link } from "gatsby";
import LayoutPage from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <LayoutPage pageTitle="Home Page " />
      <Link to="/about">About</Link>
      <p> Learing Gastby from Documentation</p>
    </main>
  );
};

export default IndexPage;
