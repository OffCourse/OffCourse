/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI } from "theme-ui";
import {
  IThemeable,
  ICanvasProps,
  IShapeProps
} from "@offcourse/interfaces/src";
import { wrapperStyles } from "./styles";
import { Backdrop as BD } from "@offcourse/atoms";
import { circle } from "./shapes";
import { useAnimatedGridCanvas } from "./hooks";

type BackdropProps = IThemeable &
  ICanvasProps & { unitSize: number; shape: (args: IShapeProps) => void };

const Backdrop: FunctionComponent<BackdropProps> = ({
  className,
  width = 100,
  height = 100,
  shape = circle,
  unitSize = 20
}) => {
  const { theme }: any = useThemeUI();
  const { primary, grayScale } = theme.colors;
  const canvasRef = useAnimatedGridCanvas({
    width,
    height,
    unitSize,
    colors: [primary, grayScale[0]],
    shape
  });
  return <BD sx={wrapperStyles} ref={canvasRef} className={className} />;
};

export default Backdrop;
