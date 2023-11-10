import "../App.css";

import Colors from "../Components/Colors";
import HeaderSection from "../Components/HeadingSection/HeaderSection";

function App() {
  return (
    <>
      <div className="App">
        <HeaderSection />
      </div>
      <Colors colors="colors" typ="fonts" />
    </>
  );
}

export default App;
