import React, { useState } from "react";
import "./App.css";
import CheatSheet from "./CheatSheet";

//import data from "./data.json";

import getData from "./getData";

function App() {
  const [header, setHeader] = useState("");

  const [examId, setExamId] = useState("");

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);

  return (
    <div style={{ padding: 15 }}>
      <div>
        登录信息:
        <input
          style={{ width: 200 }}
          value={header}
          onChange={({ target: { value } }) => setHeader(value)}
        />
      </div>

      <div>
        考试id
        <input
          style={{ width: 200 }}
          value={examId}
          onChange={({ target: { value } }) => setExamId(value)}
        />
      </div>

      <div>
        <button
          disabled={ !header || !examId }
          onClick={() => {
            setLoading(true);
            getData({
              header,
              examId
            })
              .then(data => {
                setData(data);
              })
              .catch(() => {
                setData(null);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          查询
        </button>
      </div>

      {loading ? (
        <div>加载中....</div>
      ) : data ? (
        <CheatSheet data={data} />
      ) : null}
    </div>
  );
}

export default App;
