import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./usefetch";
import "./blogdetails.css";

const BlogDetails = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const handleBack = () => {
    navigate("/");
  };
  const { id } = useParams();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isPending && (
        <div
          style={{
            textAlign: "center",

            marginTop: "50px",
            alignItems: "center",
          }}
        >
          {" "}
          Loading ...
        </div>
      )}
      {error && (
        <div
          style={{
            textAlign: "center",
            fontWeight: 500,
            color: "red",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          {error}
        </div>
      )}
      <button className="btn-back" onClick={handleBack}>
        Back
      </button>
      <button className="btn-delete" onClick={handleDelete}>
        Delete
      </button>
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <h4> Authored By : {blog.author}</h4>
          <div className="blog-body">{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
