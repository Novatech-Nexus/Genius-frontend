import React from "react";
import { Link } from 'react-router-dom';
import logoMe from '../../assets/catering/logoMe.png';
import img1 from '../../assets/catering/img1.jpeg';
import img2 from '../../assets/catering/img2.jpg';
import img3 from '../../assets/catering/img3.jpeg';
import img4 from '../../assets/catering/img4.jpeg';
import img7 from '../../assets/catering/img7.jpg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

function Main() {
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '99%',
        marginTop: '50px',
    };

    const tdStyle = {
        verticalAlign: 'top',
        textAlign: 'justify',
        marginTop: '100px'
    };

    const imgStyle = {
        maxWidth: '230px',
        height: '200px',
        marginRight: '20px',
    };

    const pStyle = {
        textAlign: 'justify',
        fontSize: '17px',
        width: '99%'
    };

    const backgroundStyle = {
        backgroundImage: `url(${img7})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    const h1Style = {
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        fontSize:'60px',
        color: '#AB7D00',
        padding: '10px',
        fontWeight: 'bold',
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

    return (
        <>
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ backgroundColor: '#343a40',height: '100px' }}>
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




            <div className="coldesign" style={backgroundStyle}> 
                <h1 className="h1" style={h1Style}>Catering Service</h1>
                <p className="p" style={{...pStyle, marginTop: '20px'}}>Welcome to Genius Catering! where culinary excellence meets impeccable service. With a passion for crafting unforgettable dining experiences, we specialize in catering for all occasions. From intimate gatherings to grand celebrations, our team of talented chefs and dedicated staff ensure that every detail is meticulously curated to delight your palate and elevate your event. Discover the perfect fusion of flavors and innovation with Genius Catering, where exceptional cuisine meets unparalleled service.</p>
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <td style={tdStyle}><Link to="/weddings"><button type="button" className="custom-button" style={customButtonStyle}>Weddings</button></Link></td>
                            <td style={tdStyle}><img src={img1} style={{ maxWidth: '230px' }} alt="Wedding Catering"/></td>
                            <td style={tdStyle}><p style={pStyle}>Wedding catering services, where culinary excellence meets matrimonial bliss! At Genius Restaurant, we understand that your wedding day is one of the most important moments of your life, and we are dedicated to making it truly unforgettable. From lavish receptions to intimate gatherings, our team is committed to crafting a dining experience that reflects your unique love story. With exquisite menus tailored to your preferences, impeccable service, and attention to every detail, let us elevate your celebration with flavors that delight and memories that last a lifetime. Cheers to love, laughter, and happily ever after!</p></td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><Link to="/kidsParty"><button type="button" className="custom-button" style={customButtonStyle}>Kids Parties</button></Link></td>
                            <td style={tdStyle}><img src={img2} style={imgStyle} alt="Kids Parties"/></td>
                            <td style={tdStyle}><p style={pStyle}>Our Kids Parties Catering! We're here to make your little one's celebration extra special with delicious food and treats. From colorful cupcakes to yummy finger foods, we've got everything to keep your young guests happy and full of energy. Let us take care of the food, so you can focus on creating magical memories with your child and their friends. Let the fun begin!</p></td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><Link to="/seationCeleb"><button type="button" className="custom-button" style={customButtonStyle}>Seasonal Celebration</button></Link></td>
                            <td style={tdStyle}><img src={img3} style={imgStyle} alt="Seasonal Celebration"/></td>
                            <td style={tdStyle}><p style={pStyle}>Our Seasonal Celebration section! Here, we embrace the spirit of the season by offering a delectable array of dishes tailored to fit the festivities of any time of year. Whether it's the warmth of winter, the blossoms of spring, the sizzle of summer, or the harvest of fall, we bring you culinary delights that capture the essence of the season. From cozy comfort foods to vibrant seasonal specialties, our catering service ensures that every gathering is infused with the flavors and flair of the occasion. Join us in celebrating the joys of the season with mouthwatering menus that are sure to leave a lasting impression on your guests.</p></td>
                        </tr>
                        <tr>
                            <td style={tdStyle}><Link to="/CelebOcc"><button type="button" className="custom-button" style={customButtonStyle}>Celebrations & Occasions</button></Link></td>
                            <td style={tdStyle}><img src={img4} style={imgStyle} alt="Celebrations & Occasions"/></td>
                            <td style={tdStyle}><p style={pStyle}>Our Celebrations & Occasions section! Here, we specialize in crafting memorable experiences for your special moments. Whether you're planning a wedding, birthday party, anniversary, or any other joyous occasion, our catering service is here to elevate your event with delicious cuisine, impeccable presentation, and attentive service. From intimate gatherings to grand celebrations, let us bring your vision to life and create unforgettable memories together.</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Main;
