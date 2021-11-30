import React, { useRef, useState } from 'react';

export default function Employee() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

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
    setShowMsg(false);
    setDeleteShowMsg(true);
  };

  return (
    <div className="grid">
      <div className="row">
        <div className="col-12">Employee Details</div>
      </div>
      {/* First Name */}
      <div className="row">
        <div className="col-6 my-s">
          <label>FirstName</label>
          <input ref={firstNameRef} type="text"></input>
        </div>
      </div>
      {/* Last NAme */}
      <div className="row">
        <div className="col-6 my-s">
          <label>Last Name</label>
          <input ref={lastNameRef} type="text"></input>
        </div>
      </div>
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
             ${lastNameRef.current.value}`}</div>
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
