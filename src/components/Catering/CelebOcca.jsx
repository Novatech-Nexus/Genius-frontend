import React from "react";
import { Link } from 'react-router-dom';
import img7 from '../../assets/catering/img7.jpg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logoMe from '../../assets/catering/logoMe.png';

function CelebOcca() {

    const backgroundStyle = {
        backgroundImage: `url(${img7})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };
    
    const tableContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '40%',
    };

    const tdStyle = {
        verticalAlign: 'top',
        textAlign: 'justify',
    };

    const pStyle = {
        textAlign: 'justify',
        fontSize: '18px',
        width: '99%'
    };

    const h1Style = {
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        color: '#2D5A27',
        fontSize:'60px',
        padding: '10px',
        textAlign:'center'
    };

    const customButtonStyle = {
        backgroundColor: '#D6001C',
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
    };

    const h2Style = {
        backgroundColor: '#BEC3C6',
        padding: '5px',
        maxWidth: '1400px',
        fontSize: '30px',
        marginTop: '20px',
        fontWeight:'bold',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        color: 'black',
        textAlign:'center'
    };

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ backgroundColor: '#343a40', height: '100px' }}>
               <Navbar.Brand style={{ color: '#fff', fontWeight: 'bold' }}>
                   <img src={logoMe} alt="Logo" style={{ height: '70px', marginRight: '10px', marginLeft: '20px' }} />
                   GENIUS RESTAURANT
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                       <LinkContainer to="/" exact>
                           <Nav.Link style={{ color: '#fff', fontWeight: 'normal' }}>Home</Nav.Link>
                       </LinkContainer>
                       <LinkContainer to="/catMain" exact>
                           <Nav.Link style={{ color: '#fff', fontWeight: 'normal' }}>Catering</Nav.Link>
                       </LinkContainer>
                       <NavDropdown title="Functions" id="basic-nav-dropdown" style={{ color: '#fff', fontWeight: 'normal' }}>
                           <LinkContainer to="/weddings">
                               <NavDropdown.Item >Wedding</NavDropdown.Item>
                           </LinkContainer>
                           <LinkContainer to="/kidsParty">
                               <NavDropdown.Item>Kids Parties</NavDropdown.Item>
                           </LinkContainer>
                           <LinkContainer to="/seationCeleb">
                               <NavDropdown.Item>Seasonal Celebration</NavDropdown.Item>
                           </LinkContainer>
                           <LinkContainer to="/CelebOcc">
                               <NavDropdown.Item>Celebrations & Occasions</NavDropdown.Item>
                           </LinkContainer>
                       </NavDropdown>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
        <div style={backgroundStyle}>
            <h1 style={h1Style}>Celebrations & Occasions</h1>
            <p style={{...pStyle, marginTop: '20px'}}>Welcome to Celebrations & Occasions, where every moment is an opportunity to savor the extraordinary. Nestled within the vibrant ambiance of Genius Restaurant, we specialize in crafting unforgettable experiences for your special events. From intimate gatherings to grand celebrations, our dedicated team of culinary artisans and event planners ensures that every detail is meticulously curated to surpass your expectations. With a fusion of exquisite flavors, impeccable service, and a touch of innovation, we transform your occasions into cherished memories. Indulge in a symphony of culinary delights as we embark on a journey of celebration together.</p>           
            <h2 style={h2Style}>Menu</h2>
            <div style={tableContainerStyle}>
                <table style={tableStyle}>
                    <tr>
                        <td style={tdStyle}><Link to="/celOccMenu/#morning"><button type="button" style={customButtonStyle}>Morning Functions</button></Link></td>
                        <td style={tdStyle}><Link to="/celOccMenu/#afternoon"><button type="button" style={customButtonStyle}>Afternoon Functions</button></Link></td>
                        <td style={tdStyle}><Link to="/celOccMenu/#evening"><button type="button" style={customButtonStyle}>Evening Functions</button></Link></td>
                        <td style={tdStyle}><Link to="/celOccMenu/#night"><button type="button" style={customButtonStyle}>Night Functions</button></Link></td>
                    </tr>
                </table>
            </div>
            <p style={pStyle}>Seasonal Celebration catering specializes in providing genius catering services that elevate any seasonal event or celebration. Our special services are designed to bring creativity, flavor, and excellence to every occasion. Here's a brief explanation of what sets us apart:</p>
            <ul style={pStyle}>
                <li>Customized Menus: We curate menus tailored to the specific season, incorporating fresh, seasonal ingredients to showcase the flavors of the moment. Whether it's a spring brunch, a summer barbecue, a fall harvest feast, or a winter holiday gala, our menus reflect the essence of the season.</li>
                <li>Creative Presentation: Our culinary team doesn't just create delicious dishes; they craft culinary works of art. From elegantly plated hors d'oeuvres to stunning buffet displays, every dish is presented with creativity and flair, adding an extra touch of magic to your event.</li>
                <li>Innovative Cuisine: We pride ourselves on pushing the boundaries of traditional catering with innovative cuisine that surprises and delights. Our chefs are constantly experimenting with new flavors, techniques, and culinary trends to ensure that every bite is a memorable experience.</li>
                <li>Attention to Detail: From the first consultation to the final clean-up, we pay meticulous attention to every detail to ensure a seamless and stress-free catering experience. Our team is committed to providing exceptional service at every step of the process, allowing you to relax and enjoy your celebration to the fullest.</li>
                <li>Personalized Service: We understand that every event is unique, which is why we offer personalized service to meet your specific needs and preferences. Whether you're planning an intimate gathering or a grand soiree, we'll work closely with you to create a custom catering package that exceeds your expectations.</li>
            </ul>
            <p style={pStyle}>Overall, Celebrations & Occasions catering's special services combine culinary expertise, creative flair, and exceptional service to make your seasonal celebration truly unforgettable.</p>     

            <div style={tableContainerStyle}>
                <table style={tableStyle}>
                    <tr>
                        <td style={tdStyle}><Link to="/orderplace"><button type="button" style={customButtonStyle}>Place Order</button></Link></td>
                        <td style={tdStyle}><Link to="/ordercus"><button type="button" style={customButtonStyle}>Customized Order</button></Link></td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    );
}

export default CelebOcca;
