import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 2px solid ${({ theme }) => theme.colors.darkblue};
  border-radius: 1.33em;
  color: ${({ theme }) => theme.colors.dark};
  box-shadow: 3px 3px 3px #ccc;

  display: inline-block;
  padding: 0.4em 0.6em;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.darkblue};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 1px 3px #ccc;
  }

  ${({ theme }) => theme.media.phone} {
    margin-top: 0 !important;
  }
`

export const LargeButton = styled(Button)`
  font-size: 1.4em;
  padding: 0.3em 1em;
`
