import React from 'react';
import imgTitle from "../../assets/img/contact.png";
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="img_title">
                <img src={imgTitle} alt="" />
            </div>
            <div className="title_photovolatique">
                <h1>Nous contacter</h1>
                <h2>SATELYS</h2>
            </div>
            <div className='coordonnees'>
                <p>
                    Adresse postale :43 rue Galilée 59760 Grande-Synthe
                    <p>
                        <br />
                    </p>
                    Télephone : 01-00-00-00-00
                </p>
                <br />
                <p>
                    Adresse Mail : Direction.satelys@gmail.com
                </p>
            </div>
        </div >
    );
};

export default Contact;