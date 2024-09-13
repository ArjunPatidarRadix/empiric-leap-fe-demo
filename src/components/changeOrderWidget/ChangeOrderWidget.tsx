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
        <tr>
          <td>Qty</td>
          <td className="cell-data">{rfiChangeOrderData?.qty}</td>
        </tr>
        <tr>
          <td>Turn Time</td>
          <td className="cell-data">{rfiChangeOrderData?.turn_time}</td>
        </tr>
      </table>
    </div>
  );
}

export default ChangeOrderWidget;
