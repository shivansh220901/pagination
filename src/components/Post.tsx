import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "../styles.css";

const Posts = () => {
  const [images, setImages] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const prevPosts = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index)
    .filter((val) => val > 0)
    .reverse();
  const nextPosts = Array.from({ length: 4 }, (_, index) => pageNo + index);
  const postArr = [...prevPosts, ...nextPosts];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
        );
        const response = await data.json();
        setImages(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [pageNo]);
  return (
    <div>
      {loading ? (
        <div>loading.....</div>
      ) : (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          {images.map(({ id, download_url }) => {
            return (
              <img key={id} src={download_url} height="150px" width="100px" />
            );
          })}
        </div>
      )}
      <Pagination pageNo={pageNo} setPageNo={setPageNo} postArr={postArr} />
    </div>
  );
};
export default Posts;
