import React, { useState } from "react";
import "./BookingReq.css";
import { Button, Flex, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import SessionDetails from "./SessionDrawer";

export const BookingReq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const dataSource = [
    {
      key: "1",
      img: (
        <div className="table-img">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg"
            alt="img"
          />
          <p>Ahmed</p>
        </div>
      ),

      time: "18:00",
      date: "22-2-2023",
      status: "Pending",
      showDetails: <Button onClick={openModal}>Session details</Button>,
    },
  ];

  const columns = [
    {
      title: "img",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "showDetails",
      dataIndex: "showDetails",
      key: "showDetails",
    },
  ];
  return (
    <section style={{ paddingTop: "35px" }}>
      <h2 style={{ color: "#4e4e4e" }} className="booking-req">
        Booking request
      </h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        showHeader={false}
        scroll={{ x: 580 }}
        className="booking-table"
      ></Table>
      <SessionDetails isOpen={isOpen} isClose={closeModal} />
    </section>
  );
};
