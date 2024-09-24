import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import "./DashBoard.css";
import Widget from "../../components/widget/Widget";
import HeaderTitle from "../../components/headerTitle/HeaderTitle";
import GridDemo from "../../components/barChart/BarChart";
import ScheduleWidget from "../../components/scheduleWidget/ScheduleWidget";
import ChangeOrderWidget from "../../components/changeOrderWidget/ChangeOrderWidget";

// import allData from "../../utils/allData.json";
import SafetyWidget from "../../components/safetyWidget/SafetyWidget";
import SubcontractorWidget from "../../components/subcontractorWidget/SubcontractorWidget";
import HighestBudgetVariancesWidget from "../../components/highestBudgetVariancesWidget/HighestBudgetVariancesWidget";
import RevenueWidget from "../../components/revenueWidget/RevenueWidget";
import KPIWidget from "../../components/kpiWidget/KPIWidget";
import LoaderComp from "../../utils/loader";
import RatingWidget from "../../components/ratingWidget/RatingWidget";
import SubcontracorScoreWidget from "../../components/subcontracorScoreWidget/SubcontracorScoreWidget";
import { BASE_URL } from "../../utils/contants";
import { getToken } from "../../utils/util";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const [selectedProject, setSelectedProject] = useState<any>();

  const [allProjectsData, setAllProjectsData] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getData() {
      // console.log("BASE_URL:: ", BASE_URL)

      try {
        const token = getToken();
        console.log(token);
        if (token) {
          const response = await fetch(`${BASE_URL}dashboard/getProjects/`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          const data = await response.json();
          setAllProjectsData(data);
          data?.length && setSelectedProject(data[0]);
          setLoading(false);

          console.log("data: " + data);
        } else {
          navigate("/login");
        }
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
            display: "flex",
            flex: 1,
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
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
                <div
                  style={{
                    height: "80vh",
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                  }}
                >
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
                          width: "90%",
                          gap: "5%",
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
