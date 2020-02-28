import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = props => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={24} color="#546bfb"></Ionicons>
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Subtitle> {props.text}</Subtitle>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.Text`
  padding-left: 20px;
  flex-direction: column;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
