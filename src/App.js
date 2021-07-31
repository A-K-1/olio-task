import React, { useEffect, useContext } from "react";
import { Navbar, MapContainer, ItemList } from "./components/organisms";
import { Footer } from "./components/atoms";
import data from "./data/default";
import styled from "styled-components";
import { Context } from "./contexts/Store";

const StyledItemListWrapper = styled.div`
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const App = () => {
  const [state, dispatch] = useContext(Context);

  // fetch data from the url on page load only, add this to the store
  useEffect(() => {
    const url =
      "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "ADD_DATA",
          payload: {
            data: data,
          },
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar logo={data.images.logo} />
      <div>
        <MapContainer />
      </div>
      <StyledItemListWrapper>
        <ItemList />
      </StyledItemListWrapper>
      <Footer />
    </div>
  );
};

export default App;
