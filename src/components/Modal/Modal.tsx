import React, { useState } from "react";
import classNames from "classnames";
import { TModalProps } from "./Modal.d";
import "./Modal.css";
import { Typography } from "components/Typography";

export const Modal: React.FC<TModalProps> = (props) => {
  const { className, handleClickAddItem } = props;
  const [inputValueStartDatetime, setInputValueStartDatetime] =
    useState<string>("");
  const [inputValueEndDatetime, setInputValueEndDatetime] =
    useState<string>("");
  const [inputValueDescription, setInputValueDescription] =
    useState<string>("");

  const prefixCls: string = "modal";
  const classes = classNames(prefixCls, {}, className);

  const fieldsIsValid =
    inputValueDescription &&
    inputValueStartDatetime &&
    inputValueEndDatetime &&
    inputValueStartDatetime <= inputValueEndDatetime
      ? true
      : false;

  const ModalNode = (
    <section className={classes}>
      <form className="modal-section">
        <label>
          <Typography>Description :</Typography>
          <input
            type="text"
            name="description"
            className="input-type--text"
            value={inputValueDescription}
            onChange={(e) => setInputValueDescription(e.target.value)}
          />
        </label>
        <label className="app-wrapper--input">
          <Typography>Date Start :</Typography>
          <input
            type="datetime-local"
            name="startDateTime"
            className="input-type--datetime"
            value={inputValueStartDatetime}
            onChange={(e) => setInputValueStartDatetime(e.target.value)}
          />
        </label>
        <label className="app-wrapper--input">
          <Typography>Date End :</Typography>
          <input
            type="datetime-local"
            name="endDateTime"
            className="input-type--datetime"
            value={inputValueEndDatetime}
            onChange={(e) => setInputValueEndDatetime(e.target.value)}
          />
        </label>
        {inputValueStartDatetime > inputValueEndDatetime && (
          <Typography size="small" className="typography-bold">
            The End-date cannot be less than the Start-date
          </Typography>
        )}
        {fieldsIsValid && (
          <input
            className="input-type--submit"
            type="button"
            value="Add"
            onClick={() =>
              handleClickAddItem({
                description: inputValueDescription,
                startDatetime: inputValueStartDatetime,
                endDatetime: inputValueEndDatetime,
              })
            }
          />
        )}
      </form>
    </section>
  );

  return ModalNode;
};
