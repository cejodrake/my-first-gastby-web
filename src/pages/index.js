import * as React from "react";
import { Link } from "gatsby";
import LayoutPage from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <LayoutPage pageTitle="Home Page " />
      <Link to="/about">About</Link>
      <p> Learing Gastby from Documentation</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </main>
  );
};

export default IndexPage;
