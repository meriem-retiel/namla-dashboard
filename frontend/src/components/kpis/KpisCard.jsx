import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { KpisCardItem } from "./KpisCardItem";

export const KpisCard = ({ items = [], title }) => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Container>
          <Row>
            {items.map((item, key) => (
              <KpisCardItem key={key} name={item.name} value={item.value} />
            ))}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
