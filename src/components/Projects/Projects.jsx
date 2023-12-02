import React from "react";
import Sample from "./Sample";
import ShowMore from "./ShowMore";

function Projects() {
  const projectData = [
    {
      title: "Technical Card",
      descriptions: [
        "▶️ This is a multi-page website with 20 pages that are all fully responsive.",
        "▶️  The Figma design was provided by the client, and a pixel-perfect and user-friendly web and mobile interfaces were created by me based on the design.",
      ],
      techStacks: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Sass",
        "JavaScript",
        "Gulp.js",
      ],
      gitHubLink: "https://github.com/cnkilic/Technical-Card",
      externalLink: "https://www.teknikkart.com.tr/",
      image: "/assets/images/tKartwBg.png",
      imgLocation: "right",
    },
    {
      title: "Chef's Meals",
      descriptions: [
        "▶️ A prototype food order page for a prototype bussiness called Chef's Meals. It's fully responsive and dynamic.",
        "▶️ After confirmation of the order, the app stores your order summary and address details in the database.",
      ],
      techStacks: ["React", "CSS3", "JavaScript", "API", "Firebase"],
      gitHubLink: "https://github.com/cnkilic/Food-Order-App",
      externalLink: "https://food-order-app-reactmeals.netlify.app/",
      image: "/assets/images/chefsMeals.png",
      imgLocation: "left",
    },
    {
      title: "Great Quotes",
      descriptions: [
        "▶️ This app allows users to generate quotes and share their thoughts or opinions by adding comments.",
        "▶️ After selecting a quote, users can submit a comment, which will be saved in the database.",
      ],
      techStacks: ["React.js", "CSS3", "JavaScript", "API", "Firebase"],
      gitHubLink: "https://github.com/cnkilic/Great-Quotes-App",
      externalLink: "https://great-quotes-app-react.netlify.app/",
      image: "/assets/images/greatQuotes.png",
      imgLocation: "right",
    },
    {
      title: "Expense Table",
      descriptions: [
        "This app is a budget tracking tool that separates expenses by year and displays them through proportional charts.",
      ],
      techStacks: ["React", "JavaScript", "CSS3"],
      gitHubLink: "https://github.com/cnkilic/Expense-Table-Chart",
      externalLink: "https://expense-table-chart.netlify.app/",
      image: "/assets/images/expenseTable.png",
      imgLocation: "left",
    },
    {
      title: "Simon Game",
      descriptions: [
        "In this game player's objective is to remember and repeat the light sequence correctly to level up with increasing complexity.",
      ],
      techStacks: ["JavaScript", "HTML5", "CSS3"],
      gitHubLink: "https://github.com/cnkilic/The_Simon_Game",
      externalLink: "https://cnkilic.github.io/The_Simon_Game/",
      image: "/assets/images/simonGame.png",
      imgLocation: "left",
    },
    {
      title: "Drum Kit",
      descriptions: [
        "This is a prototype drum kit designed for entertainment and music enthusiasts, playable with keyboard and mouse.",
      ],
      techStacks: ["JavaScript", "HTML5", "CSS3"],
      gitHubLink: "https://github.com/cnkilic/Drum_Kit",
      externalLink: "https://cnkilic.github.io/Drum_Kit/",
      image: "/assets/images/drumKit.png",
      imgLocation: "left",
    },
  ];

  return (
    <section id="Projects">
      <div className="container max-w-full py-6 md:py-8 xl:py-12 px-4 md:px-16 lg:px-20 xl:px-24 2xl:px-32 bg-zinc-100 ">
        <h1 className="text-2xl md:text-2xll xl:text-3xl font-bold mb-6 md:mb-8 lg:mb-10 xl:mb-16  text-center">My Projects</h1>
        {projectData.slice(0, 3).map((project) => (
          <Sample
            key={project.title}
            title={project.title}
            descriptions={project.descriptions}
            techStacks={project.techStacks}
            gitHubLink={project.gitHubLink}
            externalLink={project.externalLink}
            image={project.image}
            imgLocation={project.imgLocation}
          />
        ))}

        <ShowMore showMoreData={projectData.slice(3)} />
      </div>
    </section>
  );
}

export default Projects;
