import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Thushan");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2 className="create_Title"> Add New Blog</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Author </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Thushan">Thushan</option>
          <option value="Mosh">Mosh</option>
          <option value="Max">Max</option>
        </select>

        {!isPending && <button className="btn-submit">Add Blog</button>}
        {isPending && (
          <button disabled className="btn-submit">
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
