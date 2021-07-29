import { Navbar } from "./components/organisms";
import data from "./data/default";

const App = () => {
  return (
    <div>
      <Navbar logo={data.images.logo} />
    </div>
  );
};

export default App;
