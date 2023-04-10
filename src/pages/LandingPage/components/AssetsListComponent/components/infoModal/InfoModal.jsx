import { Descriptions, Image, Modal, Skeleton, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import assetsService from "../../../../../../services/assets.service";
import companiesService from "../../../../../../services/companies.service";
import unitsService from "../../../../../../services/units.service";
import usersService from "../../../../../../services/users.service";
import convertToHHMMSS from "../../../../../../utils/hoursToStringConverter";
import convertDateToBRFormat from "../../../../../../utils/convertDateToBRFormat";
import MachineStatusChart from "../MachineStatusChart/MachineStatusChart";

function InfoModal(props) {
  const { t } = useTranslation();
  const [asset, setAsset] = useState();
  const [company, setCompany] = useState();
  const [users, setUsers] = useState([]);
  const [unit, setUnit] = useState();

  useEffect(() => {
    if (props.open) {
      async function getAsset() {
        setAsset(await assetsService.getAsset(props.assetId));
      }
      getAsset();
    }
  }, [props.open, props.assetId]);

  useEffect(() => {
    console.log(asset);
    async function getCompany() {
      if (asset?.companyId) setCompany(await companiesService.getCompany(asset.companyId));
    }
    async function getUnit() {
      if (asset?.unitId) setUnit(await unitsService.getUnit(asset.unitId));
    }
    async function getUsers() {
      const usersArray = await usersService.getUsers();
      setUsers(usersArray.filter((user) => asset?.assignedUserIds.includes(user.id)));
    }
    getCompany();
    getUnit();
    getUsers();
  }, [asset]);

  function dataTab() {
    return (
      <Descriptions
        title={asset?.name ? t("infoModal.data.nameLabel") + asset?.name : <Skeleton.Input size="small" active />}
        bordered
      >
        <Descriptions.Item label={t("infoModal.data.status")} span={3}>
          {asset?.status ? asset?.status : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.companyLabel")} span={3}>
          {company?.name ? company?.name : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.unitLabel")} span={3}>
          {unit?.name ? unit?.name : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.usersLabel")} span={3}>
          {users[0]?.name ? (
            users.map((user, index) => {
              return <div key={"user-name-" + index}>{user.name}</div>;
            })
          ) : (
            <Skeleton.Input size="small" active />
          )}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.healthscore")} span={2}>
          {asset?.healthscore ? asset?.healthscore + "%" : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.model")} span={2}>
          {asset?.model ? asset?.model : <Skeleton.Input size="small" active />}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.sensors")} span={3}>
          {asset?.name ? (
            asset.sensors.map((sensor, index) => {
              return <div key={"sensor-name-" + index}>{sensor}</div>;
            })
          ) : (
            <Skeleton.Input size="small" active />
          )}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.specifications")} span={3}>
          {asset?.specifications ? (
            <>
              <div>
                {t("infoModal.data.maxTemp") +
                  (asset.specifications.maxTemp ? asset.specifications.maxTemp + "°C" : "NA")}
              </div>
              <div>
                {t("infoModal.data.power") + (asset.specifications.power ? asset.specifications.power + " HP" : "NA")}
              </div>
              <div>{t("infoModal.data.rpm") + (asset.specifications.rpm ? asset.specifications.rpm : "NA")}</div>
            </>
          ) : (
            <>
              <Skeleton.Input size="small" active />
              <Skeleton.Input size="small" active />
              <Skeleton.Input size="small" active />
            </>
          )}
        </Descriptions.Item>
        <Descriptions.Item label={t("infoModal.data.metrics")} span={3}>
          {asset?.metrics ? (
            <>
              <div>
                {t("infoModal.data.lastUptimeAt") +
                  (asset.metrics.lastUptimeAt ? convertDateToBRFormat(asset.metrics.lastUptimeAt) : "NA")}
              </div>
              <div>
                {t("infoModal.data.totalCollectsUptime") +
                  (asset.metrics.totalCollectsUptime ? asset.metrics.totalCollectsUptime : "NA")}
              </div>
              <div>
                {t("infoModal.data.totalUptime") +
                  (asset.metrics.totalUptime ? convertToHHMMSS(asset.metrics.totalUptime) : "NA")}
              </div>
            </>
          ) : (
            <>
              <Skeleton.Input size="small" active />
              <Skeleton.Input size="small" active />
              <Skeleton.Input size="small" active />
            </>
          )}
        </Descriptions.Item>
      </Descriptions>
    );
  }

  function imageTab() {
    return <Image width={475} src={asset?.image} />;
  }

  function graphsTab() {
    // Highcharts.chart("container", HighchartsOptions);
    if (asset?.healthHistory) return <MachineStatusChart data={asset?.healthHistory} />;
  }

  function resetStates() {
    setAsset(null);
    setCompany(null);
    setUnit(null);
    setUsers([]);
  }

  const onChange = (key) => {
    console.log(key);
  };

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
      onChange={onChange}
    >
      <Tabs
        type="card"
        items={[
          {
            label: t("infoModal.data.tabTitle"),
            key: props.assetId + "-data",
            children: dataTab(),
          },
          {
            label: t("infoModal.image.tabTitle"),
            key: props.assetId + "-image",
            children: imageTab(),
          },
          {
            label: t("infoModal.graphs.tabTitle"),
            key: props.assetId + "-graphs",
            children: graphsTab(),
          },
        ]}
      />
    </Modal>
  );
}

export default InfoModal;
