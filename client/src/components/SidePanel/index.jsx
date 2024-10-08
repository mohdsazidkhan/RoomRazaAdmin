import React, { useState, useEffect } from "react";
import { useCrudContext } from "@/context/crud";
import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import CollapseBox from "../CollapseBox";

const { Sider } = Layout;

export default function SidePanel({
  config,
  topContent,
  bottomContent,
  fixHeaderPanel,
}) {
  const { ADD_NEW_ENTITY } = config;
  const { state, crudContextAction } = useCrudContext();
  const { isPanelCollapsed, isBoxCollapsed } = state;
  const { panel, collapsedBox } = crudContextAction;
  const [styleSider, setStyleSider] = useState("0px");
  const [opacitySider, setOpacitySider] = useState("1");

  useEffect(() => {
    if (isPanelCollapsed) {
      setStyleSider("-280px");
      setOpacitySider(0);
    } else {
      setStyleSider("0px");
      setOpacitySider(1);
    }

    setTimeout(() => {
      setStyleSider("0px");
      setOpacitySider(1);
    }, 300);
  }, [isPanelCollapsed]);

  const collapsePanel = () => {
    panel.collapse();
  };

  console.log(isPanelCollapsed, ' isPanelCollapsed')

  const collapsePanelBox = () => {
    collapsedBox.collapse();
  };

  return (
    <Sider
      trigger={<MenuOutlined className="trigger" />}
      width={280}
      collapsible
      collapsed={isPanelCollapsed}
      collapsedWidth={"0px"}
      onCollapse={collapsePanel}
      zeroWidthTriggerStyle={{
        right: "-60px",
      }}
      style={{
        background: "#FFF",
        left: styleSider,
        opacity: opacitySider,
      }}
    >
      {fixHeaderPanel}
      <CollapseBox
        buttonTitle={ADD_NEW_ENTITY}
        isPanelCollapsed={isPanelCollapsed}
        isCollapsed={isBoxCollapsed}
        onCollapse={collapsePanelBox}
        topContent={topContent}
        bottomContent={bottomContent}
      ></CollapseBox>
    </Sider>
  );
}
