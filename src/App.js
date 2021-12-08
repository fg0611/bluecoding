import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // should write down API key
  const url = "https://api.giphy.com/v1/gifs/trending?api_key=";

  const [state, setstate] = useState([]);
  const [search, setsearch] = useState("");
  const [found, setfound] = useState(null);
  // https://api.giphy.com/v1/gifs/search?

  useEffect(async () => {
    const { data } = await axios.get(url);
    if (!data) return;
    await setstate(data?.data);
    console.log(1);
  }, []);

  console.log(state);
  return (
    <div className="App">
      <div>DATA</div>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          const { data } = await axios.get(`${url}q=${search}`);
          await setfound(JSON.stringify(data.data));
        }}
      >
        <input
          type="text"
          placeholder="search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
      </form>
      <div>
        {state?.length ? (
          state.map((e) => (
            // <div>{JSON.stringify(e)}</div>
            <img
              key={e.id}
              className="img"
              src={e.images["480w_still"].url}
              alt=""
            />
          ))
        ) : (
          <img src={""} alt="" />
        )}
      </div>
    </div>
  );
}

export default App;
