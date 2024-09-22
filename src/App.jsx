/** @format */

import axios from "axios";
import { useState } from "react";
function App() {
  const [data, setdata] = useState([]);

  function newsapi() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=7ac1f6dc84104eddaac6e66666c440e3"
      )
      .then((response) => {
        setdata(response.data.articles);
      });
  }

  return (
    <>
      <div className="container">
        <button className="btn btn-primary m-3" onClick={newsapi}>
          News API
        </button>
      </div>

      <div className="container">
        <div className="row">
          {data.map((value, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
