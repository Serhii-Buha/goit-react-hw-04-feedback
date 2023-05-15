import PropTypes from 'prop-types';
import { Container, SectionTitle } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
