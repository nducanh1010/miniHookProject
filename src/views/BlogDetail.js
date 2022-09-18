import { useParams, useHistory } from "react-router-dom";
const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const handleBacktoBlog = () => {
    history.push("/blog");
  };
  return (
    <>
      <div>
        <span onClick={handleBacktoBlog}>&lt;&lt; Back</span>
      </div>
      <div> DetailBlog with id{id}</div>
    </>
  );
};
export default DetailBlog;
