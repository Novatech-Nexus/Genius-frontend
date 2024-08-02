import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import img7 from '../../assets/catering/img7.jpg';
import logoMe from '../../assets/catering/logoMe.png';

function Wedding() {
    const backgroundStyle = {
        backgroundImage: `url(${img7})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };
    const divStyle = {
        maxWidth: 'auto', 
        margin: '0 auto', 
        padding: '5px', 
    };

    const h1Style = {
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        color: '#2D5A27',
        fontSize:'60px',
        padding: '10px',
        textAlign:'center'
    };

    const pStyle = {
        textAlign: 'justify',
        fontSize: '18px',
        width:'99%'
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

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '40%',
    };


    const tableContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
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

    const ulStyle = {
        textAlign: 'left',
        listStyleType: 'circle',
    };
    const liStyle = {
        margin: '8px 0',
        paddingLeft: '20px',
        marginLeft: '20px',
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
            <div style={{...backgroundStyle, ...divStyle}}> 
                <h1 style={h1Style}>Wedding Function</h1>
                <p style={{...pStyle, marginTop: '20px'}}>Welcome to Genius Restaurant, where culinary excellence meets unforgettable moments! We are thrilled to extend our expertise to ensure your special day is nothing short of extraordinary. At Genius Wedding Catering, we blend artistry with flavor, crafting bespoke menus that reflect your unique love story. From elegant hors d'oeuvres to decadent desserts, our team of culinary geniuses is dedicated to tantalizing your taste buds and exceeding your every expectation. Let us transform your wedding into an unforgettable gastronomic experience, where every bite is a celebration of love and togetherness. Cheers to a lifetime of happiness, and let Genius Wedding Catering be the perfect ingredient to your happily ever after.</p>           
                <h2 style={h2Style}>Menu</h2>
                <div style={tableContainerStyle}>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <td><Link to="/wedsMenu"><button type="button" style={customButtonStyle}>Morning Functions</button></Link></td>
                                <td><Link to="/wedsMenu"><button type="button" style={customButtonStyle}>Afternoon Functions</button></Link></td>
                                <td><Link to="/wedsMenu"><button type="button" style={customButtonStyle}>Evening Functions</button></Link></td>
                                <td><Link to="/wedsMenu"><button type="button" style={customButtonStyle}>Night Functions</button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style={pStyle}>At Genius Catering, our wedding catering special services go beyond just providing delicious food. We pride ourselves on creating an unforgettable culinary experience tailored to each couple's unique tastes and preferences. Our special services include:</p>
                <ul style={ulStyle}>
                    <li style={liStyle}>Customized Menus: We work closely with the couple to design a menu that reflects their personal style, dietary restrictions, and cultural preferences.</li>
                    <li style={liStyle}>Food Tastings: We offer complimentary food tastings to ensure the couple is completely satisfied with their menu selections before the big day.</li>
                    <li style={liStyle}>Signature Cocktails: Our mixologists can create signature cocktails to add a personal touch to the reception and complement the menu perfectly.</li>
                    <li style={liStyle}>Presentation: We pay meticulous attention to detail in the presentation of our dishes, ensuring they not only taste amazing but also look stunning on the plate.</li>
                    <li style={liStyle}>Professional Staff: Our experienced and courteous staff members are dedicated to providing exceptional service, from setup to cleanup, allowing the couple to relax and enjoy their special day.</li>
                    <li style={liStyle}>Dietary Accommodations: We accommodate various dietary restrictions and preferences, including vegetarian, vegan, gluten-free, and more, to ensure all guests can indulge in the celebration.</li>
                    <li style={liStyle}>Venue Coordination: We work closely with the venue to coordinate all aspects of the catering service, ensuring a seamless and stress-free experience for the couple and their guests.</li>
                </ul>
                <p style={pStyle}>Overall, our wedding catering special services are designed to exceed expectations and create memories that will last a lifetime.</p>     

                <div style={tableContainerStyle}>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <td><Link to="/orderplace"><button type="button" style={customButtonStyle}>Place Order</button></Link></td>
                                <td><Link to="/ordercus"><button type="button" style={customButtonStyle}>Customized Order</button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Wedding;
