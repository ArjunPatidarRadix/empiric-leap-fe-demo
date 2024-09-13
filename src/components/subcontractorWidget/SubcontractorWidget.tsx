import React from "react";
import "./SubcontractorWidget.css";

function SubcontractorWidget({
  subcontractorData,
}: {
  subcontractorData: any[];
}) {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        <tr className="border-below">
          <td className="td-header">Subcontractor</td>
          <td className="td-header">Original Estimate</td>
          <td className="td-header">Final Cost</td>
        </tr>
        {subcontractorData?.map((data) => {
          return (
            <tr className="border-below">
              <td>{data?.subcontractor}</td>
              <td>$ {data?.original_estimate}</td>
              <td>$ {data?.final_cost}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default SubcontractorWidget;
