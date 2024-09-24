import React from "react";
import "./SafetyWidget.css";

function SafetyWidget() {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        <tr key={1}>
          <td>Manhours</td>
          <td></td>
        </tr>
        <tr key={2}>
          <td>Recordables</td>
          <td></td>
        </tr>

        <tr key={3}>
          <td>Near Misses</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default SafetyWidget;
