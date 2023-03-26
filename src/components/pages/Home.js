import { React, useState, useEffect } from "react";

const Home = () => {
  const [arrayOfInputs, setArrayOfInputs] = useState(['']);
  const [inputFeild, setInputFeild] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [data, setData] = useState(['']);


  const saveTheValue = (e) => {
    setArrayOfInputs(arrayOfInputs => [...arrayOfInputs, inputFeild])

    console.log(arrayOfInputs, 'this is array')
    setShowInput(true);

  }

  const inputValue = (e) => {
    setInputFeild(e.target.value);
  }

  useEffect(
    fetch("https://gateway.pinata.cloud/ipfs/QmQ782Gr3zZMNUrg6jcZhUUR837edoixv6XjkZjAjsordi")
    .then((res) => res.json())
    .then(resp => {
      setData(resp);
      console.log(resp)
      console.log(data, 'this is dat')
      }), []
 
  )
  return (


    <div className="container my-5">
      <div className="row">
        <div className="col-md-10">

          <div className="form-group my-2">
            <label htmlFor="name">Input</label>
            <input
              className="form-control"
              value={inputFeild}
              name="name"
              type="text"
              placeholder="Enter Something"
              onChange={inputValue}
            />
          </div>


        </div>
        {data.map((d)=><div>{d.name}
        <p>{d.symbol}</p>
        <p>{d.description}</p></div>)}

        {showInput && (<p>{inputFeild}</p>)}
        <div>
          {arrayOfInputs.map((arr)=><li>{arr}</li> )}
        </div>

        <div className="col-md-2">
          <div className="form-group my-2">
            <input type="submit" className="btn btn-dark w-100 my-4" onClick={(e) => saveTheValue()} />
          </div>
        </div>

      </div>
    </div>

  );
};

export default Home;
