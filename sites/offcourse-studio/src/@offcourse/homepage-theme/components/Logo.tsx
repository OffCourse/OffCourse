import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { useGetAllSections } from "@offcourse/homepage-theme/src/hooks";
import { IThemeable } from "@offcourse/interfaces";

const Logo: FunctionComponent<IThemeable> = ({ className }) => {
  const { siteName } = useGetAllSections();
  return <DisplayText className={className}>{siteName}</DisplayText>;
};

export default styled(Logo)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    margin-right: 0;
  }
`;
