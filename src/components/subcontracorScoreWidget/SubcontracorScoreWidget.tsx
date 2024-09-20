import React from "react";
import "./SubcontracorScoreWidget.css";

function SubcontracorScoreWidget({ scoreData }: { scoreData: any[] }) {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        <tr className="border-below">
          <td className="td-header">Subcontractor </td>
          <td className="td-header">Overall Score</td>
        </tr>
        {scoreData?.map((data) => {
          return (
            <tr className="border-below">
              <td>{data?.subcontractor}</td>
              <td>{data?.overall_score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default SubcontracorScoreWidget;
