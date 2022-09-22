import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import AddNewBlog from "./AddNewBlog";
import CloseButton from "react-bootstrap/CloseButton";
const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    data: dataBlogs,
    loading,
    // isError,
  } = useFetch(" https://jsonplaceholder.typicode.com/posts", false);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let DataReverse = dataBlogs.slice(0, 9);
      setNewData(DataReverse);
    }
  }, [dataBlogs]);

  const handleAddNew = (blog) => {
    setShow(false);
    let data = newData;
    data.unshift(blog);
    setNewData(data);
  };
  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };
  return (
    <>
      {/* my-3 m=margin y=Oy */}
      <Button variant="primary" className="my-3" onClick={handleShow}>
        +Add new Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>

      <div className="blog-container">
        {loading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <CloseButton
                  aria-label="Hide"
                  variant="white"
                  style={{ float: "right" }}
                  onClick={() => deletePost(item.id)}
                />
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
