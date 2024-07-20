import React from "react";
import CustomCrudModule from "@/modules/CustomCrudModule";
import UserForm from "@/forms/UserForm";

function SelectUser() {
  const entity = "client";
  const searchConfig = {
    displayLabels: ["company", "surname", "name"],
    searchFields: "company,surname,name",
    outputValue: "_id",
  };

  const panelTitle = "SelectCustomer Panel";
  const dataTableTitle = "Customers Lists";
  const entityDisplayLabels = ["company"];

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
      title: "Created At",
      dataIndex: "createdAt",
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
      title: "Created At",
      dataIndex: "createdAt",
    },
  ];

  const ADD_NEW_ENTITY = "Add New User";
  const DATATABLE_TITLE = "Users List";
  const ENTITY_NAME = "User";
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
    <CustomCrudModule
      createForm={<UserForm />}
      updateForm={<UserForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default SelectUser;
