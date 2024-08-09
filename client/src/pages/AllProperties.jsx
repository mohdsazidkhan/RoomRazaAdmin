import React from "react";

import CrudModule from "@/modules/CrudModule";
import PropertyForm from "@/forms/PropertyForm";
import { Tag } from "antd";

function AllProperties() {
  const entity = "/property/all";
  const searchConfig = {
    displayLabels: ["Property Name"],
    searchFields: "name",
    outputValue: "_id",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  const panelTitle = "Properties Panel";
  const dataTableTitle = "All Properties List";
  const entityDisplayLabels = ["name"];

  const readColumns = [
    {
      title: "Property Name",
      dataIndex: "name",
      render: (_, record) =>{
        return (
          <span>{record.name.length > 20 ? record.name.substring(0, 20)+"..." : record.name}</span>
        )
      }
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (_, record) =>{
        return (
          <span>{record.address.length > 20 ? record.address.substring(0, 20)+"..." : record.address}</span>
        )
      }
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
      title: "Security Deposit",
      dataIndex: "securityDeposit",
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (_, record) => {
        let tagColor;
        if(record.type === "rent"){
          tagColor = "red"
        }else{
          tagColor = "green"
        }
        return (
          <Tag
            color={tagColor}
            style={{ margin: "0 auto", justifyContent: "center" }}
          >
            {record.type}
          </Tag>
        )
      }
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      render: (_, record) =>{
        return (
          <>{formatDate(record.createdAt)}</>
        )
      }
    },
    {
      title: "Created Time",
      dataIndex: "createdAt",
      render: (_, record) =>{
        return (
          <>{formatTime(record.createdAt)}</>
        )
      }
    },
  ];
  const dataTableColumns = [
    {
      title: "Property Name",
      dataIndex: "name",
      render: (_, record) =>{
        return (
          <span>{record.name.length > 20 ? record.name.substring(0, 20)+"..." : record.name}</span>
        )
      }
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (_, record) =>{
        return (
          <span>{record.address.length > 20 ? record.address.substring(0, 20) : record.address}</span>
        )
      }
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
      title: "Security Deposit",
      dataIndex: "securityDeposit",
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (_, record) => {
        let tagColor;
        if(record.type === "rent"){
          tagColor = "red"
        }else{
          tagColor = "green"
        }
        return (
          <Tag
            color={tagColor}
            style={{ margin: "0 auto", justifyContent: "center", textTransform: "uppercase" }}
          >
            {record.type}
          </Tag>
        )
      }
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      render: (_, record) =>{
        return (
          <>{formatDate(record.createdAt)}</>
        )
      }
    },
    {
      title: "Created Time",
      dataIndex: "createdAt",
      render: (_, record) =>{
        return (
          <>{formatTime(record.createdAt)}</>
        )
      }
    },
  ];

  const ADD_NEW_ENTITY = "Add New Property";
  const DATATABLE_TITLE = "Properties List";
  const ENTITY_NAME = "property";
  const CREATE_ENTITY = "Create Property";
  const UPDATE_ENTITY = "Update Property";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<PropertyForm />}
      updateForm={<PropertyForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default AllProperties;
