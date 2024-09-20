import React, { useEffect, useRef, useState } from "react";
import LoaderComp from "../../utils/loader";
import SideBar from "../sideBar/SideBar";
import Navbar from "../navbar/Navbar";

// const BASE_URL = "http://localhost:8080/";
// const BASE_URL = "https://empiric-leap-be-91ln.vercel.app/";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function DashBoard() {
  const [selectedProject, setSelectedProject] = useState<any>();

  const [allProjectsData, setAllProjectsData] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      // console.log("BASE_URL:: ", BASE_URL)

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
            <div className="flex flex-row">
              <SideBar />
              <Navbar />
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
