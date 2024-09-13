import React, { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import "./DashBoard.css";
import Widget from "../widget/Widget";
import HeaderTitle from "../headerTitle/HeaderTitle";
import GridDemo from "../barChart/BarChart";
import ScheduleWidget from "../scheduleWidget/ScheduleWidget";
import ChangeOrderWidget from "../changeOrderWidget/ChangeOrderWidget";

// import allData from "../../utils/allData.json";
import SafetyWidget from "../safetyWidget/SafetyWidget";
import SubcontractorWidget from "../subcontractorWidget/SubcontractorWidget";
import HighestBudgetVariancesWidget from "../highestBudgetVariancesWidget/HighestBudgetVariancesWidget";
import RevenueWidget from "../revenueWidget/RevenueWidget";
import KPIWidget from "../kpiWidget/KPIWidget";
import LoaderComp from "../../utils/loader";
import RatingWidget from "../ratingWidget/RatingWidget";
import SubcontracorScoreWidget from "../subcontracorScoreWidget/SubcontracorScoreWidget";

const BASE_URL = "https://empiric-leap-be-91ln.vercel.app/";

function DashBoard() {
  const [selectedProject, setSelectedProject] = useState<any>();

  const [allProjectsData, setAllProjectsData] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const response = await fetch(`${BASE_URL}getProjects/`);

        const data = await response.json();
        setAllProjectsData(data);
        data?.length && setSelectedProject(data[0]);
        setLoading(false);

        console.log("data: " + data);
      } catch (error) {
        console.log("error: " + error);
      }
    }

    getData();
  }, []);

  const listItems = useRef<any>(null);

  useEffect(() => {
    const lastItem = listItems?.current?.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100px",
            margin: "auto",
          }}
        >
          <LoaderComp />
        </div>
      ) : (
        <>
          {selectedProject && allProjectsData.length ? (
            <div className="dashboard">
              <SideBar />
              <div className="data-container">
                <Header
                  projectData={allProjectsData}
                  setSelectedProject={setSelectedProject}
                />
                <div style={{ height: "80vh", overflowY: "scroll" }}>
                  <HeaderTitle
                    title={`Project - ${selectedProject.project_name}`}
                  />
                  <div className="grid-root">
                    <Widget title="Budget">
                      <GridDemo budget={selectedProject?.budget} />
                    </Widget>
                    <div>
                      <Widget title="Schedule">
                        <ScheduleWidget
                          scheduleData={selectedProject?.schedule}
                        />
                      </Widget>
                      <Widget title="Safety">
                        <SafetyWidget />
                      </Widget>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <Widget title="RFIs">
                          <ChangeOrderWidget
                            rfiChangeOrderData={selectedProject.RFIs}
                          />
                        </Widget>

                        <Widget title="Change Orders">
                          <ChangeOrderWidget
                            rfiChangeOrderData={selectedProject.change_orders}
                          />
                        </Widget>
                      </div>
                      <Widget title="Team Experience">
                        <RatingWidget></RatingWidget>
                      </Widget>
                    </div>
                    <Widget title="Key Insights">
                      <></>
                    </Widget>
                    <Widget title="Subcontractor Performance">
                      <SubcontractorWidget
                        subcontractorData={
                          selectedProject.financial_performance
                            ?.subcontractor_performance
                        }
                      />
                    </Widget>
                    <div>
                      <Widget title="Highest Budget Variances">
                        <HighestBudgetVariancesWidget
                          budgetVariancesData={
                            selectedProject?.financial_performance
                              ?.Highest_Budget_Variances
                          }
                        />
                      </Widget>
                      <Widget title="GCs to Budget">
                        <SafetyWidget />
                      </Widget>
                    </div>
                    <Widget title="Revenues">
                      <RevenueWidget
                        revenueData={
                          selectedProject?.financial_performance?.revenue
                        }
                      />
                    </Widget>
                    <Widget title="Key Insights">
                      <></>
                    </Widget>

                    <Widget title="KPIs (Self-Reported)">
                      <KPIWidget
                        kpiData={selectedProject?.team_performance.KPIs}
                      />
                    </Widget>

                    <Widget title="Subcontractor score">
                      <SubcontracorScoreWidget
                        scoreData={
                          selectedProject?.team_performance
                            .Subcontractor_Performance
                        }
                      />
                    </Widget>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default DashBoard;
