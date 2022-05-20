import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = (props) => {
  const blogs = props.blogProp;
  const title = props.title;

  return (
    <div className="blog-list">
      <h2 style={{ textAlign: "left", fontWeight: 500, marginTop: "50px" }}>
        {" "}
        {title}{" "}
      </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>Authored By : {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
