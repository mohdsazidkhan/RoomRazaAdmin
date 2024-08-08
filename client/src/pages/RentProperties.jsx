import React from "react";

import CrudModule from "@/modules/CrudModule";
import PropertyForm from "@/forms/PropertyForm";

function RentProperties() {
  const entity = "lead";
  const searchConfig = {
    displayLabels: ["client"],
    searchFields: "client,email,phone",
    outputValue: "_id",
  };

  const panelTitle = "Rent Properties Panel";
  const dataTableTitle = "Rent Properties Lists";
  const entityDisplayLabels = ["client"];

  const readColumns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "email",
      dataIndex: "email",
    },

    {
      title: "Budget",
      dataIndex: "budget",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Request",
      dataIndex: "request",
    },
  ];
  const dataTableColumns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },

    {
      title: "Budget",
      dataIndex: "budget",
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

export default RentProperties;
