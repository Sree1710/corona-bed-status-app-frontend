import React, { useState } from 'react'
import Header from './Header'

const SearchBed = () => {
    const [inputField,setInputField]=useState(
        {state:""}
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }
  return (
    <div>
     <Header/>   
     <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>Search Bed Status</h1>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">State</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="state" value={inputField.state} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-danger">Search</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default SearchBed