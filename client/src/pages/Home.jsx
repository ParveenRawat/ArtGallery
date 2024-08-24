import React from "react";
import Card from "../components/Card";
function Home() {
  return (
    <>
      <section className="relative grid grid-cols-3">
        <Card
          srcurl="https://picsum.photos/id/237/200/300"
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

export default Home;
