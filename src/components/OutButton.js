import React from "react";
import { RoundButton, StyledLink } from "../styles";

import { FaArrowAltCircleLeft } from "react-icons/fa";

function OutButton() {
  return (
    <StyledLink to="/home">
      <RoundButton primary>
        <FaArrowAltCircleLeft />
      </RoundButton>
    </StyledLink>
  );
}

export default OutButton;
