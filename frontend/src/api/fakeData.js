const globalKpis = [
  { name: "Memory usage", value: "78%" },
  { name: "Edge connected", value: "64%" },
  { name: "CPU usage", value: "12" },
  { name: "Total nb of devices", value: "132" },
];
const logs = [
  {
    Cluster: "cluster_id",
    Date: "23/03:2019 12:45:34",
    Performance: 0.02,
    Error: 0.02,
    Evaluation_metric: "MAE",
    execution_time: "00:01:23",
  },
  {
    Cluster: "cluster_id",
    Date: "23/03:2019 12:45:34",
    Performance: 0.02,
    Error: 0.02,
    Evaluation_metric: "MAE",
    execution_time: "00:01:23",
  },
  {
    Cluster: "cluster_id",
    Date: "23/03:2019 12:45:34",
    Performance: 0.02,
    Error: 0.02,
    Evaluation_metric: "MAE",
    execution_time: "00:01:23",
  },
  {
    Cluster: "cluster_id",
    Date: "23/03:2019 12:45:34",
    Performance: 0.02,
    Error: 0.02,
    Evaluation_metric: "MAE",
    execution_time: "00:01:23",
  },
];
const logsTableHeader = [
  "Cluster",
  "Date",
  "Performance",
  "Error",
  "Evaluation metric",
  "execution time",
];
const clustersData = [
  {
    name: "1",
    Precision: 4000,
  },
  {
    name: "2",
    Precision: 3000,
  },
  {
    name: "3",
    Precision: 5000,
  },
  {
    name: "4",
    Precision: 4000,
  },
  {
    name: "5",
    Precision: 3000,
  },
  {
    name: "6",
    Precision: 2000,
  },
  {
    name: "7",
    Precision: 4000,
  },
  {
    name: "8",
    Precision: 3000,
  },
  {
    name: "9",
    Precision: 4000,
  },
  {
    name: "10",
    Precision: 1000,
  },
  {
    name: "11",
    Precision: 4000,
  },
  {
    name: "12",
    Precision: 3000,
  },
];

export const getGlobalKpis = () => globalKpis;
export const getLogs = () => logs;
export const getLogsHeader = () => logsTableHeader;
export const getClustersData = () => clustersData;
