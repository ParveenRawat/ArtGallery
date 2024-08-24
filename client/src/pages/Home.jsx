import React from "react";
import Card from "../components/ArtCard/Card";
import AppLayout from "../components/layouts/AppLayout";

function Home() {
  return (
    <>
      <section className="relative lg:grid lg:grid-cols-3">
        <Card
          srcurl="https://picsum.photos/seed/picsum/200/300"
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
        <Card
          srcurl="https://dummyimage.com/600x360"
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
