import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Paper,
    Typography,
    MenuItem
} from "@mui/material";
import axios from "axios";
import book6 from '../../assets/table-manage/book6.jpg';

const AccountForm = () => {
    const [userName, setUserName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [tNumber, setTableNumber] = useState('');
    const [nGuest, setNoOfGuest] = useState('');
    const [error, setError] = useState(null);

    const timeOptions = [
        { value: '6.30am - 10.30am', label: '6.30am - 10.30am' },
        { value: '12.00pm - 3.30pm', label: '12.00pm - 3.30pm' },
        { value: '4.00pm - 6.30pm', label: '4.00pm - 6.30pm' },
        { value: '7.30pm - 11.30pm', label: '7.30pm - 11.30pm' }
    ];

    const categoryOptions = [
        { value: 'Couple', label: 'Couple' },
        { value: 'Family/Friends', label: 'Family/Friends' },
        { value: 'Business Meeting', label: 'Business Meeting' }
    ];

    const tableNumberOptions = {
        'Couple': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
        'Family/Friends': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'],
        'Business Meeting': ['B1', 'B2', 'B3', 'B4', 'B5']
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        // Reset tNumber when category changes
        setTableNumber('');
    };

    const numberOfGuestsOptions = Array.from({ length: 15 }, (_, index) => index + 1);

    const sendData = (e) => {
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

        axios.post(`http://localhost:5050/Reservation/addtr`, newReservation)
            .then(() => {
                alert("Reservation added");
                resetForm();
            })

                
                // Reset form fields after successful submission
                .catch((err) => {
                    if (err.response && err.response.data && err.response.data.message) {
                        alert(err.response.data.message); // Display backend error message
                    } else {
                        alert("Reservation failed. Please try again."); // Generic error message
                    }
                });
        };
    
        const resetForm = () => {
            setUserName('');
            setContactNo('');
            setDate('');
            setTime('');
            setCategory('');
            setTableNumber('');
            setNoOfGuest('');
            setError(null);
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
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
                            onChange={(e) => {
                                // Restrict input to maximum of 10 characters
                                const inputContactNo = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                                if (inputContactNo.length <= 10) {
                                    setContactNo(inputContactNo); // Update state if within limit
                                }
                            }}
                            required
                            margin="normal"
                            inputProps={{ maxLength: 10 }} // Set maximum length to 10 characters
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
                            
                        />
                        <TextField
                            label="Time"
                            variant="outlined"
                            fullWidth
                            select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            margin="normal"
                        >
                            {timeOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Category"
                            variant="outlined"
                            fullWidth
                            select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            margin="normal"
                        >
                            {categoryOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {category && (
                            <TextField
                                label="Table Number"
                                variant="outlined"
                                fullWidth
                                select
                                value={tNumber}
                                onChange={(e) => setTableNumber(e.target.value)}
                                required
                                margin="normal"
                            >
                                {tableNumberOptions[category]?.map((number) => (
                                    <MenuItem key={number} value={number}>
                                        {number}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                        <TextField
                            label="No Of Guests"
                            variant="outlined"
                            fullWidth
                            select
                            value={nGuest}
                            onChange={(e) => setNoOfGuest(e.target.value)}
                            required
                            margin="normal"
                        >
                            {numberOfGuestsOptions.map((guests) => (
                                <MenuItem key={guests} value={guests}>
                                    {guests}
                                </MenuItem>
                            ))}
                        </TextField>
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
