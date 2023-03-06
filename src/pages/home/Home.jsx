import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import "./Home.scss";
import Features from "../../components/features/Features";
import Discussons from "../../components/discussons/Discussons";
import { cards, projects } from "../../data/data";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide>
        {cards.map((item) => (
          <CategoryCard key={new Date().getTime()} item={item} />
        ))}
      </Slide>
      <Features />
      <Discussons />
      <Slide>
        {projects.map((item) => (
          <ProjectCard key={new Date().getTime()} item={item} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
