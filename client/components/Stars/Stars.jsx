import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  StarContainer,
} from './Stars.styles';

const stars = {
  full: (key) => <Svg key={key} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z" /></Svg>,
  half: (key) => <Svg key={key} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M21.11,10c-.13-.42-.15-.46-.28-.88l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52C3,9.57,3,9.61,2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14ZM12.9,15.79l-.9-.53V6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3Z" /></Svg>,
  empty: (key) => <Svg key={key} xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z" /></Svg>,
};

const renderRating = (rating) => {
  let numberOfStars = rating;
  const svgs = [];
  while (svgs.length < 5) {
    if (numberOfStars >= 1) {
      svgs.push(stars.full(numberOfStars));
    } else if (numberOfStars >= 0.5) {
      svgs.push(stars.half(numberOfStars));
    } else {
      svgs.push(stars.empty(numberOfStars));
    }
    numberOfStars -= 1;
  }
  return svgs;
};

const Stars = (props) => {
  const { rating } = props;
  return (
    <StarContainer>
      {renderRating(rating)}
    </StarContainer>
  );
};

Stars.defaultProps = {
  rating: 0,
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
