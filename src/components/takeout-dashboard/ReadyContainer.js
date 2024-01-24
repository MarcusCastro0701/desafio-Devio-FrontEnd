import React from 'react';
import styled from 'styled-components';

export default function ReadyContainer({ orders }) {
  return (
    <Container>
      {orders.map(o => (
        <h1>{o.clientName}</h1>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 6vh;
  h1 {
    color: darkgreen;
    margin: 2vh 0;
    font-size: 10vh;
    font-weight: 600;
    opacity: 100%;
    @media (max-width: 1200px) {
      font-size: 4.5vh;
    }
  }
`;