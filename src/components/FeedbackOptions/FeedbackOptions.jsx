import PropTypes from 'prop-types';
import {
  List,
  Item,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const capitalizeFirstLetter = string =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {capitalizeFirstLetter(option)}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
