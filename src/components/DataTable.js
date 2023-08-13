// src/components/DataTable.js
import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <div className="data-table-container">
      <h2>Data Table</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Comment</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="picture-cell">
                <img className="uploaded-picture" src={item.picture} alt="Uploaded" />
              </td>
              <td>{item.comment}</td>
              <td>{item.name}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
