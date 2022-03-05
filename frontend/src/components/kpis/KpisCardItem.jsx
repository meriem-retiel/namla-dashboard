import React from "react";
import { Card, Col } from "react-bootstrap";

export const KpisCardItem = ({ name, value }) => {
  return (
    <Col xs={6} className="px-0">
      <Card className="m-2 border-0 p-2 bg-light">
        <h2 className="my-0 fw-bold">{value}</h2>
        <h6 className=" py-0 small text-muted text-center">{name}</h6>
      </Card>
    </Col>
  );
};
