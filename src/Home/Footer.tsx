import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'reactstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerDiv">
            <Row>
                <div className="col-sm-12">
                    <br />
                    <p className="footerP">
                        ©2022 MovieLists
                    </p>
                </div>
            </Row>
        </div>
    );
};

export default Footer;