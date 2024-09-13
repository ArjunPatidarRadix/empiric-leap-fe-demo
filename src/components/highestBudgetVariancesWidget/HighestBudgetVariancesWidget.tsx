import React from "react";
import "./HighestBudgetVariancesWidget.css";

function HighestBudgetVariancesWidget({
  budgetVariancesData,
}: {
  budgetVariancesData: any[];
}) {
  return (
    <div>
      <table className="schedule-table" border={0} cellPadding={3}>
        {budgetVariancesData?.map((data) => {
          return (
            <tr>
              <td>{data?.subcontractor}</td>
              <td>$ {data?.budget_variance}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default HighestBudgetVariancesWidget;
