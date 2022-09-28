import React, { useState } from "react";

function List({ id, desc, handleDelete, editItem }) {
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});
  const handleCheck = () => {
    setCheck(!check);
  };
  const handleEdit = () => {
    setEdit(!edit);
    setData({ id, desc });
  };

  const handleSave = () => {
    setEdit(!edit);
    editItem(data);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setData({ ...data, desc: value });
  };

  return (
    <div className="col-12 mt-2">
      <div className="alert alert-primary p-3">
        <div className="row">
          <div className="col-8 mt-2">
            {edit ? (
              <input
                type="text"
                className="form-control"
                defaultValue={desc}
                onChange={(e) => handleInput(e)}
              ></input>
            ) : (
              <p style={{ textDecoration: check ? "line-through" : "none" }}>
                {desc}
              </p>
            )}
          </div>
          <div className="col-4">
            <div className="btn-group gap-2 w-100">
              <button className="btn btn-warning" onClick={() => handleCheck()}>
                Check
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(id)}
              >
                X
              </button>
              {edit ? (
                <button
                  className="btn btn-primary"
                  onClick={() => handleSave()}
                >
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(id, desc)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
