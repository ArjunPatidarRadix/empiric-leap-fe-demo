import React from "react";
import "./ScheduleWidget.css";
import { LuLineChart } from "react-icons/lu";
import { getOverPercentage } from "../../utils/util";

function ScheduleWidget({ scheduleData }: { scheduleData: any }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <table className="schedule-table" border={0} cellPadding={3}>
          <tr key={1}>
            <td>Original</td>
            {scheduleData?.original ? (
              <td>{`${scheduleData?.original} days`}</td>
            ) : (
              <td></td>
            )}
          </tr>
          <tr key={2}>
            <td>Actual</td>
            {scheduleData?.actual ? (
              <td>{`${scheduleData?.actual} days`}</td>
            ) : (
              <td></td>
            )}
          </tr>

          <tr key={3}>
            <td>Difference</td>
            {scheduleData?.difference ? (
              <td>{`${scheduleData?.difference} days`}</td>
            ) : (
              <td></td>
            )}
          </tr>
        </table>
        <div className="near-row">
          <LuLineChart color="var(--accent-color)" size="30px" />
          <span className="yellow-text">
            Over{" "}
            {getOverPercentage(scheduleData?.original, scheduleData?.actual)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScheduleWidget;
