import "./App.css";
import ROUTES, { RenderRoutes } from "./routing/routes";
import { Layout } from "./views/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
