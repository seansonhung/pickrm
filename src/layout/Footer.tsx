import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      Copyright &copy; {new Date().getFullYear()} Sean Nguyen
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  text-align: center;
  margin-top: 50px;
`;

export default Footer;
