import React from "react";
import classNames from "classnames";
import { TTodoItemProps } from "./TodoItem.d";
import "./TodoItem.css";
import { Typography } from "components/Typography";
import { convertSecondsToHour } from "../../utils/utils";
import { SvgPinComponent, SvgCalendarComponent } from "assets/svg";

export const TodoItem: React.FC<TTodoItemProps> = (props) => {
  const { className, element, timeEvent, handleClickItem } = props;

  const prefixCls: string = "todoItem";
  const classes = classNames(prefixCls, {}, className);

  const TodoItemNode = (
    <li className={classes} onClick={handleClickItem}>
      <div className="todoItem-containt">
        {element.checked ? (
          <SvgCalendarComponent></SvgCalendarComponent>
        ) : (
          <span className="todoItem-icon"> </span>
        )}
        <Typography>{element.description}</Typography>
        {!element.checked && <SvgPinComponent></SvgPinComponent>}
        <Typography className="todoItem--screen" size="small">
          {`${convertSecondsToHour(element.startTime)} - ${convertSecondsToHour(
            element.endTime
          )}`}
        </Typography>
      </div>
      <Typography size="small">{timeEvent}</Typography>
    </li>
  );

  return TodoItemNode;
};
