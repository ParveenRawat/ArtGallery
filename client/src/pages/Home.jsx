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
          srcurl="https://i.pinimg.com/474x/e2/11/a3/e211a3e24e3550155bbc894af129d751.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://i.pinimg.com/474x/a7/b5/96/a7b5962b91409668855046cf78899791.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://i.pinimg.com/474x/89/d3/de/89d3de344559a5e0101ce01a4ddf3eb9.jpg
"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://i.pinimg.com/474x/8c/a3/13/8ca31338e131097510e656b8148c0165.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://i.pinimg.com/736x/44/f9/0e/44f90ee032260223efb1a3eee4af9393.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
        <Card
          srcurl="https://i.pinimg.com/736x/3f/7f/0c/3f7f0ce409ba7b042d316e88f566b70a.jpg"
          subtitle="The Subtitle"
          title="Saitama"
          desc="Just your favorite strongest anime character :)"
        />
      </section>
    </>
  );
}
export default AppLayout()(Home);
