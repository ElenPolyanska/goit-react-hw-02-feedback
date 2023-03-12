import PropTypes from 'prop-types';
import { Item, List , Info} from './Statistics.styled';
 

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Info>
        <List>
        <Item>Good: { good}</Item>
        <Item>Neutral: { neutral}</Item>
        <Item>Bad: { bad}</Item>
      </List>
      </Info>
      <ul>
        <Item>Total: { total}</Item>
        <li>Positive feedback: { positivePercentage}%</li>
      </ul>
    </div>
  );
};



Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
