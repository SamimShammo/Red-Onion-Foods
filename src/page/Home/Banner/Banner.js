import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col,  FormControl,  InputGroup,  Row } from 'react-bootstrap';

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
              <Row className="margin-align">
                <Col xs={12} md={12} lg={12} xxl={12} className="margin-align">
                   <h1 className="text-center heading-tag">Best food waiting for your belly</h1>
                   <div className="search-bar m-auto">
                  <Col xs={8} lg={6} className="m-auto">
                  <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Recipient's username"
                        className="search-input shadow"
                        />
                          <Button variant="outline-secondary" className="btn-search shadow">
                        Button
                        </Button>
                    </InputGroup>
                  </Col>
                   </div>
                </Col>
             </Row>
        </div>
    );
};

export default Banner;