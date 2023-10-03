import React, { useState } from 'react'
import Header from './Header'

const AddBed = () => {

const [inputField,setInputField]=useState(
    {state:"",ruralHospitals:"",ruralBeds:"",urbanHospitals:"",urbanBeds:""}
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
                        <h1>Add Bed Status</h1>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">State</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="state" value={inputField.state} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Rural Hospitals</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="ruralHospitals" value={inputField.ruralHospitals} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">No: Of Beds(Rural)</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="ruralBeds" value={inputField.ruralBeds} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Urban Hospitals</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="urbanHospitals" value={inputField.urbanHospitals} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">No: Of Beds(Urban)</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="urbanBeds" value={inputField.urbanBeds} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default AddBed