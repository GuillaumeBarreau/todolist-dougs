import React from "react";
import classNames from "classnames";
import { TTodoListProps } from "./Header.d";
import "./Header.css";
import { Typography } from "components/Typography";
import {
  SvgMenuComponent,
  SvgCalendarComponent,
  SvgLoupeComponent,
  SvgListComponent,
  SvgStarComponent,
} from "assets/svg";

export const Header: React.FC<TTodoListProps> = (props) => {
  const { className } = props;

  const prefixCls: string = "header";
  const classes = classNames(prefixCls, {}, className);

  const HeaderNode = (
    <header className={classes}>
      <div className="header-containt--left">
        <ul>
          <li>
            <SvgListComponent />
          </li>
          <li>
            <SvgCalendarComponent />
          </li>
          <li>
            <SvgStarComponent />
          </li>
        </ul>
        <ul>
          <li className="header-list--active">
            <Typography className="header-list-active" size="small">
              Tasks
            </Typography>
          </li>
          <li>
            <Typography className="header-list" size="small">
              Archive
            </Typography>
          </li>
        </ul>
      </div>
      <div className="header-containt--right">
        <ul>
          <li>
            <SvgMenuComponent />
          </li>
          <li>
            <SvgLoupeComponent />
          </li>
        </ul>
      </div>
    </header>
  );

  return HeaderNode;
};
