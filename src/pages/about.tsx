import React from "react";
import Layout from "../components/layout";

const About = ({ location }: { location: { pathname: string } }) => (
  <Layout uri={location.pathname}>
    <h1>About me</h1>
  </Layout>
);

export default About;
