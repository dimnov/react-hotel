import styled from "styled-components";
import Heading from "./Heading";

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
`;

function Empty({ resource }) {
  return (
    <StyledEmpty>
      <Heading as="h2">No {resource} could be found.</Heading>
    </StyledEmpty>
  );
}

export default Empty;
