import React, { useEffect } from "react";
import Card from "../components/ArtCard/Card";
import AppLayout from "../components/layouts/AppLayout";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setArtItems } from "../slices/artSlice";
function Home() {
  const { artItems } = useSelector((state) => state.art);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/art").then((response) => {
      dispatch(setArtItems(response.data));
    });
  }, []);

  const artCards = artItems.map((artItem) => (
    <Card
      key={artItem.url}
      srcurl={artItem.url}
      title={artItem.title}
      subtitle={artItem.subtitle}
      desc={artItem.desc}
    />
  ));

  return (
    <>
      <section className="relative items-center justify-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {artCards}
      </section>
    </>
  );
}
export default AppLayout()(Home);
