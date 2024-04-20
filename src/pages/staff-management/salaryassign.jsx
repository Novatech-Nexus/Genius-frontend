import React, { useState } from 'react';
import Header from '../../components/inventory/header';
import Sidebar from '../../components/staff-manager/Sidebar';

function SalaryAssign() {
    const [employeeID, setEmployeeID] = useState('');
    const [name, setName] = useState('');
    const [basicAmount, setBasicAmount] = useState('');
    const [otHours, setOtHours] = useState('');
    const [amountPerOtHour, setAmountPerOtHour] = useState('');
    const [month, setMonth] = useState('');
    const [netSalary, setNetSalary] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const otSalary = parseFloat(otHours) * parseFloat(amountPerOtHour);
        const totalSalary = parseFloat(basicAmount) + otSalary;
        setNetSalary(totalSalary);
    };

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="container mt-5">
                <h2 className="text-center mb-4 form-title">Assign Salary</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} id="employeeForm">
                            <div className="mb-3">
                                <label htmlFor="employeeID" className="form-label">Employee ID</label>
                                <input type="text" id="employeeID" name="employeeID" className="form-control" value={employeeID} onChange={(event) => setEmployeeID(event.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" id="firstName" name="firstName" className="form-control" value={name} onChange={(event) => setName(event.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="basicAmount" className="form-label">Basic Amount</label>
                                <input type="text" id="basicAmount" name="basicAmount" className="form-control" value={basicAmount} onChange={(event) => setBasicAmount(event.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="otHours" className="form-label">OT Hours</label>
                                <input type="text" id="otHours" name="otHours" className="form-control" value={otHours} onChange={(event) => setOtHours(event.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amountPerOtHour" className="form-label">Amount per OT Hour</label>
                                <input type="text" id="amountPerOtHour" name="amountPerOtHour" className="form-control" value={amountPerOtHour} onChange={(event) => setAmountPerOtHour(event.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="month" className="form-label">Month</label>
                                <input type="text" id="month" name="month" className="form-control" value={month} onChange={(event) => setMonth(event.target.value)} required />
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
