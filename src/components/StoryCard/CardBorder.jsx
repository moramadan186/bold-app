import styled from "styled-components";
const CardBorder = () => {
  return (
    <>
      <Line1></Line1>
      <Line2></Line2>
      <Line3></Line3>
      <Line4></Line4>
    </>
  );
};

const Line = styled.span`
  position: absolute;
  width: 0px;
  height: 0px;
  background-color: ${({ theme }) => theme.colors.border};

`;
const Line1 = styled(Line).attrs({ className: "line1" })`
  left: 0;
  bottom: 0;
  width: 1px;
`;
const Line2 = styled(Line).attrs({ className: "line2" })`
  top: 0;
  left: 0;
  height: 1px;
`;
const Line3 = styled(Line).attrs({ className: "line3" })`
  right: 0;
  top: 0;
  width: 1px;
`;
const Line4 = styled(Line).attrs({ className: "line4" })`
  bottom: 0;
  right: 0;
  height: 1px;
`;

export default CardBorder;
