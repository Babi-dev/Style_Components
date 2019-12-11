import React from "react";
import { Table, Divider } from "antd";
import "./style.scss";

const TableAntd = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street"
    },
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <span className="ActionButtons">
          <button>Editar</button>
          <Divider type="vertical" />
          <button>Delete</button>
        </span>
      )
    }
  ];

  return (
    <>
      <Table className="teste" dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default TableAntd;
