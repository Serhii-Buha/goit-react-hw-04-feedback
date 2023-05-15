import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 400px;
  padding: 5px;
  margin-bottom: 10px;

  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background-color: #f3f6f9;
`;

export const P = styled.p`
  font-size: 20px;
`;
