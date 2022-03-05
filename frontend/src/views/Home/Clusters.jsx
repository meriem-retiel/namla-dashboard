import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  getGlobalKpis,
  getLogs,
  getLogsHeader,
  getClustersData,
} from "../../api/fakeData";
import ChartCard from "../../components/chart/ChartCard";
import { KpisCard } from "../../components/kpis/KpisCard";
import TableCard from "../../components/table/TableCard";

export const Clusters = () => {
  return (
    <>
      <ChartCard
        data={getClustersData()}
        title="Clusters Health"
        grid
        dataKey="Precision"
      />
      <Row className="mt-3">
        <Col xs={7}>
          <TableCard title="Logs" header={getLogsHeader()} rows={getLogs()} />
        </Col>
        <Col xs={5}>
          <KpisCard title="Summary" items={getGlobalKpis()} />
        </Col>
      </Row>
    </>
  );
};
