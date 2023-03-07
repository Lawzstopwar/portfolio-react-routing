import React from "react";
import Project from "./Project";

function ProjectGallery() {
  const data = [
    {
      id: 1,
      title: "Weather Forecast",
      github_link: "https://github.com/Lawzstopwar/5-day-weather-forecast/",
      deployed_link: "https://lawzstopwar.github.io/5-day-weather-forecast/",
      image: "https://github.com/Lawzstopwar/5-day-weather-forecast/raw/main/assets/5-day-forecast.png"
    },
    {
      id: 2,
      title: "Work Day Schedular",
      github_link: "https://https://github.com/Lawzstopwar/Work-Day-Scheduler",
      deployed_link: "https://lawzstopwar.github.io/Work-Day-Scheduler/",
      image: "https://github.com/Lawzstopwar/Work-Day-Scheduler/raw/main/images/Animated-Work-Scheduler.gif"
    },
    {
      id: 3,
      title: "Challenge README.md",
      github_link: "https://github.com/Lawzstopwar/ChallengeReadme",
      deployed_link: "https://lawzstopwar.github.io/ChallengeReadme/",
      image: "https://github.com/Lawzstopwar/ChallengeReadme/raw/main/images/README.md-test-run.gif"
    },

  ]


  return (
    <div>
      <h1>Project Gallery Page</h1>
      <div className="d-flex justify-space-around w-500">
        <Project 
          image={data[0].image}
          title={data[0].title}
          deployed_link={data[0].deployed_link}
          github_link={data[0].github_link}
        />
        <Project 
          image={data[1].image}
          title={data[1].title}
          deployed_link={data[1].deployed_link}
          github_link={data[1].github_link}
        />
        <Project 
          image={data[2].image}
          title={data[2].title}
          deployed_link={data[2].deployed_link}
          github_link={data[2].github_link}
        />
      </div>
    </div>
  );
}

export default ProjectGallery;
