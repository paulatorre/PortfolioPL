import React, { useState } from "react";
import "./styles.css";
import info from "./Info/info";
import InfoCard from "./Components/InfoCard";
import MenuBar from "./Components/MenuBar";
import RrssIcons from "./Components/RrssIcons";
import Home from "./Components/Home";
import ResumeItem from "./Components/Resumeitem";
import ExpCard from "./Components/ExpCard";
import experience from "./Info/experience";
import TimeLine from "./Components/TimeLine";
import education from "./Info/education";
import skills from "./Info/skills";
import SkillsList from "./Components/SkillsList";
import Burger from "./Components/Burger";
import OtherInterests from "./Components/OtherInterests";

export default function App() {
  const experienceComponent = experience.map(item => <ExpCard item={item} />);
  const educationComponent = education.map(item => <TimeLine item={item} />);
  const skillsComponent = skills.map(skill => <SkillsList {...skill} />);

  const [isOpen, setOpen] = useState(false);
  const openSidebar = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="App">
      <div className="container">
        <section className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
          <InfoCard info={info} />
          <MenuBar />
          <RrssIcons />
        </section>
        <main>
          <Burger click={openSidebar} />
          <Home id="home" />
          <ResumeItem title="about me" subtitle="who am i?">
            <p>
              Hi! I'm Paula Latorre. I have experience in project coordination,
              team and customer management. What I've liked most of every job
              I've had is established new networks based on trust, because it
              makes everything thrive. I love new challenges and my current
              focus is to become a Web Developer and an E-Commerce expert.
            </p>
          </ResumeItem>

          <ResumeItem title="experience" subtitle="work experience" />
          <div className="resumeItem-div"> {experienceComponent}</div>
          <ResumeItem title="my speciality" subtitle="my skills" />
          <div className="skills-container"> {skillsComponent}</div>
          <ResumeItem title="education" subtitle="what i studied?" />
          <div className="timeline-container"> {educationComponent}</div>

          <ResumeItem title="other" subtitle="Other Interests" />
          <OtherInterests />
        </main>
      </div>
    </div>
  );
}
