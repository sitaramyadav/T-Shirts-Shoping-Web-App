import styled from "styled-components";

export const TableRow = styled.tr`
  width: 100%;
  position: relative;
  border-bottom: 2px solid black;
`;
export const TableData = styled.td`
  box-sizing: border-box;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
`;
export const ProductTitle = styled.p``;

export const ProductInfo = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PriceSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TrashIcon = styled.p`
  position: relative;
  left: 0px;
  top: 10px;
  cursor: pointer;
`;

export const TotalCost = styled.p`
  position: relative;
  left: 20px;
`;

export const ProductDetail = styled.section`
  margin-left: 10px;
`;

export const Icon = styled.i`
  margin: 5px;
`;
