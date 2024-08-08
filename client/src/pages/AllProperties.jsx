import React from "react";

import CrudModule from "@/modules/CrudModule";
import PropertyForm from "@/forms/PropertyForm";

function AllProperties() {
  const entity = "product";
  const searchConfig = {
    displayLabels: ["productName"],
    searchFields: "productName",
    outputValue: "_id",
  };

  const panelTitle = "Properties Panel";
  const dataTableTitle = "Properties Lists";
  const entityDisplayLabels = ["PropertyName"];

  const readColumns = [
    {
      title: "Property Name",
      dataIndex: "propertyName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];
  const dataTableColumns = [
    {
      title: "Property Name",
      dataIndex: "propertyName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "status",
      dataIndex: "status",
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
