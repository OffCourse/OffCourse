import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Field } from "formik";
import { IInput, IStylable } from "../interfaces";

const StyledField = styled(Field)``;

const RadioButton: FunctionComponent<IInput & IStylable> = styled(
  ({ className, checked, label, id, name, value }) => {
    return (
      <div className={className}>
        <StyledField id={id} type="radio" name={name} value={value} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
)`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;

  ${StyledField} {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${({ theme }) => theme.grayScale[1]};
    margin: 0;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    outline: none;
    :checked {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  label {
    padding: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 2rem 1fr;
    grid-gap: 1rem;
    ${StyledField} {
      height: 2rem;
      width: 2rem;
    }
  }
`;

const RadioButtonGroup: FunctionComponent<IInput & IStylable> = ({
  className,
  name,
  options
}) => {
  return (
    <div className={className}>
      {options.map(props => {
        const id = `${name}-${props.value}`;
        return <RadioButton key={id} name={name} {...props} />;
      })}
    </div>
  );
};

export default styled(RadioButtonGroup)`
  display: grid;
  grid-gap: 0.5rem;
  padding: ${({ theme }) => theme.space[4]} 0;
`;
