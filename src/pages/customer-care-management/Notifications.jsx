import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import NavbarManager from '../../components/customer-care/customer-care-navbar.jsx';

export default function () {
    const navigate = useNavigate();
    const [unreadNotifications, setUnreadNotifications] = useState([]);

    useEffect(() => {
        fetchUnreadNotifications();
    }, []);

    const fetchUnreadNotifications = async () => {
        try {
            const response = await axios.get('http://localhost:5050/api/contact/notifications/unread');
            setUnreadNotifications(response.data || []); // Ensure response.data is an array or set it to an empty array
        } catch (error) {
            console.error('Error fetching unread notifications:', error);
            setUnreadNotifications([]); // Set unreadNotifications to an empty array in case of an error
        }
    };

    const handleNotificationClick = async (notificationId) => {
        try {
            await axios.put(`http://localhost:5050/api/contact/notifications/${notificationId}/read`);
            fetchUnreadNotifications();
            // Handle navigation or other actions related to the clicked notification
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    return (
        <div className='contact-main-body'>
            <NavbarManager/>
                <header className='contact_title'>
                    <h2>Unread Notifications</h2>
                </header>
                <div className="contact-artical-body">
                    <div className='feedback-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {unreadNotifications.map((notification, index) => (
                            <div key={index} className='feedback-item' style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontWeight: 'bold', marginBottom: '5px' ,marginLeft:'30px'}}>Notification received on {new Date().toLocaleDateString()}</div>
                                <p style={{ marginBottom: '5px' }}>{notification.subject}</p>
                                <p style={{ marginBottom: '5px' }}>{notification.name}</p>
                                <p style={{ marginBottom: '5px' }}>{notification.email}</p>
                                <p style={{ marginBottom: '5px' }}>{notification.message}</p>
                                <div style={{ alignSelf: 'flex-end', marginTop: 'auto', fontSize: '15px', fontStyle: 'italic' }}>
                                    <label style={{ fontWeight: 'bold' }}>
                                        <input type="checkbox" onChange={() => handleNotificationClick(notification._id)} />
                                        Make it as read
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ paddingTop: '40px', display: 'flex', justifyContent: 'space-between', maxWidth: '800px', width: '100%', margin: 'auto' }}>
                        <Button variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
                        {/* Use regular anchor tag with the target="_blank" attribute */}
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Button variant="outline-dark">Replied to notifications</Button>
                        </a>
                    </div>
                </div>
            
                <br/>
        <Footer/>
        </div>
    )
}
