import { useState } from 'react';

function useArtwork() {
  const [artworks, setArtworks] = useState([]);

  const addArtwork = (artwork) => {
    setArtworks((prevArtworks) => [...prevArtworks, artwork]);
  };

  return { artworks, addArtwork };
}

export default useArtwork;