import React from 'react'
import companyImage from "../../../../assets/images/company.png";
import { Container, Row, Col } from "react-bootstrap";
const Companies = () => {
  return (
    <div>
        <Row className='justify-content-between p-5 mt-5' style={{backgroundColor:"#EBD96B"}}>
            <Col xs={11} md={1} lg={1}>
                <img src={companyImage
                } />
            </Col>
            <Col xs={11} md={1} lg={1}>
                <img src={companyImage
                } />
            </Col>
            <Col xs={11} md={1} lg={1}>
                <img src={companyImage
                } />
            </Col>
            <Col xs={11} md={1} lg={1}>
                <img src={companyImage
                } />
            </Col>
            <Col xs={11} md={1} lg={1}>
                <img src={companyImage
                } />
            </Col>
            <Col xs={11} md={1} lg={1}>
                <img src={companyImage
                } />
            </Col>
        </Row>
    </div>
  )
}

export default Companies