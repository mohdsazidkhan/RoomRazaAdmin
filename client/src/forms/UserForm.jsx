import React from "react";
import { Button, Form, Input } from "antd";

export default function UserForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[
          {
            required: true,
            message: "Enter Full Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="User Name"
        name="username"
        rules={[
          {
            required: true,
            message: "Enter User Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="mobileNo"
        label="Mobile No."
        rules={[
          {
            required: true,
            message: "Enter Mobile No!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
