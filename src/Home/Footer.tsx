import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Nav } from 'reactstrap';

const Footer = () => {
    return (
        <div>
            <Row>
                <div className="col-sm-12">
                    <p className="footer">
                        &copy: 2022 MovieLists &trade:
                    </p>
                </div>
            </Row>
        </div>
    );
};

export default Footer;