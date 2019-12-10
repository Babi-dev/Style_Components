import React from "react";
import "./style.scss";

const Table = ({ Data, Columns }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {Data.map((e, index) => {
              return <th key={index}>{e.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Columns.map((e, index) => (
            <tr key={index}>
              {Object.keys(e).map((item, id) => (
                <td key={id}>{e[item]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
