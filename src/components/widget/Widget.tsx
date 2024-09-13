import React, { ReactNode } from "react";
import HeaderTitle from "../headerTitle/HeaderTitle";
import { BsThreeDots } from "react-icons/bs";

import "./Widget.css";

function Widget({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="widget-root">
      <div className="widget-header">
        <HeaderTitle title={title} />
        <BsThreeDots color="var(--text-color)" size="30px" />
      </div>
      {children}
    </div>
  );
}

export default Widget;
