import React from "react";
import { Modal } from "antd";
import { Descriptions } from "antd";
import "./SessionDrawer.css";
import {
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

export default function SessionDetails({ isOpen, isClose }) {
  const items = [
    {
      label: "Time",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: "18:00:00",
    },
    {
      label: "Date",
      children: "22-8-2023",
    },
    {
      label: "Notes",
      span: {
        xl: 3,
        xxl: 3,
      },
      children:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia distinctio voluptatum, earum nulla totam iusto ea! Quasi quis, numquam vitae",
    },
    {
      label: "Link",
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: "http://localhost:3000/omarabdo/account",
    },
    {
      label: "Action",
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: (
        <div className="btns">
          <button className="approve">
            <CheckOutlined />
          </button>
          <button className="cancel">
            <CloseOutlined />
          </button>
          <button className="reschedule">
            <CalendarOutlined /> Rescheduale
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Modal
        title="Details"
        className="session-modal"
        open={isOpen}
        onCancel={isClose}
        footer={null}
        width={1000}
      >
        <div className="modal">
          <div className="name">
            <div className="name-img">
              <div className="my-img">
                <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" />
              </div>
              <div className="jop">
                <p className="my-name">Hassan Kamel 🇪🇬</p>
                <p className="my-jop">Software Developer at Vodafone</p>
              </div>
            </div>
            <div className="session-duration">
              <p className="s-duration">Session Duration</p>
              <span className="s-min">30 Minutes</span>
            </div>
            <div className="topic">
              <p>Topics</p>
              <span>React</span>
            </div>
            <div className="status">
              <p>Status</p>
              <span>pending</span>
            </div>
          </div>
          <div className="date-time">
            <Descriptions layout="vertical" bordered items={items} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
