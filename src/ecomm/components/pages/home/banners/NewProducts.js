/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";
import TestImage from "../../../../assets/images/similar.png";
import { Col, Row,CardBody,CardTitle,CardSubtitle,Card,CardText,Button } from "reactstrap";
import { Container } from "react-bootstrap";
function NewProducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.seatgeek.com/2/events?client_id=MzA5MzgyMDN8MTY3MDc4OTc1NC44NzkyMTM&client_secret=b28afd8fd88e0b02b707cfad094d619b091a4160d5fa675d71547feaa17c2fa7"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const allEvents = items.events;
  console.log(allEvents);
  // console.log(items.events[1]);
  // const productsFiler = products.filter((item, index) => index < 3)
  const history = useHistory();

  return (
    <>
      <div >
        <Container>
        <Row className="mt-5 align-content-around">
          {/* {allEvents.map(item => (
              <Col xs={12} md={4} lg={4}>
                <Link key={item.id} to={`/item/${item.id}`} onClick={() => history.push(`/item/${item.id}`)}>
                <div className="imageBoxProduct">
                        <img className="imageProduct" src={TestImage} />
                      </div>
                      <div className="titleNewProduct">
                        {item.title}
                      </div>
                </Link>
                </Col>  
            ))} */}
          <Col xs={12} md={4} lg={4}>
            <Card
             
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Event1</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                Event1
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Card
             
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Event1</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                Event1
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Card
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Event1</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                Event1
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  );
}
export default NewProducts;
