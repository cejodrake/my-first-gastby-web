import * as React from "react";
import { Link } from "gatsby";
import LayoutPage from "../components/layout";

const AboutPage = () => {
  return (
    <main>
      <LayoutPage pageTitle="About me" />
      <Link to="/">Home Page</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};
export default AboutPage;
