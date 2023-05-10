import styled from "styled-components";

export const Container = styled.h1`
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 3rem 1rem;
  border-radius: 4px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
