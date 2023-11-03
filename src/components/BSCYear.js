import React, {Fragment, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function BscYear({yearValue,yearChange}) {


    return (
        <Fragment>
            <Container>
                <Row>
                   <Col>
                       <div>
                           <label htmlFor="">Year</label>
                           <Form.Select onChange={yearChange} value={yearValue}>
                               <option value="">choose year</option>
                               <option value="1stYear">1st year</option>
                               <option value="2ndYear">2nd year</option>
                               <option value="3rdYear">3rd year</option>
                               <option value="4thYear">4th year</option>
                           </Form.Select>
                       </div>
                   </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default BscYear;