import { Descriptions, Modal, Skeleton, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import usersService from "../../../../../../services/users.service";
import companiesService from "../../../../../../services/companies.service";
import unitsService from "../../../../../../services/units.service";

function InfoModal(props) {
  const { t } = useTranslation();
  const [user, setUser] = useState();
  const [company, setCompany] = useState();
  const [unit, setUnit] = useState();

  useEffect(() => {
    if (props.open) {
      async function getUser() {
        setUser(await usersService.getUser(props.userId));
      }
      getUser();
    }
  }, [props.open, props.userId]);

  useEffect(() => {
    async function getCompany() {
      if (user?.companyId) setCompany(await companiesService.getCompany(user.companyId));
    }
    async function getUnit() {
      if (user?.unitId) setUnit(await unitsService.getUnit(user.unitId));
    }
    getCompany();
    getUnit();
  }, [user]);

  function dataTab() {
    return (
      <Descriptions
        title={user?.name ? t("infoModal.data.nameLabel") + user?.name : <Skeleton.Input size="small" active />}
      >
        <Descriptions.Item label={t("infoModal.data.emailLabel")} span={3}>
          {user?.email ? user?.email : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.companyLabel")} span={3}>
          {company?.name ? company?.name : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.unitLabel")} span={3}>
          {unit?.name ? unit?.name : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
      </Descriptions>
    );
  }

  function resetStates() {
    setUser(null);
    setCompany(null);
    setUnit(null);
  }

  return (
    <Modal
      title={t("infoModal.title")}
      open={props.open}
      afterClose={resetStates}
      onClose={props.onClose}
      onOk={props.onClose}
      onCancel={props.onClose}
      footer={[]}
      destroyOnClose={true}
    >
      <Tabs
        type="card"
        items={[
          {
            label: t("infoModal.data.tabTitle"),
            key: props.userId,
            children: dataTab(),
          },
        ]}
      />
    </Modal>
  );
}

export default InfoModal;
