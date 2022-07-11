import styled from "styled-components";

export const IndexWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #020202;
  font-size: 84px;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimerWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Seconds = styled.span`
  font-size: 45px;
  margin-bottom: 15px;
`;
