import { Route, Routes } from "react-router-dom";

import LandingView from "./Views/LandingView";

// import ScrollToUp from "./Components/ScrollToUp";

function App() {
  return (
    <>
      {/* <ScrollToUp smooth /> */}
      <Routes>
        <Route path="/" element={<LandingView />} />
      </Routes>
    </>
  );
}

export default App;
