import React from "react";
import "./ChangeOrderWidget.css";

function ChangeOrderWidget({
  rfiChangeOrderData,
}: {
  rfiChangeOrderData: any;
}) {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        <tr key={1}>
          <td>Qty</td>
          <td className="cell-data">{rfiChangeOrderData?.qty}</td>
        </tr>
        <tr key={2}>
          <td>Turn Time</td>
          <td className="cell-data">{rfiChangeOrderData?.turn_time}</td>
        </tr>
      </table>
    </div>
  );
}

export default ChangeOrderWidget;
