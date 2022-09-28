import React, { useState } from "react";
import List from "./List";
function App() {
  const [list, setList] = useState([]);
  const [data, setData] = useState({});
  const handleInput = (e) => {
    const { value } = e.target;
    setData({ desc: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let lastId = 0;
    if (list.length > 0) {
      list.sort((a, b) => a.id - b.id);
      lastId = list.at(-1).id + 1;
    } else {
      lastId += 1;
    }
    setList([...list, { ...data, id: lastId }]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    setList(list.filter((e) => e.id !== id));
  };

  const editItem = (e) => {
    let el = list.find((a) => a.id === e.id);
    let temp = [...list];
    let index = temp.indexOf(el);
    el.desc = e.desc;
    temp.splice(index, 1, el);
    setList(temp);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">ToDo List</h1>
      <div className="col-12 mt-3">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                defaultValue=""
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
            <div className="col-3">
              <button className="btn btn-success w-100">ADD</button>
            </div>
          </div>
        </form>
        <div className="col-12">
          <div className="row">
            {list.map((index, key) => (
              <List
                key={key}
                desc={index.desc}
                id={index.id}
                handleDelete={handleDelete}
                editItem={editItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
