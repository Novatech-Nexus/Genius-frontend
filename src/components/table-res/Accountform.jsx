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
import Swal from "sweetalert2";

const AccountForm = ({history}) => {
    const [userName, setUserName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [tNumber, setTableNumber] = useState('');
    const [nGuest, setNoOfGuest] = useState('');
    const [error, setError] = useState(null);
 
    //time optins
    const timeOptions = [
        { value: '6.30am - 10.30am', label: '6.30am - 10.30am' },
        { value: '12.00pm - 3.30pm', label: '12.00pm - 3.30pm' },
        { value: '4.00pm - 6.30pm', label: '4.00pm - 6.30pm' },
        { value: '7.30pm - 11.30pm', label: '7.30pm - 11.30pm' }
    ];

    //category optin
    const categoryOptions = [
        { value: 'Couple', label: 'Couple' },
        { value: 'Family/Friends', label: 'Family/Friends' },
        { value: 'Business Meeting', label: 'Business Meeting' }
    ];

    //table number oftion
    const tableNumberOptions = {
        'Couple': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8','C9' ,'C10'],
        'Family/Friends': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8','F9' , 'F10'],
        'Business Meeting': ['B1', 'B2', 'B3', 'B4', 'B5']
    };

    //email validation
    const numberOfGuestsOptions = Array.from({ length: 15 }, (_, index) => index + 1);
    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    //didn't wort pass date
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Add leading zero if month or day is less than 10
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };

    const sendData = (e) => {
        e.preventDefault();

        const newReservation = {
            userName,
            contactNo,
            email,
            date,
            time,
            category,
            tNumber,
            nGuest
        };

        axios.post(`http://localhost:5050/Reservation/addtr`, newReservation)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Reservation added',
                    showConfirmButton: false
                    
                });
                
            })
            .catch((err) => {
                let errorMessage = "Reservation failed. Please try again.";
                if (err.response && err.response.status === 400 && err.response.data.message === 'This table is already booked for the selected date and time') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Table Already Booked',
                        text: 'This table is already booked for the selected date and time.'
                    });

                }
                else
                {Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorMessage
                });}
            });
    };
    
    const resetForm = () => {
        setUserName('');
        setContactNo('');
        setEmail('');
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
                    <Typography variant="h4" align="center" gutterBottom fontFamily= 'CustomFont'>
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
                                const inputContactNo = e.target.value.replace(/\D/g, '');
                                if (inputContactNo.length <= 10) {
                                    setContactNo(inputContactNo);
                                }
                            }}
                            required
                            margin="normal"
                            inputProps={{ maxLength: 10 }}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            margin="normal"
                            error={!!email && !isValidEmail(email)} // Checking if email is present and not valid
                            helperText={email && !isValidEmail(email) ? 'Please enter a valid email address' : ''}
                            inputProps={{ maxLength: 100 }} // Adjust maxLength as needed
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
                            inputProps={{ min: getCurrentDate() }}
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
