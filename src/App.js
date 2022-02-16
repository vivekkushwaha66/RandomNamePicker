import React from 'react';
import './style.css';
import AddForm from './components/AddForm';
import Header from './components/Header';

export default function App() {
  const [selected, setSetlected] = React.useState(null);
  const [names, setNames] = React.useState([]);

  const listOfNames =
    names.length > 0
      ? names.map((name, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-capitalize">{name}</h6>
              <button
                onClick={() => deleteName(index)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : [];

  const addName = (name) => {
    setSetlected(null);
    if (name) {
      setNames((previousNames) => {
        return [...previousNames, name];
      });
    }
  };

  const deleteName = (index) => {
    setSetlected(null);
    setNames((prevNames) => {
      const newNames = prevNames.filter((item, i) => index !== i);
      return newNames;
    });
  };

  const selectRandom = () => {
    if (names.length > 1) {
      const random = Math.floor(Math.random() * names.length);
      const randomName = names[random];
      setSetlected(randomName);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="row mt-5">
        <div className="col-md-4">
          <AddForm addName={addName} />
        </div>
        <div className="col-md-4 offset-md-1">
          <h4 className="mt-3"> No of Participants : {names.length}</h4>
          <ul className="list-group">{listOfNames}</ul>
        </div>
      </div>
      {names.length > 1 && (
        <div className="row mt-2">
          <div className="col-md-12">
            <button onClick={selectRandom} className="btn btn-lg btn-success">
              Select Random
            </button>
          </div>
        </div>
      )}

      {selected && (
        <div className="row mt-2">
          <div className="col-md-12">
            <h1 className="mt-3">
              Selected Person is
              <b className="text-capitalize">
                &nbsp;<u>{selected}</u>
              </b>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
