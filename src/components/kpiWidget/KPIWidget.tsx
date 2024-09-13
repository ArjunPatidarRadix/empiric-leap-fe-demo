import React from "react";
import "./KPIWidget.css";

function KPIWidget({ kpiData }: { kpiData: any[] }) {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        <tr className="border-below">
          <td className="td-header">Performance Indicator </td>
          <td className="td-header">Overall Score</td>
        </tr>
        {kpiData?.map((data) => {
          return (
            <tr className="border-below">
              <td>{data?.performance_indicator}</td>
              <td>{data?.overall_score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default KPIWidget;
