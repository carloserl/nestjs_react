import "./Details.css";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import React, { useState, useEffect } from "react";

function Details(props) {
  const [data, setData] = useState({ hits: [] });
  const [input, setInput] = useState("");

  try {
    console.log("autor_id", props.match.params.autor_id);
  } catch (error) {
    console.log("autor_id error");
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/hits/27426796");
      console.log("result 27426796", result);
      setData(result.data);
    };

    fetchData();
  }, []);

  return <div>Details2</div>;
}

export default Details;
