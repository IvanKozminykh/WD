import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import FutureHereNew from "../components/FutureHereNew.jsx";
import EarlyAccess from "../components/EarlyAccess.jsx";
import Blog from "../components/Blog.jsx";
import Last from "../components/Last.jsx";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section  className="section future_here_new">
        <FutureHereNew />
      </section>
      <section  className="section early_access">
        <EarlyAccess />
      </section>
      <section className="section Blog">
        <Blog />
      </section>
      <section className="section Last">
        <Last />
      </section>
    </>
  );
};

export default Home;
