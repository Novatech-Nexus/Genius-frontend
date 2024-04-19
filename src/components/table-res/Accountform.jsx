import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import book6 from '../../assets/table-manage/book6.jpg';
import axios from "axios";

const AccountForm = () => {
    const [userName, setUserName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [tNumber, setTableNumber] = useState('');
    const [nGuest, setNoOfGuest] = useState('');
    const [error, setError] = useState(null);

    const sendData =  (e) => {
        e.preventDefault();

        const newReservation = {
            userName,
            contactNo,
            date,
            time,
            category,
            tNumber,
            nGuest
        };

        axios.post('http://localhost:5050/Reservation/add' , newReservation).then(()=>{
            alert("reservation added")

            setUserName("");
            setContactNo("")
            setDate("")
            setTime("")
            setCategory("")
            setTableNumber("")
            setNoOfGuest("")
            
        })
       
        .catch((err)=>{
            alert(err)
        })

    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
                backgroundImage: `url(${book6})`,
                backgroundSize: 'cover',
                minHeight: '100vh',
                backgroundColor: "#e7e7e7",
            }}
        >
            <Grid item xs={12} sm={8} md={6}>
                <Paper
                    elevation={3}
                    style={{
                        padding: 20,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Reservation Form
                    </Typography>
                    <form onSubmit={sendData}>
                        <TextField
                            label="User Name"
                            variant="outlined"
                            fullWidth
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Contact No"
                            variant="outlined"
                            fullWidth
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Date"
                            variant="outlined"
                            type="date"
                            fullWidth
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Time"
                            variant="outlined"
                            type="time"
                            fullWidth
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Category"
                            variant="outlined"
                            fullWidth
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Table Number"
                            variant="outlined"
                            fullWidth
                            value={tNumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="No Of Guests"
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={nGuest}
                            onChange={(e) => setNoOfGuest(e.target.value)}
                            required
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            style={{ marginTop: 20 }}
                        >
                            Submit
                        </Button>
                        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AccountForm;








// const Accountform = () => {
//     const [userName, setUserName] = useState('');
//     const [contactNo, setContactNo] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [category, setCategory] = useState('');
//     const [nGuest, setNoOfGuest] = useState('');
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const account = { userName, contactNo, date, time, category, nGuest };

//         const response = await fetch('/api/accounts', {
//             method: 'POST',
//             body: JSON.stringify(account),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const json = await response.json();

//         if (!response.ok) {
//             setError(json.error);
//         } else {
//             setUserName('');
//             setContactNo('');
//             setDate('');
//             setTime('');
//             setCategory('');
//             setNoOfGuest('');
//             setError(null);
//             console.log('New account added', json);
//         }
//     };

//     const inputStyle = {
//         marginBottom: '10px',
//         padding: '8px',
//         width: '100%',
//         boxSizing: 'border-box',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//     };

//     const buttonStyle = {
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//     };

//     return (
//         <form className="create" onSubmit={handleSubmit}>
//             <h3>Add a new reservation</h3>

//             <label>User Name :</label>
//             <input
//                 type="text"
//                 style={inputStyle}
//                 onChange={(e) => setUserName(e.target.value)}
//                 value={userName}
//             />

//             <label>Contact No :</label>
//             <input
//                 type="text"
//                 style={inputStyle}
//                 onChange={(e) => setContactNo(e.target.value)}
//                 value={contactNo}
//             />

//             <label>Date :</label>
//             <input
//                 type="text"
//                 style={inputStyle}
//                 onChange={(e) => setDate(e.target.value)}
//                 value={date}
//             />

//             <label>Time :</label>
//             <input
//                 type="text"
//                 style={inputStyle}
//                 onChange={(e) => setTime(e.target.value)}
//                 value={time}
//             />

//             <label>Category :</label>
//             <input
//                 type="text"
//                 style={inputStyle}
//                 onChange={(e) => setCategory(e.target.value)}
//                 value={category}
//             />

//             <label>No Of Guest :</label>
//             <input
//                 type="number"
//                 style={inputStyle}
//                 onChange={(e) => setNoOfGuest(e.target.value)}
//                 value={nGuest}
//             />

//             <button style={buttonStyle}>Add</button>
//             {error && <div className="error"> {error} </div>}
//         </form>
//     );
// };

// export default Accountform;
