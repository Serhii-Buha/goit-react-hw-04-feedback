import PropTypes from 'prop-types';
import { List, Item, P } from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <List>
    <Item>
      <P>Good: {good}</P>
    </Item>
    <Item>
      <P>Neutral: {neutral}</P>
    </Item>
    <Item>
      <P>Bad: {bad}</P>
    </Item>
    <Item>
      <P>Total: {total}</P>
    </Item>
    <Item>
      <P>Positive feedback: {positivePercentage}%</P>
    </Item>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
