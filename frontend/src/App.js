import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const fetchItems = async () => {
    const res = await fetch("http://backend-service:5000/items");
    const data = await res.json();
    setItems(data);
  };

  const addItem = async () => {
    await fetch("http://backend-service:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setName("");
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>3 Tier Application</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;