import React, { useState } from "react";
import "./app.scss";

export default function App() {
  const [page, setPage] = useState("");
  const [page1, setPage1] = useState([]);
  const [page2, setPage2] = useState([]);
  const [page3, setPage3] = useState([]);
  const [page4, setPage4] = useState([]);

  const handleChange = (e) => {
    setPage(e.target.value);
  };

  const addOpen = () => {
    setPage1([...page1, page]);
    setPage("");
  };

  const changeDelete = (index) => {
    const updatedPage1 = [...page1.slice(0, index), ...page1.slice(index + 1)];
    setPage1(updatedPage1);
  };

  const addOpen2 = () => {
    setPage2([...page2, page]);
    setPage("");
  };

  const changeDelete2 = (index) => {
    const updatedPage2 = [...page2.slice(0, index), ...page2.slice(index + 1)];
    setPage2(updatedPage2);
  };

  const addOpen3 = () => {
    setPage3([...page3, page]);
    setPage("");
  };

  const changeDelete3 = (index) => {
    const updatedPage3 = [...page3.slice(0, index), ...page3.slice(index + 1)];
    setPage3(updatedPage3);
  };

  const addOpen4 = () => {
    setPage4([...page4, page]);
    setPage("");
  };

  const changeDelete4 = (index) => {
    const updatedPage4 = [...page4.slice(0, index), ...page4.slice(index + 1)];
    setPage4(updatedPage4);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          className="form-control container-sm"
          value={page}
          onChange={handleChange}
        />
      </div>
      <div className="container d-flex gap-4 mt-4">
       
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open</h1>
            </div>
            {page1.map((item, index) => (
              <div
                className="card-body d-flex justify-content-between gap-2 align-items-center"
                key={index}
              >
                <div>
                  <p className="text-center">{item}</p>
                </div>
                <div className="d-flex gap-1">
                  <button className="btn btn-info">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => changeDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="card-footer text-center">
              <button className="btn btn-success" onClick={addOpen}>
                Add
              </button>
            </div>
          </div>
        </div>

       
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open2</h1>
            </div>
            {page2.map((item, index) => (
              <div
                className="card-body d-flex justify-content-between gap-2 align-items-center"
                key={index}
              >
                <div>
                  <p className="text-center">{item}</p>
                </div>
                <div className="d-flex gap-1">
                  <button className="btn btn-info">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => changeDelete2(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="card-footer text-center">
              <button className="btn btn-success" onClick={addOpen2}>
                Add
              </button>
            </div>
          </div>
        </div>

       
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open3</h1>
            </div>
            {page3.map((item, index) => (
              <div
                className="card-body d-flex justify-content-between gap-2 align-items-center"
                key={index}
              >
                <div>
                  <p className="text-center">{item}</p>
                </div>
                <div className="d-flex gap-1">
                  <button className="btn btn-info">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => changeDelete3(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="card-footer text-center">
              <button className="btn btn-success" onClick={addOpen3}>
                Add
              </button>
            </div>
          </div>
        </div>

        
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open4</h1>
            </div>
            {page4.map((item, index) => (
              <div
                className="card-body d-flex justify-content-between gap-2 align-items-center"
                key={index}
              >
                <div>
                  <p className="text-center">{item}</p>
                </div>
                <div className="d-flex gap-1">
                  <button className="btn btn-info">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => changeDelete4(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="card-footer text-center">
              <button className="btn btn-success" onClick={addOpen4}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
