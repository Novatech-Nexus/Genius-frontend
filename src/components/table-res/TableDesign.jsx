import React from "react";
import { Link } from 'react-router-dom';
import book8 from '../../assets/table-manage/book8.jpg';
import book3 from '../../assets/table-manage/book3.jpg';
import book4 from '../../assets/table-manage/book4.jpg';
import book5 from '../../assets/table-manage/book5.jpg';
import design from '../../assets/table-manage/design.png';

function TableDesign() {
    return (
        <div className="dual-background">
            <h3 style={{
                fontFamily: 'CustomFont',
                textAlign: 'center',
                marginBottom: '20px',
                color: 'black',
                fontWeight: 'bold',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                fontSize: '40px'
            }}>
                Table Design
            </h3>

            <div className="table-architecture" >
                <div className="image-container" >
                    <div className="image-with-text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '2px',fontFamily: 'CustomFont',fontWeight: 'bold'}}>
                        <img src={book3} alt="Book 3" className="book-image" />
                        <p className="image-caption">Couple</p>
                    </div>
                    <div className="image-with-text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '2px' ,fontFamily: 'CustomFont',fontWeight: 'bold'}}>
                        <img src={book4} alt="Book 4" className="book-image" />
                        <p className="image-caption">Family/Friends</p>
                    </div>
                    <div className="image-with-text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '2px' , fontFamily: 'CustomFont',fontWeight: 'bold'}}>
                        <img src={book5} alt="Book 5" className="book-image" />
                        <p className="image-caption">Business Meeting</p>
                    </div>
                </div>

                <div className="table-image">
                    <img src={design} alt="Design" className="table-book-image" />
                </div>
            </div>

            <style jsx>
                {`
                .dual-background {
                    // position: relative;
                    // height: 100vh;
                    background-color: #fff; /* Fallback color */
                    background-image: url(${book8}); /* Set book2 as the background image */
                    background-size: cover;
                    background-position: center;
                }

                .image-container {
                    display: flex;
                    justify-content: center;
                    flex-direction: row;
                    align-items: center;
                    margin-top: 50px;
                }

                .image-with-text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0 50px; /* Adjust margin for space between images */
                }

                .book-image {
                    width: 250px;
                    height: 250px;
                    object-fit: cover; /* Ensure the image covers the defined space */
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                .image-caption {
                    margin-top: 5px;
                    text-align: center;
                    font-size: 20px;
                    color: black;
                }

                .table-book-image {
                    display: block; /* Ensure the image behaves as a block element */
                    margin: 0 auto; /* Center the image horizontally */
                    width: 100%; /* Adjust width to fill its container */
                    height: auto; /* Maintain aspect ratio */
                    max-width: 600px; /* Limit maximum width */
                    max-height: 600px; /* Limit maximum height */
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin-top: 20px;
                    margin-bottom: 10px; /* Add bottom margin of 3px */
                }
                `}
            </style>
        </div>
    );
}

export default TableDesign;
