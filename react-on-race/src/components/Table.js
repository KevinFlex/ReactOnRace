import React from 'react'


function Table(props) {


    return (
        <table className="table striped bordered hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {props.riders.map((rider, index) => {
                    return (
                        <tr>
                            <td key={index}>{index}</td>
                            <td key={index}>{rider.firstName}</td>
                            <td key={index}>{rider.lastName}</td>
                            <td key={index}>{rider.city}</td>
                            <td key={index}>{rider.state}</td>
                        </tr>
            )
        })}
        </tbody>

        </table>

    )
}
export default Table;
