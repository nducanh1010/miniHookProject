import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
const DetailBlog = () => {
  let { id } = useParams();
  const {
    data: dataBlogDetail,
    loading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
  let history = useHistory();
  const handleBacktoBlog = () => {
    history.push("/blog");
  };
  return (
    <>
      <div>
        <span onClick={handleBacktoBlog}>&lt;&lt; Back</span>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID: {id} -----{" "}
              {loading === false ? dataBlogDetail.title : "Loading data ..."}
            </div>
            <div className="body">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};
export default DetailBlog;
