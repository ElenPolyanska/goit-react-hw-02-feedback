import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Btn type="button" key={option} onClick={()=>onLeaveFeedback(option)}>
            {option}
          </Btn>
        );
      })}
    </>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

