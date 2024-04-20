import React from "react";
import { Link } from 'react-router-dom'; 
import img7 from '../../assets/catering/img7.jpg';

function SeaCeleb() {

    const backgroundStyle = {
        backgroundImage: `url(${img7})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    const inlineStyles = {
        div: {
            maxWidth: 'auto',
            margin: '0 auto',
            padding: '5px',
        },
        coldesign: {
            margin: 'auto',
        },
        h1: {
            backgroundColor: '#2D5A27',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            color: 'white',
            padding: '10px',
            textAlign:'center'
        },
        p: {
            textAlign: 'justify',
            fontSize: '18px',
            fontWeight: 'bold',
        },
        imgOne: {
            width: '230px',
            height: '200px',
            marginRight: '20px',
        },
        customButton: {
            backgroundColor: '#760203',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '15px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '8px',
            width: '250px',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '50px',
            marginBottom: '50px',
        },
        td: {
            verticalAlign: 'top',
        },
        h2: {
            backgroundColor: '#FFD300',
            padding: '5px',
            maxWidth: '1400px',
            marginTop: '20px',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            color: 'black',
            textAlign:'center'
        },
        ul: {
            textAlign: 'left',
            fontWeight: 'bold',
            listStyleType: 'circle',
        },
        li: {
            margin: '8px 0',
            paddingLeft: '20px',
            marginLeft: '20px',
        },
        strong: {
            textDecoration: 'underline',
            marginTop: '20px',
        },
    };

    return (
        <div style={{ ...backgroundStyle, ...inlineStyles.div }}>
            <h1 style={inlineStyles.h1}>Seasonal Celebration</h1>
            <p style={{ ...inlineStyles.p, marginTop: '20px' }}>Welcome to Genius Restaurant's Seasonal Celebration Catering Service! At Genius, we believe in crafting unforgettable culinary experiences tailored to the essence of each season. Our passion for exquisite flavors, combined with the freshest seasonal ingredients, ensures that every event we cater is a masterpiece of taste and refinement. Whether you're planning a cozy winter gathering, a vibrant spring soirée, a sun-kissed summer affair, or a rich autumn feast, our seasoned team is dedicated to elevating your celebration to new heights. From elegant corporate functions to intimate family gatherings, let Genius Restaurant's Seasonal Celebration Catering Service transform your event into an unforgettable culinary journey.</p>
            <h2 style={inlineStyles.h2}>Menu</h2>
            <table style={{ ...inlineStyles.table, marginTop: '20px' }}>
                <tr>
                    <td><Link to="/seacelMenu/#morning"><button type="button" style={inlineStyles.customButton}>Morning Functions</button></Link></td>
                    <td><Link to="/seacelMenu/#afternoon"><button type="button" style={inlineStyles.customButton}>Afternoon Functions</button></Link></td>
                    <td><Link to="/seacelMenu/#evening"><button type="button" style={inlineStyles.customButton}>Evening Functions</button></Link></td>
                    <td><Link to="/seacelMenu/#night"><button type="button" style={inlineStyles.customButton}>Night Functions</button></Link></td>
                </tr>
            </table>

            <p style={inlineStyles.p}>Seasonal Celebration catering specializes in providing genius catering services that elevate any seasonal event or celebration. Our special services are designed to bring creativity, flavor, and excellence to every occasion. Here's a brief explanation of what sets us apart:</p>
            <ul style={inlineStyles.ul}>
                <li>Customized Menus: We curate menus tailored to the specific season, incorporating fresh, seasonal ingredients to showcase the flavors of the moment. Whether it's a spring brunch, a summer barbecue, a fall harvest feast, or a winter holiday gala, our menus reflect the essence of the season.</li>
                <li>Creative Presentation: Our culinary team doesn't just create delicious dishes; they craft culinary works of art. From elegantly plated hors d'oeuvres to stunning buffet displays, every dish is presented with creativity and flair, adding an extra touch of magic to your event.</li>
                <li>Innovative Cuisine: We pride ourselves on pushing the boundaries of traditional catering with innovative cuisine that surprises and delights. Our chefs are constantly experimenting with new flavors, techniques, and culinary trends to ensure that every bite is a memorable experience.</li>
                <li>Attention to Detail: From the first consultation to the final clean-up, we pay meticulous attention to every detail to ensure a seamless and stress-free catering experience. Our team is committed to providing exceptional service at every step of the process, allowing you to relax and enjoy your celebration to the fullest.</li>
                <li>Personalized Service: We understand that every event is unique, which is why we offer personalized service to meet your specific needs and preferences. Whether you're planning an intimate gathering or a grand soiree, we'll work closely with you to create a custom catering package that exceeds your expectations.</li>
            </ul>
            <p style={inlineStyles.p}>Overall, Seasonal Celebration catering's special services combine culinary expertise, creative flair, and exceptional service to make your seasonal celebration truly unforgettable.</p>

            <table style={{ ...inlineStyles.table, marginTop: '20px' }}>
                <tr>
                    <td><Link to="/orderplace"><button type="button" style={inlineStyles.customButton}>Place Order</button></Link></td>
                    <td><Link to="/ordercus"><button type="button" style={inlineStyles.customButton}>Customized Order</button></Link></td>
                </tr>
            </table>
        </div>
    );
}

export default SeaCeleb;
