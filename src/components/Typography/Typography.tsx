import React from "react";
import classNames from "classnames";
import { TTypographyProps } from "./Typography.d";
import "./Typography.css";

export const Typography: React.FC<TTypographyProps> = (props) => {
  const { className, font, children, size = "medium", variant = "p" } = props;

  const prefixCls: string = "typography";
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${font}`]: font,
      [`${prefixCls}-${size}`]: size,
    },
    className
  );

  const typographyNode = React.createElement(
    variant,
    {
      className: classes,
    },
    children
  );

  return typographyNode;
};
