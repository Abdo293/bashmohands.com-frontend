import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Modal, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./FilterSlider.css";
import { settings } from "nprogress";

export const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [selectedValues, setSelectedValues] = useState([]);
  const [getSort, setSort] = useState([]);
  const [getTopic, setTopic] = useState([]);
  const [getCountry, setCountry] = useState([]);
  const [getGender, setGender] = useState([]);
  useEffect(() => {
    setSelectedValues([]);
  }, []);
  useEffect(() => {
    setSelectedValues([getSort, getTopic, getCountry, getGender]);
  }, [getSort, getTopic, getCountry, getGender]);

  let result = () => {
    let output = [];
    if (getSort.length) {
      output.push({ sort: getSort });
    }
    if (getTopic.length) {
      output.push({ topic: getTopic });
    }
    if (getCountry.length) {
      output.push({ country: getCountry });
    }
    if (getGender.length) {
      output.push({ gender: getGender });
    }
    console.log(output);
  };
  const clear = () => {
    setSelectedValues([]);
    setSort([]);
    setTopic([]);
    setCountry([]);
    setGender([]);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <img src="imgs/1.svg" alt="" />
        Filters
      </Button>
      <Modal
        title="Filters"
        open={isModalOpen}
        width={445}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="sort">
          <p className="main-head">Sort by</p>

          <Space wrap>
            <Select
              defaultValue="Show all"
              dropdownStyle={{ width: 200 }}
              bordered={false}
              onSelect={(value) => {
                if (!getSort.includes(value)) {
                  setSort((prevSort) => [...prevSort, value]);
                }
              }}
              options={[
                {
                  value: "Sort by hourly rate",
                  label: "Sort by hourly rate",
                },
                {
                  value: "Highest review",
                  label: "Highest review",
                },
                {
                  value: "Availability",
                  label: "Availability",
                },
                {
                  value: "Highest experience",
                  label: "Highest experience",
                },
              ]}
            />
          </Space>
        </div>

        <div className="topic">
          <p className="main-head">Filter by</p>
          <Space wrap>
            <Select
              defaultValue="Topic"
              style={{ width: "100%" }}
              bordered={false}
              onSelect={(value) => {
                if (!getTopic.includes(value)) {
                  setTopic((prevTopic) => [...prevTopic, value]);
                }
              }}
              options={[
                {
                  value: "Topic 1",
                  label: "Topic 1",
                },
                {
                  value: "Topic 2",
                  label: "Topic 2",
                },
              ]}
            />
          </Space>
        </div>

        <div className="country">
          <Space wrap>
            <Select
              defaultValue="Country"
              style={{ width: "100%" }}
              bordered={false}
              onSelect={(value) => {
                if (!getCountry.includes(value)) {
                  setCountry((prevCountry) => [...prevCountry, value]);
                }
              }}
              options={[
                {
                  value: "Egypt",
                  label: "Egypt",
                },
                {
                  value: "Jordan",
                  label: "Jordan",
                },
              ]}
            />
          </Space>
        </div>

        <div className="gender">
          <Space wrap>
            <Select
              defaultValue="Gender"
              style={{ width: "100%" }}
              bordered={false}
              onSelect={(value) => {
                if (!getGender.includes(value)) {
                  setGender((prevGender) => [...prevGender, value]);
                }
              }}
              options={[
                {
                  value: "Male",
                  label: "Male",
                },
                {
                  value: "Female",
                  label: "Female",
                },
              ]}
            />
          </Space>
        </div>

        <div className="result">
          <button className="main-btn" onClick={result}>
            Show result
          </button>
          {(getSort.length > 0 ||
            getTopic.length > 0 ||
            getCountry.length > 0 ||
            getGender.length > 0) && (
            <button
              className="main-btn"
              style={{ backgroundColor: "#DDD", color: "#000" }}
              onClick={clear}
            >
              Clear filters
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};
