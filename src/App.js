import React, { useEffect, useReducer } from "react";
import { Navbar, MapContainer, ItemList } from "./components/organisms";
import data from "./data/default";
import styled from "styled-components";
import { reducer } from "./contexts/reducer";

export const AuthContext = React.createContext();

const initialState = {
  data: [],
  clickedItems: [],
};

const StyledItemListWrapper = styled.div`
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Navbar logo={data.images.logo} />
        <div>
          <MapContainer />
        </div>
        <StyledItemListWrapper>
          <ItemList />
        </StyledItemListWrapper>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
