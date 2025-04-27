import "../styles.css";

const Pagination = ({ pageNo, setPageNo, postArr }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px",
        justifyContent: "center",
      }}
    >
      {pageNo > 1 && (
        <span className="pageNo" onClick={() => setPageNo((prev) => prev - 1)}>
          {"<"}
        </span>
      )}
      <div>
        {postArr.map((val) => (
          <span
            className={val === pageNo ? "pageNo active" : "pageNo"}
            onClick={() => setPageNo(val)}
          >
            {val}
          </span>
        ))}
      </div>
      <span className="pageNo" onClick={() => setPageNo((prev) => prev + 1)}>
        {">"}
      </span>
    </div>
  );
};

export default Pagination;
