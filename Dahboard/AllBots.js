import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllBots() {
  const [bots, setBots] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const navigate = useNavigate();

  function changeLimit(l) {
    console.log("Change Limit");
    setLimit(l);
    setPage(1);
    getBots(1, l);
  }

  function handleNext() {
    getBots(page + 1, limit);
    setPage(page + 1);
  }

  function handleBack() {
    if (page === 1) {
      return;
    }
    getBots(page - 1, limit);
    setPage(page - 1);
  }

  function getBots(page = 1, limit = 10) {
    axios({
      method: "GET",
      url: "http://localhost:3000/bots",
      params: {
        _page: page,
        _limit: limit,
      },
    })
      .then((res) => {
        console.log(res);
        setBots(res.data);
      })
      .catch((e) => {});
  }

  useEffect(() => {
    getBots(page, limit);
  }, []);

  return (
    <div>
      <h1>All BOTS</h1>
      {bots.length === 0 ? <h1>Loading Bots</h1> : null}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map((bot) => {
          return (
            <div
              key={bot.id}
              className="card"
              style={{ width: "150px", margin: "10px", cursor: "pointer" }}
              onClick={() => navigate(`view/${bot.id}`)}
            >
              <img src={bot.avatar_url} />
              <h3>{bot.name}</h3>
            </div>
          );
        })}
      </div>

      <div>
        <button onClick={handleBack}>Back</button>
        <button>{page}</button>
        <button onClick={handleNext}>Next</button>

        <select value={limit} onChange={(e) => changeLimit(e.target.value)}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
    </div>
  );
}

export default AllBots;
