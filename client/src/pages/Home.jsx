import React from "react";
import Card from "../components/ArtCard/Card";
import AppLayout from "../components/layouts/AppLayout";

function Home() {
  return (
    <>
      <section className="relative items-center justify-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        <Card
          srcurl="https://i.pinimg.com/736x/3f/bc/10/3fbc100e5737125214d87e24b9abe241.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://i.pinimg.com/736x/e4/4a/24/e44a24fb134691775c50b4b4fe54461d.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://i.pinimg.com/736x/ca/80/96/ca8096952339d99cd1337bc48824724c.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://aayushraj.netlify.app/assets/project-1.png"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://dummyimage.com/600x360"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
      </section>
    </>
  );
}

export default AppLayout()(Home);
