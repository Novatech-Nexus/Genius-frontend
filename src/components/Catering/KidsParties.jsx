import React from "react";
import { Link } from 'react-router-dom';
import img7 from '../../assets/catering/img7.jpg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logoMe from '../../assets/catering/logoMe.png';

function KidsParties() {

    const backgroundStyle = {
        backgroundImage: `url(${img7})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    const divStyle = {
        maxWidth: 'auto',
        margin: '0 auto',
        padding: '5px'
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
        width: '99%'
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
        listStyleType: 'circle'
    };

    const liStyle = {
        margin: '8px 0',
        paddingLeft: '20px',
        marginLeft: '20px'
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
            <h1 style={h1Style}>Kids Parties</h1>
            <p style={{...pStyle, marginTop: '20px'}}>Welcome to Genius Restaurant's Kids Parties Catering Service, where every celebration becomes a masterpiece! At Genius Restaurant, we sprinkle a touch of magic into every dish to make your child's special day truly unforgettable. From colorful cupcakes to delightful mini sandwiches, our menu is bursting with tasty treats that will dazzle taste buds and bring smiles to little faces. With our dedicated team of chefs and party planners, we turn dreams into reality, ensuring every detail is just as special as your little one imagines. So sit back, relax, and let Genius Restaurant's Kids Parties Catering Service turn your child's party into a masterpiece of fun and flavor!</p>           
            <h2 style={h2Style}>Menu</h2>
            <div style={tableContainerStyle}>
                <table style={tableStyle}>
                <tr>
                    <td><Link to="/kidMenus/#morning"><button type="button" style={customButtonStyle}>Morning Functions</button></Link></td>
                    <td><Link to="/kidMenus/#afternoon"><button type="button" style={customButtonStyle}>Afternoon Functions</button></Link></td>
                    <td><Link to="/kidMenus/#evening"><button type="button" style={customButtonStyle}>Evening Functions</button></Link></td>
                    <td><Link to="/kidMenus/#night"><button type="button" style={customButtonStyle}>Night Functions</button></Link></td>
                </tr>
            </table>
            </div>
            <p style={{...pStyle}}>Kids Parties Catering with Genius Catering Services offers a unique and exceptional experience for children's events. Our special services focus on creating a fun and memorable atmosphere while ensuring delicious and nutritious food options. Here's a brief explanation of what sets us apart:</p>
            <ul style={ulStyle}>
                <li style={liStyle}>Creative Menu: Our catering services provide a menu specifically designed for kids, featuring a variety of colorful and tasty dishes that appeal to young taste buds. From playful finger foods to themed desserts, we prioritize both nutrition and enjoyment.</li>
                <li style={liStyle}>Themed Decor: We understand the importance of creating a visually appealing setting for kids' parties. Our catering includes themed decor to match the party's motif, transforming the venue into a magical and exciting space that complements the overall experience.</li>
                <li style={liStyle}>Interactive Food Stations: To add an element of entertainment, we offer interactive food stations where kids can engage in hands-on activities like decorating cupcakes, assembling their mini pizzas, or crafting personalized snacks. This not only keeps them entertained but also encourages creativity.</li>
                <li style={liStyle}>Allergen Considerations: We prioritize the safety and well-being of all children by accommodating various dietary restrictions and allergies. Our catering service ensures that all food options are clearly labeled, and we can customize menus to suit specific dietary needs.</li>
                <li style={liStyle}>Professional Staff: Our team consists of experienced and friendly staff who are skilled in handling children's events. They are trained to interact with kids, ensuring a positive and enjoyable experience for everyone.</li>
                <li style={liStyle}>Entertainment Packages: In addition to catering, we offer optional entertainment packages such as face painting, balloon artists, or themed character appearances. These add-ons enhance the overall party experience and keep the children engaged throughout the event.</li>
                <li style={liStyle}>Effortless Planning: Genius Catering Services takes the stress out of party planning for parents. We work closely with clients to understand their preferences and customize catering packages, allowing them to focus on enjoying the celebration rather than worrying about the details.</li>
            </ul>
            <p style={{...pStyle}}>Overall, our Kids Parties Catering with Genius Catering Services aims to deliver not just delicious food but an immersive and delightful experience that makes every child's celebration truly special.</p>     

            <div style={tableContainerStyle}>
                <table style={tableStyle}>
                <tr>
                    <td><Link to="/orderplace"><button type="button" style={customButtonStyle}>Place Order</button></Link></td>
                    <td><Link to="/ordercus"><button type="button" style={customButtonStyle}>Customized Order</button></Link></td>
                </tr>
            </table>
           </div> 
        </div>
        </>
    );
}

export default KidsParties;
