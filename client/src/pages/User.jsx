import React from "react";
import CrudModule from "@/modules/CrudModule";
import UserForm from "@/forms/UserForm";

function User() {
  const entity = "user/all";
  const searchConfig = {
    displayLabels: ["fullname", "mobile", "email"],
    searchFields: "fullname, mobile, email",
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

  const panelTitle = "User Panel";
  const dataTableTitle = "Users Lists";
  const entityDisplayLabels = ["user"];

  const readColumns = [
    {
      title: "Full Name",
      dataIndex: "fullname",
    },
    {
      title: "User Name",
      dataIndex: "username",
    },
    {
      title: "Mobile No.",
      dataIndex: "mobileNo",
    },
    {
      title: "Email",
      dataIndex: "email",
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
      title: "Full Name",
      dataIndex: "fullname",
    },
    {
      title: "User Name",
      dataIndex: "username",
    },
    {
      title: "Mobile No.",
      dataIndex: "mobileNo",
    },
    {
      title: "Email",
      dataIndex: "email",
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

  const ADD_NEW_ENTITY = "Add New User";
  const DATATABLE_TITLE = "Users List";
  const ENTITY_NAME = "Users";
  const CREATE_ENTITY = "Create User";
  const UPDATE_ENTITY = "Update User";
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
      createForm={<UserForm />}
      updateForm={<UserForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default User;
