import React, { useRef, useState } from 'react';

export default function Employee() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateRef = useRef();
  const expRef = useRef();

  const [firtsName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [showMsg, setShowMsg] = useState(false);
  const [deleteshowMsg, setDeleteShowMsg] = useState(false);

  const getEmployeeDetails = () => {
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
    setShowMsg(true);
  };
  const editEmployeeDetails = () => {
    firstNameRef.current.value = firtsName;
    lastNameRef.current.value = lastName;
    setDeleteShowMsg(false);
  };
  const deleteEmployee = () => {
    window.confirm('Are you sure want to delete?');
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    dateRef.current.value = '';
    expRef.current.value = '';
    setShowMsg(false);
    setDeleteShowMsg(true);
  };

  return (
    <div className="grid">
      <div className="row">
        <div className="col-12">Employee Details</div>
      </div>
      <br />
      {/* First Name */}
      <div className="row">
        <div className="col-6 my-s">
          <label>FirstName</label>
          <input ref={firstNameRef} type="text"></input>
        </div>
      </div>
      <br />
      {/* Last NAme */}
      <div className="row">
        <div className="col-6 my-s">
          <label>Last Name</label>
          <input ref={lastNameRef} type="text"></input>
        </div>
      </div>
      <br />
      {/* Dob */}
      <div className="row">
        <div className="col-6 my-s">
          <label>DOB</label>
          <input ref={dateRef} type="date"></input>
        </div>
      </div>
      <br />
      {/* Experience */}
      <div className="row">
        <div className="col-6 my-s">
          <label>Experience</label>
          <select ref={expRef} type="select">
            <option>4+</option>
            <option>6+</option>
            <option>8+</option>
            <option>10+</option>
          </select>
        </div>
      </div>
      <br />
      <div className="row">
        <button onClick={getEmployeeDetails} name="Add" type="submit">
          Add
        </button>
        <button onClick={editEmployeeDetails} type="submit">
          Edit
        </button>
        <button onClick={deleteEmployee} type="submit">
          Delete
        </button>
      </div>
      <div>
        {showMsg && (
          <div>{`you have saved 
             ${firstNameRef.current.value}
             ${lastNameRef.current.value}
             ${dateRef.current.value}
             ${expRef.current.value}`}</div>
        )}
        {deleteshowMsg && (
          <div>{`you have deleted the record
             ${firstNameRef.current.value}
             ${lastNameRef.current.value}`}</div>
        )}
      </div>
    </div>
  );
}
