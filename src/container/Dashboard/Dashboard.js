import React from "react";
import Table from "../../components/Table/Table";

const Dashboard = () => {
  const apiRet = [
    {
      nome: "Carlos",
      emai: "carlos@outlook.com",
      idade: "20"
    },
    {
      nome: "Carlos",
      emai: "carlos@outlook.com",
      idade: "20"
    }
  ];

  const titleHeader = [
    {
      title: "Nome"
    },
    {
      title: "Email"
    },
    {
      title: "Idade"
    }
  ];

  return <Table Data={titleHeader} Columns={apiRet} />;
};

export default Dashboard;
