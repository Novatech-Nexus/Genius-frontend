import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 
import { useNavigate } from "react-router-dom";
import '../../styles/CustomerCare.css';
import { prepareBarChartData, preparePieChartData} from '../../components/customer-care/ChartData.jsx';
import DataFeedbackTable from '../../components/customer-care/DataFeedbackTable.jsx';
import DataAverageRatingsTable from '../../components/customer-care/DataAverageRatingsTable.jsx';
import Footer from '../../components/Footer.jsx';
import NavbarManager from '../../components/customer-care/customer-care-navbar.jsx';

export default function FeedbackDataAnalysis() {
    const [feedbackData, setFeedbackData] = useState([]);
    const barChartRef = useRef(null);
    const pieChartRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const response = await axios.get('http://localhost:5050/api/feedback/getFeedback');
                setFeedbackData(response.data);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            }
        };

        fetchFeedbackData();
    }, []);

    useEffect(() => {
        if (barChartRef.current && barChartRef.current.chartInstance) {
            barChartRef.current.chartInstance.destroy();
        }
        if (pieChartRef.current && pieChartRef.current.chartInstance) {
            pieChartRef.current.chartInstance.destroy();
        }
    }, [feedbackData]);

    useEffect(() => {
        // Register the category scale
        Chart.register({ 
            id: 'category',
            type: 'category'
        });
    }, []);

    const componentsRef = useRef();
    const handleDownload = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: "Feedback Report",
    });

    const barChartData = prepareBarChartData(feedbackData);
    const pieChartData = preparePieChartData(feedbackData);

    // Custom options for Pie chart
    const pieChartOptions = {
        maintainAspectRatio: false,        // Do not maintain aspect ratio
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
        },
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50,
            },
        },
    };

    return (
        <div className='feedback-services-body'>
            <NavbarManager/>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom:"20px"}}>
                <div className='d-flex' style={{ justifyContent: "space-between", width: '80%' }}>
                    <Button className='report-btn' variant="outline-dark" onClick={handleDownload}>Generate report</Button>
                    <Button className='report-btn' style={{width:'20%'}} variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
                </div>
            </div>

            <div ref={componentsRef}>
                <header className='feedback-services-title'>
                    <h2>Customer Service Feedback Report.</h2>
                </header>

                <DataFeedbackTable feedbackData={feedbackData} />

                <br /><br />

                <h4 style={{color:'gray'}} className='feedback-services-cont'>Bar Chart: Customer Experience Ratings</h4>
                <div style={{ width: '80%', height: '500px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                    <Bar ref={barChartRef} data={barChartData} />
                </div>

                <br /><br />

                <DataAverageRatingsTable feedbackData={feedbackData} />

                <br /><br />
                
                <h4 style={{color:'gray'}} className='feedback-services-cont'>Pie Chart: Average Ratings Of Each Section.</h4>
                <div style={{ width: '80%', height: '600px',margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Pie ref={pieChartRef} data={pieChartData} options={pieChartOptions} />
                </div>
            </div>
            <br/>
        <Footer/>
        </div>
    );
}
