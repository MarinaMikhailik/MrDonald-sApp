import styled from "styled-components";

const LoaderWrapper = styled.div`
  height: calc(100% - 80px);
  padding-top: 250px;
  padding-bottom: 250px;
`;

const LoaderWheel = styled.div`
  animation: spin 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
  margin-left: calc(50% - 25px);
`;

const LoaderText = styled.div`
  text-align: center;
  &:after {
     animation: load 2s linear infinite;
  }
`;

export const Loader = () => {
  return (
  <LoaderWrapper>
    <LoaderWheel/>
    <LoaderText>Загрузка...</LoaderText>
  </LoaderWrapper>
  );
};

