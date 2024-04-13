import React, { useState } from "react";

const Accountform = () => {
    const [userName, setUserName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [nGuest, setNoOfGuest] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const account = { userName, contactNo, date, time, category, nGuest };

        const response = await fetch('/api/accounts', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            setUserName('');
            setContactNo('');
            setDate('');
            setTime('');
            setCategory('');
            setNoOfGuest('');
            setError(null);
            console.log('New account added', json);
        }
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '8px',
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new reservation</h3>

            <label>User Name :</label>
            <input
                type="text"
                style={inputStyle}
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
            />

            <label>Contact No :</label>
            <input
                type="text"
                style={inputStyle}
                onChange={(e) => setContactNo(e.target.value)}
                value={contactNo}
            />

            <label>Date :</label>
            <input
                type="text"
                style={inputStyle}
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />

            <label>Time :</label>
            <input
                type="text"
                style={inputStyle}
                onChange={(e) => setTime(e.target.value)}
                value={time}
            />

            <label>Category :</label>
            <input
                type="text"
                style={inputStyle}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />

            <label>No Of Guest :</label>
            <input
                type="number"
                style={inputStyle}
                onChange={(e) => setNoOfGuest(e.target.value)}
                value={nGuest}
            />

            <button style={buttonStyle}>Add</button>
            {error && <div className="error"> {error} </div>}
        </form>
    );
};

export default Accountform;
