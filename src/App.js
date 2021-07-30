import { Navbar, MapContainer } from "./components/organisms";
import data from "./data/default";

const App = () => {
  return (
    <div>
      <Navbar logo={data.images.logo} />
      <div>
        <MapContainer />
      </div>
    </div>
  );
};

export default App;
