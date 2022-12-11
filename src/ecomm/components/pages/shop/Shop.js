/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Col,Accordion,Button,DropdownButton,Dropdown } from 'react-bootstrap';
import Coffee from '../../../assets/images/Coffee.png'
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=12&offset=12');
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);
  const history = useHistory();
    return (
      <Container className="shopAlign">
        <Row>
          <img src={Coffee} alt='Coffee'/>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col xs={3}>        
            <Row>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Company</Accordion.Header>
                  <Accordion.Body>
                      A return policy is a set of rules a retailer creates to manage how customers 
                    return and exchange unwanted merchandise they've purchased. Return policies tell 
                    customers what items can be returned and for what reasons, as well as the timeframe
                    over which returns are accepted
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    A return policy is a set of rules a retailer creates to manage how customers 
                    return and exchange unwanted merchandise they've purchased. Return policies tell 
                    customers what items can be returned and for what reasons, as well as the timeframe
                    over which returns are accepted
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Categories</Accordion.Header>
                  <Accordion.Body>
                      Citizens online and mobile-friendly, policyholder self-service tool.
                    You can use myPolicy to view and download policy documents 
                    (excluding claims documents); submit a claim; and view your policy,
                    claims and billing information. You also can make payments under certain conditions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
          <Col xs={9}>
            <Row>
              <Col>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Everyday Essentials</Button>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Cleaning Essentials</Button>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Immunity & Health</Button>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Vitamin Supplemer</Button>
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{marginTop: '10px'}}>
                  <p>9 Products</p>
              </Col>
              <Col style={{textAlign: 'right', marginTop: '10px'}}>
                <DropdownButton title={'Sort'} id={`dropdown-variants-Secondary`}>
                  <Dropdown.Item eventKey="1">A-Z</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Z-A</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Price: Low to High</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Price: High to Low</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
            <Row>
                  {items.map(item => (
                      <Col xl={"4"} xs={"6"}>
                        <Link key={item.id} to={`/item/${item.id}`} onClick={() => history.push(`/item/${item.id}`)}>
                              <div className="imageBoxProduct">
                                <img className="imageProduct" src={item.category.image} alt={item.title} />
                              </div>
                              <div className="titleNewProduct">
                                {item.title}
                              </div>
                        </Link>
                      </Col>
                  ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default Shop;