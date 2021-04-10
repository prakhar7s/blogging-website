import "./App.scss";

import sectionOne from "./assets/data/sectionOne";
import Section from "./components/section/section.component";
import LandingPage from "./components/landing-page/landing-page.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="app">
      <Header />
      <LandingPage />
      <main>
        <Section
          cardData={sectionOne}
          sectionHeading={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsa?"
          }
        />
      </main>
    </div>
  );
}

export default App;
