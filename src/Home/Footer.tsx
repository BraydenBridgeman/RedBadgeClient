import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'reactstrap';

const Footer = () => {
    return (
        <div>
            <Row>
                <div className="col-sm-12">
                    <br />
                    <p className="footer">
                        ©2022 MovieLists
                    </p>
                </div>
            </Row>
        </div>
    );
};

export default Footer;