/* 
A molecule that creates a card and displays a title, image and a caption (using the Caption atom)
*/
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Caption } from "../../atoms";

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

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: max-content;
  }
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
  font-size: 1.25rem;
  line-height: normal;
  margin-top: 0;
`;

const StyledViewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledDescriptionWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ItemCard = ({
  itemName,
  image,
  description,
  handleClick,
  index,
  viewed,
  numberViews,
}) => {
  // this variable will track if the item card has been viewed by the user
  let isViewed = false;

  if (viewed) {
    // loop through the viewed prop (array) to see if this item's index is in the array
    viewed.map((viewedItem) => {
      if (viewedItem.index === index) return (isViewed = true);
      return false;
    });
  }

  return (
    <StyledWrapper viewed={isViewed} onClick={() => handleClick(index)}>
      <StyledItemImage src={image} />
      <StyledItemName>{itemName}</StyledItemName>
      <StyledDescriptionWrapper>
        <Caption>{description}</Caption>
      </StyledDescriptionWrapper>
      <StyledViewsWrapper>
        <Caption>{`Number of views: ${numberViews}`}</Caption>
      </StyledViewsWrapper>
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
  numberViews: PropTypes.number,
};

ItemCard.defaultProps = {};
