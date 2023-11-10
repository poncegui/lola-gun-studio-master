import "../App.css";

import Colors from "../Components/Colors";
import HeaderSection from "../Components/HeadingSection/HeaderSection";
import VideoMadrid from "../Components/VideoMadrid";

function App() {
  return (
    <>
      <div className="App">
        <HeaderSection />
      </div>
      <Colors colors="colors" typ="fonts" />
      <VideoMadrid />
    </>
  );
}

export default App;
