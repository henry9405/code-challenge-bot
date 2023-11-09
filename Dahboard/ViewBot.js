import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewBot() {
  const { id } = useParams();

  const [bot, setBot] = useState({
    name: "",
    health: "",
    avatar_url: "",
  });

  useEffect(() => {
    axios({ method: "GET", url: `http://localhost:3000/bots/${id}` })
      .then((res) => {
        setBot(res.data);
      })
      .catch((e) => {
        alert("Bot not found");
      });
  }, []);

  return (
    <div className="card">
      <img src={bot.avatar_url} />
      <h3>Name: {bot.name}</h3>
      <h3>Health: {bot.health}</h3>
    </div>
  );
}

export default ViewBot;
