import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Upload() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [artist, setArtist] = useState("");
  const [desc, setDesc] = useState("");

  const uploadArt = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/upload", {
        url,
        title,
        subtitle,
        artist,
        desc,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setUrl("");
        setTitle("");
        setSubtitle("");
        setArtist("");
        setDesc("");
        toast.success("Uploaded Art");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <form onSubmit={uploadArt}>
          <label>Artwork URL</label>
          <input
            type="text"
            placeholder="Enter your art url..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Subtitle</label>
          <input
            type="text"
            placeholder="Enter Subtitle.."
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />{" "}
          <label>Artist</label>
          <input
            type="text"
            placeholder="Artist Name.."
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />{" "}
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter Description.."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default Upload;
