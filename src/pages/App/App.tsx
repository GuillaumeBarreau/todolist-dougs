import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "components/TodoList";
import { Typography } from "components/Typography";
import { Modal } from "components/Modal";
import { Header } from "components/Header";
import { TItemData } from "./App.d";
import { SvgAddComponent } from "assets/svg";

export const App = () => {
  const [getTodoData, setGetTodoData] =
    useState<TItemData[] | undefined>(undefined);
  const [newItemModal, setNewItemModal] = useState<boolean>(false);

  useEffect(() => {
    import("../../todoData.json").then((module) => {
      setGetTodoData(module.default);
    });
  }, []);

  const handleClickItem = (itemId: number): void => {
    const newTodoData = getTodoData?.map((data) => {
      if (data.id === itemId) {
        return {
          ...data,
          checked: !data.checked,
        };
      }
      return data;
    });
    setGetTodoData(newTodoData);
  };

  const handleClickAddItem = (fromData: {
    description: string;
    startDatetime: string;
    endDatetime: string;
  }): void => {
    setNewItemModal(false);

    const addNewItemInTodoData: TItemData = {
      id: Date.now(),
      description: fromData.description,
      startTime: new Date(fromData.startDatetime).getTime() / 1000 + 7200,
      endTime: new Date(fromData.endDatetime).getTime() / 1000 + 7200,
      checked: false,
    };

    getTodoData
      ? setGetTodoData([...getTodoData, addNewItemInTodoData])
      : setGetTodoData([addNewItemInTodoData]);
  };

  const handleClickOpenModalNewItem = (): void => {
    setNewItemModal(true);
  };

  return (
    <div className="app">
      <Header></Header>
      {getTodoData && (
        <TodoList handleClickItem={handleClickItem} todoData={getTodoData} />
      )}
      {(newItemModal && (
        <Modal handleClickAddItem={handleClickAddItem}></Modal>
      )) || (
        <>
          <button className="app-button" onClick={handleClickOpenModalNewItem}>
            <SvgAddComponent></SvgAddComponent>
            <Typography className="typography-bold">
              Add Task for Today
            </Typography>
          </button>
        </>
      )}
    </div>
  );
};
