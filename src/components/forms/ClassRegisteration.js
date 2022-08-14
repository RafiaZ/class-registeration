import React, { useState } from "react";

const ClassRegisteration = () => {

  // const [name, setName] = React.useState("")
  const [id, setId] = useState("")
  const [subject, setSubject] = React.useState("")
  const [startDate, setStartDate] = React.useState("")
  const [period, setPeriod] = React.useState("")
  const [months, setMonths] = React.useState("")
  const [noOfStd, setnoOfStd] = React.useState("")
  const [message, setMessage] = React.useState("")
  console.log(subject);
  console.log(setSubject)
  // const textChangeHandler = (i) => {
  //   setEnteredText(i.target.value);
  //   //console.log(i.target.value);
  // };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/app_data", {
        method: "POST",
        body: JSON.stringify({
          subject: subject,
          startDate: startDate,
          period: period,
          months: months,
          noOfStd: noOfStd
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setId("")
        setSubject("")
        setPeriod("")
        setStartDate("")
        setMonths("")
        setnoOfStd("")
        setMessage("Sttudent created successfully");
      } else {
        setMessage("Some error occured");
        console.log(res.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (


    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="shadow p-3  bg-body rounded">
                <div className="card-header">
                  <h3>Class Registeration</h3>
                </div>
                <div className="card-body">
                  <div className="form-group my-2">
                    <label htmlFor="name">Class ID</label>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      placeholder="Enter Class ID"

                    />
                  </div>
                  <div className="form-group my-2">

                    <label htmlFor="subject">Subject</label>
                    <input
                      className="form-control"
                      name="subject"
                      type="text"
                      placeholder="Enter Subject Name"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}

                    />
                  </div>

                  <div className="form-group my-2">
                    <label htmlFor="start_date">Starting Date</label>
                    <input
                      className="form-control"
                      name="start_date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-2">
                    <label>Class Period</label>
                    <div className="input-group mb-3">
                      <input
                        name="shareholder_percent"
                        className="form-control undefined"
                        id="class_period"
                        placeholder="Enter Class Period in Months"
                        type="number"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                          Months
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="no_of_students">No of Students</label>
                    <input
                      className="form-control"
                      name="no_of_students"
                      type="number"
                      placeholder="Enter Number of Students in this class"
                      value={noOfStd}
                      onChange={(e) => setnoOfStd(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header class">
                <h5>Students</h5>
              </div>
              <div className="card-body">
                <div className="w-100">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Student Name</th>
                        <th>Father Name</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5>Hint:</h5>
          <ul>
            <li>
              Provide input fields for each row according to the columns execpt
              student id (which is auto generated).
            </li>
            <li>
              No of table rows = no of students entered in the above field
            </li>
          </ul>
        </div>
        <div className="row">
          <input className="btn btn-dark" type="submit" value="Submit" />
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default ClassRegisteration;
