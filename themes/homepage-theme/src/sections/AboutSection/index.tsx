/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx, Box } from "theme-ui";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import { Text } from "@offcourse/atoms";
import BaseSection from "../BaseSection";
import { wrapperStyles, textStyles, titleStyles } from "./styles";

export type AboutSectionProps = IBaseSection & {
  title: string;
  description: string;
} & IThemeable;

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  className,
  title,
  description,
  order,
  ...props
}) => {
  const isEven = order % 20 === 0;
  return (
    <BaseSection
      {...props}
      className={className}
      sx={{ ...wrapperStyles, bg: isEven ? "grayScale.0" : "grayScale.1" }}
    >
      <Box sx={textStyles}>
        <Styled.h1 sx={titleStyles}>{title}</Styled.h1>
        <Text html={description} />
      </Box>
    </BaseSection>
  );
};

export default AboutSection;
