import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
const Blog = () => {
  const {
    data: dataBlogs,
    loading,
    isError,
  } = useFetch(" https://jsonplaceholder.typicode.com/posts", false);
  let newData = [];
  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 9);
  }
  return (
    <>
      <div className="blog-container">
        {loading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">{item.title}</div>
                <div className="body">{item.body}</div>
                <button>
                  <Link to={`blog/${item.id}`}>{">>"}View detail</Link>
                </button>
              </div>
            );
          })}
        {loading === true && <div className="loading">loading data ...</div>}
      </div>
    </>
  );
};
export default Blog;
