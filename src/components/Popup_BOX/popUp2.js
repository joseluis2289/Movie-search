import React from "react";
import "./style.css";

function popUp2({
  closeHandler,
  img,
  title,
  releaseDate,
  overWiew,
  popularity,
  original_language,
}) {
  const notFound = `https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png`;
  return (
    <div className="modal container">
      <button className="btn-primary" onClick={closeHandler}>
        X
      </button>

      <div className="row">
        <div className="col">
          <div className="card m-3" style={{ width: "28rem" }}>
            {img ? (
              <img
                style={{
                  width: "350px",
                  height: "250px",
                  margin: "auto",
                  padding: "10px",
                  borderRadius: "20px",
                }}
                className="card-img-top"
                src={img}
                alt="img"
              />
            ) : (
              <img
                style={{
                  width: "350px",
                  height: "250px",
                  margin: "auto",
                  padding: "10px",
                  borderRadius: "20px",
                }}
                className="card-img-top"
                src={notFound}
                alt="hola"
              />
            )}

            <h4 className="card-title m-auto">{`Release Date:${releaseDate}`}</h4>
          </div>
        </div>
        <div className="col">
          <h1 className="card-title text-white">{title}</h1>
          <h4 className="card-title text-white">{`Popolarity:${popularity}`}</h4>
          <h4 className="card-title text-white">{`Language:${original_language}`}</h4>
          <p className="text-white">{overWiew}</p>
        </div>
      </div>
    </div>
  );
}

export default popUp2;
