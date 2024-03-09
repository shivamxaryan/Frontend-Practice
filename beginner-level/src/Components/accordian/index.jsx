import React from "react";
import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiEnabled, setMultiEnabled] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleExpand(getId) {
    setSelected(getId === selected ? null : getId);
  }

  const handleMultipleExpand = (getId) => {
    let cpyMulti = [...multiple];
    const findIndexId = cpyMulti.indexOf(getId);

    if (findIndexId === -1) {
      cpyMulti.push(getId);
    } else {
      cpyMulti.splice(findIndexId, 1);
    }

    setMultiple(cpyMulti);
  };

  return (
    <>
      <div>
        <h1>Accordian</h1>
      </div>
      <button
        onClick={() => {
          setMultiEnabled(!multiEnabled);
        }}
      >
        <h2>Enable Multiple Select</h2>
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div
            onClick={
              multiEnabled
                ? () => handleMultipleExpand(dataItem.id)
                : () => handleSingleExpand(dataItem.id)
            }
          >
            <h3>{dataItem.question}</h3>
            <span>+</span>
            {multiEnabled
              ? multiple.indexOf(dataItem.id) !== -1 && 
                  <div>{dataItem.answer} </div>
                
              : selected === dataItem.id && <div>{dataItem.answer} </div>}
            {/* {selected === dataItem.id ? <p>{dataItem.answer}</p> : null} */}
          </div>
        ))
      ) : (
        <h4>No data found!</h4>
      )}
    </>
  );
};

export default Accordian;
