import React from "react";
import "./RevenueWidget.css";

function RevenueWidget({ revenueData }: { revenueData: any }) {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        <tr>
          <td>Initial Projections</td>
          <td>$ {revenueData?.Initial_Projections}</td>
        </tr>
        <tr>
          <td>Actual Revenue</td>
          <td>$ {revenueData?.Actual_Revenue}</td>
        </tr>

        <tr>
          <td>Key Contributors</td>
          <td>{revenueData?.Key_Contributors?.join([", "])}</td>
        </tr>
      </table>
    </div>
  );
}

export default RevenueWidget;
