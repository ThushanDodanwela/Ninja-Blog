import BlogList from "./BlogList";
import "./Home.css";
import useFetch from "./usefetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && (
        <h2
          style={{
            textAlign: "center",
            fontWeight: 500,
            color: "red",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          {error}
        </h2>
      )}
      {isPending && (
        <div
          style={{
            textAlign: "center",

            marginTop: "50px",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      )}
      {blogs && <BlogList blogProp={blogs} title="All Blogs" />}

      {blogs && (
        <BlogList
          blogProp={blogs.filter((blog) => blog.author === "Thushan")}
          title="Thushan's Blogs"
        />
      )}
    </div>
  );
};

export default Home;
