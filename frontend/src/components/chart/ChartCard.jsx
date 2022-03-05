import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "react-bootstrap";

export default function ChartCard({ title, data, dataKey, grid }) {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}
