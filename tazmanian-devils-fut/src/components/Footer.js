import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0A2454; /* Updated background color */
  color: white; /* Updated text color */
  padding: 0.5rem; /* Reduced padding */
  text-align: center;
  font-size: 0.8rem; /* Optional: Reduce font size */
  position: relative;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Tazmanian Devils Futbol Club. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;