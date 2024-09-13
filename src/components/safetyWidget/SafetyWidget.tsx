import React from "react";
import "./SafetyWidget.css";

function SafetyWidget() {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        <tr>
          <td>Manhours</td>
          <td></td>
        </tr>
        <tr>
          <td>Recordables</td>
          <td></td>
        </tr>

        <tr>
          <td>Near Misses</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default SafetyWidget;
