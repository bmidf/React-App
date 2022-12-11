import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Breadcrumb, BreadcrumbItem,Button,Accordion} from 'react-bootstrap';
import {BsHeart} from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemDetails() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=3&offset=3');
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const history = useHistory();

  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await response.json();
      setItem(data);
    }
    fetchData();
  }, [id]);
  console.log(item);
  // on add to card click save the item in the local storage
  const addToCart = () => {
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    // history.push('/cart');
  }
  return (
    <Container>
      <Breadcrumb listTag="div" className="breadDecor">
        <BreadcrumbItem href="/react-app" tag="a" >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="/Shop" tag="a">
          Product
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
      {item ? (
        <>
        <Col>
          <img  style={{ width: '100%'}} src={item.images} alt={item.title} />
        </Col>
        <Col>
          <Row style={{alignItems: 'space-between'}}>
            <Col><p style={{textAlign: 'left', fontFamily: 'pooppins', fontSize: '25px'}}>{item.title}</p></Col>
            <Col style={{textAlign: 'right', hover: 'red'}} xs={3}><BsHeart/></Col>
          </Row>
          <Row  xs={1} md={1} lg={1} >
            <p style={{textAlign: 'left', fontFamily: 'pooppins', fontSize: '20px', color: '#e2342d'}}>$ {item.price}</p></Row>
          <Col style={{textAlign: 'left'}}>
            <Button style={{ marginRight: '5px'}} variant="outline-secondary">BLACK</Button>
            <Button style={{ marginRight: '5px'}} variant="outline-secondary">GOLD</Button>
            <Button style={{ marginRight: '5px'}} variant="outline-secondary">APOLLO</Button>
          </Col>
          <Row>
            <Button onClick={addToCart} style={{ margin: '10px', backgroundColor: '#004197', borderRadius: '1px'}}>ADD TO CART</Button>
          </Row>
          <Row><p>{item.description}</p></Row>
          <Row>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>
                    {item.description}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Return Policy</Accordion.Header>
                <Accordion.Body>
                  A return policy is a set of rules a retailer creates to manage how customers 
                  return and exchange unwanted merchandise they've purchased. Return policies tell 
                  customers what items can be returned and for what reasons, as well as the timeframe
                  over which returns are accepted
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Citizen Policy</Accordion.Header>
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
        <Row>
        <p style={{textAlign: 'center', fontFamily: 'pooppins', fontSize: '25px', padding: '50px'}}>YOU MAY ALSO LIKE</p>
        </Row>

        <Row style={{}}>
          <div className='box-grid'>
            {items.map(item => (
                <Link key={item.id} to={`/item/${item.id}`} onClick={() => history.push(`/item/${item.id}`)}>
                      <div className="imageBoxProduct">
                        <img className="imageProduct" src={item.category.image} alt={item.title} />
                      </div>
                      <div className="titleNewProduct">
                        {item.title}
                      </div>
                </Link>
              ))}
          </div>
        </Row>
        </>
        ) : (  
        <p>Loading...</p>
        )}
      </Row>
    </Container>
  );
}

export default ItemDetails;