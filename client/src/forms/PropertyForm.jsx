import React from "react";
import { Form, Input } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function LeadForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Property Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Enter Property Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Enter Address!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Enter Description!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Regular Price (₹)"
        name="regularPrice"
        rules={[
          {
            required: true,
            message: "Enter Regular Price!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Discount Price (₹)"
        name="discountPrice"
        rules={[
          {
            required: true,
            message: "Enter Discount Price!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Security Deposit (₹)"
        name="securityDeposit"
        rules={[
          {
            required: true,
            message: "Enter Security Deposit!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Type"
        name="type"
        rules={[
          {
            required: true,
            message: "Enter Type!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Bedrooms"
        name="bedrooms"
        rules={[
          {
            required: true,
            message: "Enter Bedrooms!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Furnished Type"
        name="furnishedType"
        rules={[
          {
            required: true,
            message: "Enter Furnished Type!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Balconies"
        name="balconies"
        rules={[
          {
            required: true,
            message: "Enter Balconies!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Bathrooms"
        name="bathrooms"
        rules={[
          {
            required: true,
            message: "Enter Bathrooms!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age (in years)"
        name="age"
        rules={[
          {
            required: true,
            message: "Enter Age!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Area (in Sqft.)"
        name="area"
        rules={[
          {
            required: true,
            message: "Enter Property Area!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Floors"
        name="floor"
        rules={[
          {
            required: true,
            message: "Enter Floors!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
