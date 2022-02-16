import React from 'react';
const AddForm = ({ addName }) => {
  const nameInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = nameInput.current;
    nameInput.current.value = '';
    if (value) {
      addName(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 p-2">
      <h4>Add Participant</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameInput}
          className="form-control form-control-sm"
        />
      </div>
      <div className="d-flex justify-content-end">
        <input
          type="submit"
          className="btn btn-primary btn-sm mt-3"
          value="Add"
        />
      </div>
    </form>
  );
};

export default AddForm;
