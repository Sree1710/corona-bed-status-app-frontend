import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewBed = () => {
    const [bedData, setData] = useState(
        { "data": { "regional": [] } }
    )

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get("https://api.rootnet.in/covid19-in/hospitals/beds").then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Bed Status</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">State</th>
                                            <th scope="col">Rural Hospitals</th>
                                            <th scope="col">No: Of Beds(Rural)</th>
                                            <th scope="col">Urban Hospitals</th>
                                            <th scope="col">No: Of Beds(Urban)</th>
                                            <th scope="col">Total Hospitals</th>
                                            <th scope="col">Total Beds</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="spinner-grow text-warning" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : <tbody>
                                        {bedData.data.regional.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.state}</th>
                                                    <td>{value.ruralHospitals}</td>
                                                    <td>{value.ruralBeds}</td>
                                                    <td>{value.urbanHospitals}</td>
                                                    <td>{value.urbanBeds}</td>
                                                    <td>{value.totalHospitals}</td>
                                                    <td>{value.totalBeds}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBed