import React from "react";
import Section1 from "./components/Section-1/Section1";
import Section2 from "./components/Section-2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Customers who have all their primary financial needs met efficiently.",
      color: "#2ECC71",
      scolor: "#D2B4DE",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Individuals with limited access to essential and affordable financial services.",
      color: "#F39C12",
      scolor: "#1B2631",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "People who have bank accounts but rely on alternative services.",
      color: "#5D6D7E",
      scolor: "#E67E22",
      tag: "UnderBanked",
    },
    {
      img: "https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Businesses or systems operating below the size needed for efficiency.",
      color: "#BDC3C7",
      scolor: "#2C3E50",
      tag: "Subscale",
    },
     {
      img: "https://images.unsplash.com/photo-1539343915366-4da26f7a1f2c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Extremely small entities navigating a market built for larger players.",
      color: "#9B59B6",
      scolor: "#F7DC6F",
      tag: "Diminutive",
    },
     {
      img: "https://images.unsplash.com/photo-1696664901302-cc15906e88c0?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Small but highly efficient structures designed for maximum space utility.",
      color: "#F1C40F",
      scolor: "#17202A",
      tag: "Compact",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
