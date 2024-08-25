import React, { useState } from 'react';

function Upload() {
  const [artwork, setArtwork] = useState([]);
  const [artURL, setArtURL] = useState('');
  const [artTitle, setArtTitle] = useState('');
  const [artSubtitle, setArtSubtitle] = useState('');
  const [artArtist, setArtArtist] = useState('');
  const [artDescription, setArtDescription] = useState('');

  const handleUpload = (event) => {
    event.preventDefault();
    const newArt = {
      url: artURL,
      title: artTitle,
      subtitle: artSubtitle,
      artist: artArtist,
      description: artDescription,
    };
    setArtwork([...artwork, newArt]);
    setArtURL('');
    setArtTitle('');
    setArtSubtitle('');
    setArtArtist('');
    setArtDescription('');
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4">Art Gallery</h1>
      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artwork-url">
            Artwork URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artwork-url"
            type="url"
            value={artURL}
            onChange={(e) => setArtURL(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artwork-title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artwork-title"
            type="text"
            value={artTitle}
            onChange={(e) => setArtTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artwork-subtitle">
            Subtitle
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artwork-subtitle"
            type="text"
            value={artSubtitle}
            onChange={(e) => setArtSubtitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artwork-artist">
            Artist
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artwork-artist"
            type="text"
            value={artArtist}
            onChange={(e) => setArtArtist(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artwork-description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artwork-description"
            value={artDescription}
            onChange={(e) => setArtDescription(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Artwork
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {artwork.map((art, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={art.url} alt={art.title} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold">{art.title}</h2>
            <h3 className="text-md font-semibold">{art.subtitle}</h3>
            <p className="text-gray-600">{art.artist}</p>
            <p className="text-gray-600">{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upload;
