import styled from 'styled-components';

export const Row = styled.div`
  padding: 0 ${props => props.space ? props.space : '0'};
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${props => props.rowJustify ? props.rowJustify: "center"};

  @media (max-width: 700px) {
		flex-direction: ${props => props.stack ? 'column' : 'row'};
	}
`

export const Column = styled.div`
  padding: ${props => props.space ? props.space : '0'} 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: ${props => props.colMaxWidth ? props.colMaxWidth: "none"};
`