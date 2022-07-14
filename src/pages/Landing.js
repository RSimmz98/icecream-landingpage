import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Ice Cream Yummy Flovor"
        subtitle="MORE THAN 40 FLAVORS TO CHOOSE FROM"
        image="https://cdn.kuali.com/wp-content/uploads/2021/07/28215815/840x560-Sweet-Corn-Ice-Cream1.jpg"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}

//https://source.unsplash.com/collection/404339/800x600