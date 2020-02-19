import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../common/PraimaryButton";

const OpenCartButton = styled(PrimaryButton)`
  position: relative;
  left: calc(100% - 210px);
  top: 27px;
  padding: 20px;
  font-size: 24px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const Cart = ({ toggleModal }) => {
  return <OpenCartButton onClick={() => toggleModal()}>Cart</OpenCartButton>;
};
