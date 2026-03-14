import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://backend-service:5000/api")
      .then(res => {
        setData(res.data.message + " Visits: " + res.data.visits);
      });
  }, []);

  return (
    <div style={{textAlign:"center"}}>
      <h1>3 Tier Kubernetes App</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
