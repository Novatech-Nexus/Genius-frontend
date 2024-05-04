import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Chart from 'chart.js/auto';
import { jsPDF } from 'jspdf';
import NavbarManager from '../../components/order/orderManagerNavbar.jsx';
import Footer from '../../components/Footer.jsx';

const Statistics = () => {
  const [statistics, setStatistics] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/orderCart/getStatistics");
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  useEffect(() => {
    if (statistics) {
      const ctx = chartRef.current.getContext('2d');

      // Ensure existing chart is destroyed before creating a new one
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: statistics.totalItemsSold.map(item => item._id),
          datasets: [{
            label: 'Total Quantity Sold',
            data: statistics.totalItemsSold.map(item => item.totalQuantity),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Quantity Sold'
              }
            }
          }
        }
      });
    }
  }, [statistics]);

  const downloadReport = () => {
    if (!statistics) return;

    const doc = new jsPDF();

    // Add title to PDF
    doc.text("Statistics Report", 20, 20);

    // Convert table to HTML and add to PDF
    const table = document.querySelector('table');
    if (table) {
      doc.autoTable({ html: table });
    }

    // Save the chart as an image and add to PDF
    if (chartRef.current) {
      const imageData = chartRef.current.toDataURL("image/png");
      doc.addImage(imageData, 'PNG', 20, 120, 160, 90); // Adjust position and size as needed
    }

    // Save the PDF file
    doc.save("statistics_report.pdf");
  };

  if (!statistics) {
    return <div>Loading...</div>;
  }

  return (
    <><NavbarManager /><div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '20px',
      minHeight: '100vh'
    }}>
      <div style={{
        width: '80%',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        padding: '20px',
        marginBottom: '40px' // Increased margin bottom for more spacing
      }}>
        <h1>Order Management Report</h1>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px'
        }}>
          <thead>
            <tr>
              <th style={{
                padding: '12px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd'
              }}>Food Item</th>
              <th style={{
                padding: '12px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd'
              }}>Total Quantity Sold</th>
              <th style={{
                padding: '12px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd'
              }}>Income (Rs)</th>
            </tr>
          </thead>
          <tbody>
            {statistics.totalItemsSold.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item._id}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.totalQuantity}</td>
                {/* Find corresponding income for the food item */}
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {statistics.incomeByFoodItem.find((incomeItem) => incomeItem._id === item._id)?.incomeByFoodItem || 0}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2" style={{
                padding: '12px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd',
                textAlign: 'right'
              }}><strong>Total Income</strong></td>
              <td style={{
                padding: '12px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd'
              }}><strong>{statistics.totalIncome[0].totalIncome}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{
        width: '80%',
        maxWidth: '600px',
        marginBottom: '100px', // Increased margin bottom for more spacing
        marginTop: '30px',
      }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <button 
        onClick={downloadReport} 
        style={{ marginTop: '10px', marginBottom: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Download Report
      </button>
    </div>
    <Footer/>
    </>
  );
};

export default Statistics;
