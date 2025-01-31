import React, { useEffect, useState } from "react";

import PageTitle from "../../common/PageTitle";
import Card from "./Card";

const Dashboard = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <div className="wrapper bg-light min-vh-100 d-flex-column align-items-center just">
        <PageTitle title="Dashboard" />
        <Card data={data} />
      </div>
    </>
  );
};

export default Dashboard;
