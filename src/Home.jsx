import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Popup from "./components/Popup_BOX/popUp2";

function Home(props) {
  const [getMovie, setGetMovie] = useState([]);
  const [search, setSearch] = useState();
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState({});

  const imgUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2`;
  const notFound = `https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png`;

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const popupHandler = (e) => {
    let data = getMovie[parseInt(e.target.id)];
    console.log(data);
    setPopup(data);
    setModal(true);
  };

  const closeHandler = () => {
    setModal(false);
  };

  const fetchHandler = () => {
    axios({
      method: "GET",
      url: `API-KEY`,
    })
      .then((response) => {
        console.log(response);
        let result = response.data.results;
        setGetMovie(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h1
        style={{ textAlign: "center" }}
        className="card-title text-white mt-4"
      >
        Movie Search App
      </h1>
      <input
        style={{ width: "700px", margin: "auto" }}
        id="inputSearch"
        type="text"
        className="form-control mt-5"
        placeholder="Search for a movie..."
        name="name"
        onChange={searchHandler}
        value={search}
      />

      <button
        style={{ width: "500px", margin: "auto" }}
        type="button"
        className="btn btn-primary btn-sm btn-block mt-1"
        onClick={fetchHandler}
      >
        search
      </button>

      <div className="row">
        {getMovie.map((img, index) => {
          return (
            <div className="col">
              <div id="parent" className="card mt-4" key={index + 1}>
                {img.poster_path ? (
                  <img
                    style={{
                      width: "250px",
                      height: "250px",
                      margin: "auto",
                      padding: "10px",
                    }}
                    className="card-img-top"
                    src={imgUrl + img.poster_path}
                    alt=""
                  />
                ) : (
                  <img style={{ padding: "10px" }} src={notFound} alt="pic" />
                )}
                <h5 style={{ padding: "15px" }} className="card-title">
                  {img.title}
                </h5>
                <button
                  style={{ margin: "10px", borderRadius: "5px" }}
                  className="btn-primary"
                  id={index}
                  onClick={popupHandler}
                >
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {modal ? (
        <Popup
          img={imgUrl + popup.poster_path}
          title={popup.title}
          overWiew={popup.overview}
          popularity={popup.popularity}
          original_language={popup.original_language}
          releaseDate={popup.release_date}
          closeHandler={closeHandler}
        />
      ) : null}
    </div>
  );
}

export default Home;
