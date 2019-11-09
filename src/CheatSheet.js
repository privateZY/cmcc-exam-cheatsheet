import React from "react";


const choiceMap = {
  "0": "A",
  "1": "B",
  "2": "C",
  "3": "D",
  "4": "E"
};

const questionType = {
  1: "单选",
  2: "多选"
};

const formatData = data => {
  let qSingle = [];

  let qMulti = [];

  data.forEach(d => {
    switch (d.type) {
      case 1:
        qSingle.push(d);
        break;
      case 2:
        qMulti.push(d);
        break;
      default:
    }
  });

  return [...qSingle, ...qMulti];
};

export default ({ data }) => {
  return formatData(data).map(({ content, questionAttrCopys, id, type }) => (
    <div key={id}>
      <h3>
        Q <span style={{ color: "gray" }}>{questionType[type]} </span>:{" "}
        {content}
      </h3>
      <ul>
        {questionAttrCopys
          .sort((a, b) => {
            return parseInt(a.name) > parseInt(b.name) ? 1 : -1;
          })
          .map(({ name, type, value }) => (
            <li
              key={name}
              style={{
                marginRight: 15,
                color: type === "0" ? "green" : "inherit"
              }}
            >
              {choiceMap[name]}:{value}
            </li>
          ))}
      </ul>
      <div
        style={{
          height: 2,
          borderBottom: "2px dashed #efefef",
          marginTop: 15
        }}
      />
    </div>
  ));
};
