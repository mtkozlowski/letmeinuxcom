import styled from 'styled-components';

const Dot = styled.div`
--radius: 24px;
border-radius: 50%;
background-color: ${({ theme }) => theme.colors.purple};
height: var(--radius);
width: var(--radius);
margin-left: var(--radius);

&:first-of-type {
  margin-left: auto;
}
`;

export default Dot;