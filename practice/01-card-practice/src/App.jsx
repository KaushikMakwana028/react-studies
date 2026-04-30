import React from "react";
import Card from "./components/Card";

import ironman from "./assets/ironman.jpeg";
import captain from "./assets/captain.jpeg";
import thor from "./assets/thor.jpeg";
import hulk from "./assets/hulk.jpeg";
import widow from "./assets/widow.jpeg";
import spiderman from "./assets/spiderman.jpeg";
import blackpanther from "./assets/blackpanther.jpeg";
import loki from "./assets/loki.jpeg";
import moonknight from "./assets/moonknight.jpeg";
import wolverine from "./assets/wolverine.jpeg";
import rocket from "./assets/rocket.jpeg";
import daredevil from "./assets/daredevil.jpeg";

const App = () => {
  const users = [
    {
      status: "Available",
      profileImage: ironman,
      name: "Tony Stark",
      post: "UI/UX Designer",
      contractor: "Epic Coder",
      pill1: "UI",
      pill2: "UX",
      pill3: "Photoshop",
      pill4: "+5",
      pay: "$120/hr",
      description:
        "Genius billionaire designer building futuristic intuitive user experiences daily",
    },
    {
      status: "Unavailable",
      profileImage: captain,
      name: "Steve Rogers",
      post: "Frontend Developer",
      contractor: "Freelancer",
      pill1: "HTML",
      pill2: "CSS",
      pill3: "JavaScript",
      pill4: "+3",
      pay: "$60/hr",
      description:
        "Disciplined developer creating clean responsive layouts with strong principles",
    },
    {
      status: "Available",
      profileImage: thor,
      name: "Thor Odinson",
      post: "Mobile Developer",
      contractor: "Epic Coder",
      pill1: "Android",
      pill2: "iOS",
      pill3: "Kotlin",
      pill4: "+6",
      pay: "$95/hr",
      description:
        "Powerful mobile engineer crafting lightning fast scalable applications globally",
    },
    {
      status: "Available",
      profileImage: hulk,
      name: "Bruce Banner",
      post: "Backend Developer",
      contractor: "Freelancer",
      pill1: "NodeJS",
      pill2: "MongoDB",
      pill3: "API",
      pill4: "+4",
      pay: "$80/hr",
      description:
        "Scientist developer building robust APIs and high performance backend systems",
    },
    {
      status: "Unavailable",
      profileImage: widow,
      name: "Natasha Romanoff",
      post: "Security Engineer",
      contractor: "Epic Coder",
      pill1: "Security",
      pill2: "Network",
      pill3: "Encryption",
      pill4: "+7",
      pay: "$110/hr",
      description:
        "Expert in cybersecurity protecting systems with stealth precision strategies daily",
    },
    {
      status: "Available",
      profileImage: spiderman,
      name: "Peter Parker",
      post: "Full Stack Developer",
      contractor: "Freelancer",
      pill1: "React",
      pill2: "Node",
      pill3: "MongoDB",
      pill4: "+8",
      pay: "$70/hr",
      description:
        "Young developer balancing frontend and backend to deliver dynamic applications",
    },
    {
      status: "Unavailable",
      profileImage: blackpanther,
      name: "T'Challa",
      post: "Cloud Architect",
      contractor: "Epic Coder",
      pill1: "AWS",
      pill2: "Azure",
      pill3: "DevOps",
      pill4: "+6",
      pay: "$115/hr",
      description:
        "Strategic architect designing scalable secure cloud infrastructures for enterprises",
    },
    {
      status: "Available",
      profileImage: loki,
      name: "Loki",
      post: "Game Developer",
      contractor: "Epic Coder",
      pill1: "Unity",
      pill2: "C#",
      pill3: "3D",
      pill4: "+12",
      pay: "$100/hr",
      description:
        "Mischievous developer building immersive engaging and unpredictable gaming experiences",
    },
    {
      status: "Available",
      profileImage: moonknight,
      name: "Moon Knight",
      post: "Security Analyst",
      contractor: "Freelancer",
      pill1: "Security",
      pill2: "Night Ops",
      pill3: "Combat",
      pill4: "+9",
      pay: "$90/hr",
      description:
        "Vigilante analyst protecting systems using stealth intelligence and night operations",
    },
    {
      status: "Unavailable",
      profileImage: wolverine,
      name: "Wolverine",
      post: "System Engineer",
      contractor: "Epic Coder",
      pill1: "C++",
      pill2: "Systems",
      pill3: "Debugging",
      pill4: "+9",
      pay: "$95/hr",
      description:
        "Rugged engineer solving complex system level problems with extreme efficiency daily",
    },
    {
      status: "Available",
      profileImage: rocket,
      name: "Rocket",
      post: "DevOps Engineer",
      contractor: "Freelancer",
      pill1: "Docker",
      pill2: "AWS",
      pill3: "CI/CD",
      pill4: "+7",
      pay: "$85/hr",
      description:
        "Smart DevOps engineer automating deployments and managing scalable cloud infrastructure",
    },
    {
      status: "Available",
      profileImage: daredevil,
      name: "Daredevil",
      post: "Legal Analyst",
      contractor: "Freelancer",
      pill1: "Law",
      pill2: "Security",
      pill3: "Investigation",
      pill4: "+8",
      pay: "$85/hr",
      description:
        "Blind lawyer fighting injustice using sharp skills and fearless determination daily",
    },
  ];
  return (
    <div>
      <div className="parent">
        {users.map(function (elem, index) {
          return (
            <div key={index}>
              <Card
                status={elem.status}
                profileImage={elem.profileImage}
                name={elem.name}
                post={elem.post}
                contractor={elem.contractor}
                pill1={elem.pill1}
                pill2={elem.pill2}
                pill3={elem.pill3}
                pill4={elem.pill4}
                pay={elem.pay}
                description={elem.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
