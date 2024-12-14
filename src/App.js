import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import UpdatePage from "./Pages/UpdatePage";
import Error404 from "./components/shared/Error404";
import CommitteesPage from "./Pages/CommitteesPage";
import CallForPapersPage from "./Pages/PapersPage/CallForPapersPage";
import RegistrationPage from "./Pages/PapersPage/RegistrationPage";
import AboutBhubaneswarPage from "./Pages/AttendingConference/AboutBhubaneswarPage";
import Navbar from "./components/shared/Navbar";
import TpcCommitteePage from "./Pages/TpcCommitteePage";
import ContactPage from "./Pages/ContactPage";
import CameraReadyPage from "./Pages/AttendingConference/CameraReadyPage";
import ProgramSchedulePage from "./Pages/Program/ProgramSchedulePage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`App ${
        loading && "min-w-screen min-h-screen flex justify-center items-center"
      } bg-[#ffffff]`}
    >
      {loading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/organisingcommittee" element={<CommitteesPage />} />
              <Route path="/papers" element={<UpdatePage name={"Papers"} />} />
              <Route path="/program" element={<UpdatePage name={"Program"} />} />
              <Route path="/conferences" element={<UpdatePage name={"Conferences"} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/callforpapers" element={<CallForPapersPage />} />
              <Route path="/technicalprogramcommittee" element={<TpcCommitteePage />} />
              <Route path="/cameraready" element={<CameraReadyPage/>} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route
                path="/internationaladvisorycommittee"
                element={
                  <UpdatePage name={"International advisory committee"} />
                }
              />
              <Route path="/accommodation" element={<UpdatePage name={"Accommodation"} />} />
              <Route path="/aboutbhubaneswar" element={<AboutBhubaneswarPage />} />
              <Route path="/programschedule" element={<ProgramSchedulePage/> } />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
