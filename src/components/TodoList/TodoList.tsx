import React from "react";
import classNames from "classnames";
import { TTodoListProps } from "./TodoList.d";
import "./TodoList.css";
import { TodoItem } from "components/TodoItem";
import { Typography } from "../Typography/Typography";
import { calculTimeEvent } from "../../utils/utils";

export const TodoList: React.FC<TTodoListProps> = (props) => {
  const { className, todoData, handleClickItem } = props;

  const prefixCls: string = "todoList";
  const classes = classNames(prefixCls, {}, className);

  const timeEvents = todoData.reduce((prev, curr) => {
    return prev + (curr.endTime - curr.startTime);
  }, 0);

  const TodoListNode = (
    <section className={classes}>
      <div>
        <Typography variant="h1" size="xlarge">
          Today
        </Typography>
        <Typography className="typography-bold">
          {calculTimeEvent(timeEvents)}
        </Typography>
      </div>
      <ul>
        {todoData
          .sort((a, b) => a.startTime - b.startTime)
          .map((element) => {
            return (
              <TodoItem
                key={element.id}
                handleClickItem={() => handleClickItem(element.id)}
                element={element}
                timeEvent={calculTimeEvent(element.endTime - element.startTime)}
              />
            );
          })}
      </ul>
    </section>
  );

  return TodoListNode;
};
