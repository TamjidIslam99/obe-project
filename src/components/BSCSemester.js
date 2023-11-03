import React, {Fragment, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function BscSemester({semesterValue,semesterChange}) {



    return (
        <Fragment>
            <Container>
                <Row>
                    <div>
                        <label htmlFor="">Semester</label>
                        <Form.Select onChange={semesterChange} value={semesterValue}>
                            <option>choose semester</option>
                            <option value="1stSemester">1st semester</option>
                            <option value="2ndSemester">2nd semester</option>
                        </Form.Select>
                    </div>
                </Row>
            </Container>
        </Fragment>
    );
}

export default BscSemester;