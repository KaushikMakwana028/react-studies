import React from "react";
import Card from "./components/Card";
import User from "./components/User";

const App = () => {
  // const arr = [10, 20, 30, 40, 50];

  // const array = [
  //   {
  //     user: "Steven Grant",
  //     age : 39
  //   },
  //   {
  //     user: "Marc Spector",
  //     age : 39
  //   },
  //   {
  //     user: "Jake Lockley",
  //     age : 39
  //   }
  // ];

  // array.forEach(function (elem) {
  //   console.log(elem);
  // });

  const jobOpenings = [
    {
      brandLogo:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_"G"_logo.svg',
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Senior Software Engineer, Google Cloud",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$98.50",
      location: "Mountain View, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "AI Research Scientist",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$115.00",
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Development Engineer (SDE I)",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$68.00",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "Hardware Design Intern",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$45.00",
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Content Infrastructure Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$140.00",
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Azure Cloud Solutions Architect",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$88.00",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "Deep Learning Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$75.50",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      companyName: "Tesla",
      datePosted: "2 weeks ago",
      post: "Autopilot Software Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$92.00",
      location: "Palo Alto, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      companyName: "Salesforce",
      datePosted: "1 day ago",
      post: "Backend Developer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$62.00",
      location: "San Francisco, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      companyName: "IBM",
      datePosted: "4 days ago",
      post: "Backend Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$58.00",
      location: "Bengaluru, India",
    },
  ];

  return (
    <div className="parent">
      {/* <Card /> */}
      {/* <User name = {arr[0]}/>
      <User name = 'ABC'/>
      <User name = {arr[1]}/> */}

      {/* {array.map(function (elem) {
        return <h1>{elem * 2}</h1>;
      })} */}

      {jobOpenings.map(function (elem, idx) {
        console.log(idx);
        
        return (
          <div key={idx}>
            <Card
              companyName={elem.companyName}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
