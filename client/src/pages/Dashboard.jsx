import React from "react";
import { Divider, Row, Col } from "antd";
import { Tag } from "antd";
import { DashboardLayout } from "@/layout";
import RecentTable from "@/components/RecentTable";
import { request } from "@/request";
import useFetch from "@/hooks/useFetch";

const TopCard = ({ title, tagContent, tagColor, prefix, entity }) => {
  const asyncList = () => {
    return request.users(entity);
  };
  const { result } = useFetch(asyncList);

  return (
    <Col className="gutter-row" span={6}>
      <div
        className="whiteBox shadow"
        style={{ color: "#595959", fontSize: 13, height: "106px" }}
      >
        <div
          className="pad15 strong"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <h3 style={{ color: "#22075e", marginBottom: 0 }}>{title}</h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        <div className="pad15">
          <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={11} style={{ textAlign: "left" }}>
              <div className="left">{prefix}</div>
            </Col>
            <Col className="gutter-row" span={2}>
              <Divider
                style={{ padding: "10px 0", justifyContent: "center" }}
                type="vertical"
              ></Divider>
            </Col>
            <Col
              className="gutter-row"
              span={11}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Tag
                color={tagColor}
                style={{ margin: "0 auto", justifyContent: "center" }}
              >
                {result}
              </Tag>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default function Dashboard() {

  const userColumns = [
    {
      title: "User Name",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile No.",
      dataIndex: "mobileNo",
    },
  ];

  const listingCoumns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => {
        return (<div>
        {name && name.length > 15
          ? name.substring(0, 15).toUpperCase() + "..." 
          : name?.toUpperCase()}
      </div>);
      },
    },
    {
      title: "Regular Price",
      dataIndex: "regularPrice",
    },
    {
      title: "Discount Price",
      dataIndex: "discountPrice",
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (type) => {
        return <Tag>{type.toUpperCase()}</Tag>;
      },
    },
  ];

  return (
    <DashboardLayout>
      <Row gutter={[24, 24]}>

        <TopCard
          title={"Sales Properties"}
          tagColor={"cyan"}
          prefix={"Total"}
          entity="listing/sale"
        />

        <TopCard
          title={"Rent Properties"}
          tagColor={"purple"}
          prefix={"Total"}
          entity="listing/rent"
        />

        <TopCard
          title={"Users"}
          tagColor={"green"}
          prefix={"Total"}
          entity="user"
        />

        <TopCard
          title={"All Properties"}
          tagColor={"red"}
          prefix={"Total"}
          entity="listing/all"
        />

      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Recent Users
              </h3>
            </div>

            <RecentTable entity={"user"} dataTableColumns={userColumns} />
          </div>
        </Col>

        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Recent Properties
              </h3>
            </div>
            <RecentTable entity={"listing"} dataTableColumns={listingCoumns} />
          </div>
        </Col>
      </Row>
    </DashboardLayout>
  );
}
