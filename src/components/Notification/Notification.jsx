import PropTypes from 'prop-types';
import { Container } from 'components/Section/Section.styled';
import { P } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => (
  <Container>
    <P>{message}</P>
  </Container>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
