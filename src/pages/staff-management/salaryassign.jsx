import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from '../../components/staff-manager/Sidebar';

function SalaryAssign() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        employeeID: "",
        name: "",
        basicamount: "",
        othours: "",
        amountperhour: "",
        month: "",
        amount: ""
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputs.employeeID || !inputs.name || !inputs.basicamount || !inputs.othours || !inputs.amountperhour || !inputs.month || !inputs.amount) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/salary/addsalary", inputs);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully added salary",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(response.data);
            navigate('/salarydetails');
        } catch (error) {
            console.error("Error adding salary:", error.message);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="container mt-5">
                <h2 className="text-center mb-4 form-title">Assign Salary</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} id="salaryForm">
                            <div className="mb-3">
                                <label htmlFor="employeeID" className="form-label">Employee ID</label>
                                <input type="text" id="employeeID" name="employeeID" onChange={handleChange} value={inputs.employeeID} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" name="name" onChange={handleChange} value={inputs.name} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basicamount" className="form-label">Basic Amount</label>
                                <input type="text" id="basicamount" name="basicamount" onChange={handleChange} value={inputs.basicamount} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="othours" className="form-label">OT Hours</label>
                                <input type="text" id="othours" name="othours" onChange={handleChange} value={inputs.othours} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amountperhour" className="form-label">Amount per OT Hour</label>
                                <input type="text" id="amountperhour" name="amountperhour" onChange={handleChange} value={inputs.amountperhour} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="month" className="form-label">Month</label>
                                <input type="text" id="month" name="month" onChange={handleChange} value={inputs.month} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input type="text" id="amount" name="amount" onChange={handleChange} value={inputs.amount} className="form-control" required />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Assign</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalaryAssign;