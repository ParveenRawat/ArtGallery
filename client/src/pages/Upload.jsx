import React, { useState } from 'react';

function Upload() {
  const [artwork, setArtwork] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4">Art Gallery</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artwork-file">
            Upload Artwork
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artwork-file"
            type="file"
            onChange={handleUpload}
          />
        </div>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {artwork.map((art, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={art.url} alt={art.title} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold">{art.title}</h2>
            <p className="text-gray-600">{art.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upload;