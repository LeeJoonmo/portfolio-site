import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid #f0f0f0;
  width: 100%;
  margin: auto;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
margin-top: 30px;
margin-bottom:30px;
  text-align: center;
  width: 80%;
  color: rgba(0, 0, 0, 0.3);
  line-height:1.7;
  @media (max-width: 420px) {
   font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        Copyright Joonmo Lee <br />
        Love Today.
      </Content>
    </Container>
  );
};

export default Footer;
