import React, { Component } from 'react';
class Employe extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        employe: [
            {
                name: "rammohan",
                company: "livwell",
                salary: 85000,
            },
            {
                name: "praveen",
                company: "microlan",
                salary: 60000,
            },
            {
                name: "deepa",
                company: "IBM",
                salary: 60000,
            },
            {
                name: "bhargavi",
                company: "none",
                salary: 0,
            },
            {
                name: "vijay",
                company: "amarraja",
                salary: 30000,
            },
        ]

    }
    deleteemploye = (employe) => {
        let filteremploye = this.state.employe.filter(el => el != employe)
        this.setState({ employe: filteremploye })
    }
    render() {
        return (
            <div>
                <h1>Total n.o of employe {this.state.employe.length}</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">s.no</th>
                            <th scope="col">name</th>
                            <th scope="col">company</th>
                            <th scope="col">salary</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {this.state.employe.map((el, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.company}</td>
                                    <td>{el.salary}</td>
                                    <td><button type="button"  onClick={()=> this.deleteemploye(el)}class="btn btn-primary">Delete</button></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        )
    }


}


export default Employe;