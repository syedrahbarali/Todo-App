import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Tasks from "../pages/tasks/Tasks";
import CreateTask from "../pages/createTask/CreateTask";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Tasks />} />
            <Route path="/create-task" element={<CreateTask />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
