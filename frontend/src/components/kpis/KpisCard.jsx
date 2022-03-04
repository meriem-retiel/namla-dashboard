import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { KpisCardItem } from "./KpisCardItem";

export const KpisCard = ({ items = [] }) => {
  return (
    <Card border="light" className="shadow-sm" style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title>Summary</Card.Title>
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
