import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  opacity: ${(props) => (props.viewed ? "30%" : "100%")};
  background: ${(props) => props.theme.palette.white};
  color: #000;
  font-size: 36px;
  line-height: 100px;
  position: relative;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin: 10px;
  padding: 0 25px 25px;
  height: 410px;
`;

const StyledItemImage = styled.img`
  height: 124px;
  width: 124px;
  object-fit: cover;
  // border-radius: 50%;
  margin: -60px auto 0;
`;

const StyledItemName = styled.p`
  color: ${(props) => props.theme.palette.black};
  font-style: italic;
  font-size: 1.25rem;
  line-height: normal;
  margin-top: 0;
`;

const StyledItemDescription = styled.p`
  color: ${(props) => props.theme.palette.grey};
  font-style: italic;
  font-size: 1rem;
  line-height: normal;
  margin-top: 0;
  margin-bottom: 40px;
  height: 270px;
  overflow: scroll;
  white-space: pre-line;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  :: -webkit-scrollbar {
    width: 0;
  }
`;

export const ItemCard = ({
  itemName,
  image,
  description,
  handleClick,
  index,
  viewed,
}) => {
  // console.log("viewed", viewed);
  let isViewed = false;

  if (viewed) {
    viewed.map((viewedItem) => {
      if (viewedItem.index === index) return (isViewed = true);
      return false;
    });
  }

  return (
    <StyledWrapper viewed={isViewed} onClick={() => handleClick(index)}>
      <StyledItemImage src={image} />
      <StyledItemName>{itemName}</StyledItemName>
      <StyledItemDescription>{description}</StyledItemDescription>
    </StyledWrapper>
  );
};

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleClick: PropTypes.func,
  index: PropTypes.number,
  viewed: PropTypes.array,
};

ItemCard.defaultProps = {};
