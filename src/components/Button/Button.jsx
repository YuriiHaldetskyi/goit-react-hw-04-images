import { ButtonStyle } from './Button.styled';
import PropTypes from 'prop-types';
export const Button = ({ onClick }) => {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      Load More
    </ButtonStyle>
  );
};

Button.propTypes = { onClick: PropTypes.func.isRequired };
