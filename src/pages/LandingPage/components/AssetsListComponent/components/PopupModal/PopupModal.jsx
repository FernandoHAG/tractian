import { Col, Form, Input, Modal, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { companiesChange, unitsChange, usersChange } from "../../../../../../redux/dataSlice";
import companiesService from "../../../../../../services/companies.service";
import unitsService from "../../../../../../services/units.service";
import usersService from "../../../../../../services/users.service";

//This file is way too big because of time shortage

function PopupModal(props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [optionsCompanies, setOptionsCompanies] = useState([]);
  const [assetCompany, setAssetCompany] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [optionsUnits, setOptionsUnits] = useState([]);
  const [assetUnit, setAssetUnit] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState([]);
  const [userList, setUserList] = useState([]);
  const [valueUserSelect, setValueUserSelect] = useState([]);
  const [selectedSensors, setSelectedSensors] = useState([]);

  const dispatch = useDispatch();

  const handleOk = async () => {
    const isForValid = await form.validateFields();
    try {
      setLoading(true);
      if (isForValid) {
        const values = form.getFieldsValue();
        if (props.asset) {
          const editedAsset = {
            id: props.asset.id,
            name: values.name,
            status: values.status,
            model: values.model,
            image: values.image,
            companyId: selectedCompany,
            unitId: selectedUnit,
            assignedUserIds: values.assignedUser,
            sensors: values.sensors,
            specifications: values.specifications,
          };
          await props.onEdit(editedAsset);
        } else {
          const newAsset = {
            name: values.name,
            status: values.status,
            model: values.model,
            image: values.image,
            companyId: values.company,
            unitId: values.unit,
            assignedUserIds: values.assignedUser,
            sensors: values.sensors,
            specifications: values.specifications,
          };
          await props.onOk(newAsset);
        }
        props.onClose();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  useEffect(() => {
    if (props.asset) {
      form.setFieldsValue({
        name: props.asset.name,
        status: props.asset.status,
        model: props.asset.model,
        image: props.asset.image,
        company: assetCompany.name,
        unit: assetUnit.name,
        sensors: props.asset.sensors,
        assignedUser: valueUserSelect,
      });
    } else {
      form.setFieldsValue({
        name: "",
        status: "",
        image: "",
        model: "",
        company: "",
        unit: "",
        sensors: [],
        assignedUser: [],
      });
    }
  }, [form, props.asset, assetCompany.name, assetUnit.name, valueUserSelect]);

  useEffect(() => {
    if (props.asset?.assignedUserIds) {
      const usersOfThisAsset = userList.filter((user) => props.asset?.assignedUserIds.includes(user.id));
      let data = [];
      usersOfThisAsset.forEach((user) => {
        data.push(user.name);
      });
      setValueUserSelect(data);
    }
  }, [props.asset?.assignedUserIds, userList]);

  function getInitialValues() {
    return {
      name: props.asset?.name || "",
    };
  }

  useEffect(() => {
    if (props.open) {
      async function getCompanies() {
        const data = await companiesService.getCompanies();
        dispatch(companiesChange(data));
        let options = [];
        data.forEach((company) => {
          options.push({ value: company.id, label: company.name });
          if (company.id === props.asset?.companyId) {
            setAssetCompany(company);
            setSelectedCompany(company.id);
          }
        });
        setOptionsCompanies(options);
      }
      async function getUnits() {
        const data = await unitsService.getUnits();
        dispatch(unitsChange(data));
        let options = [];
        data.forEach((unit) => {
          options.push({ value: unit.id, label: unit.name });
          if (unit.id === props.asset?.unitId) {
            setAssetUnit(unit);
            setSelectedUnit(unit.id);
          }
        });
        setOptionsUnits(options);
      }
      async function getUsers() {
        const data = await usersService.getUsers();
        dispatch(usersChange(data));
        setUserList(data);
      }
      getCompanies();
      getUnits();
      getUsers();
      setSelectedSensors(props.sensors);
    }
  }, [dispatch, props.open, props.asset?.companyId, props.asset?.unitId, props.sensors]);

  function getUsersOptions() {
    if (userList) {
      return userList.map((user) => {
        return { value: user.id, label: user.name };
      });
    }
  }

  function handleTagChange(value) {
    setValueUserSelect(value);
  }

  return (
    <Modal
      title={props.asset ? t("form.assets.modalTitleEdit") : t("form.assets.modalTitleNew")}
      open={props.open}
      onCancel={props.onCancel}
      onOk={handleOk}
      confirmLoading={loading}
      afterClose={props.onClose}
    >
      <Form form={form} layout="vertical" initialValues={getInitialValues()}>
        <Form.Item
          label={t("form.assets.nameLabel")}
          name="name"
          rules={[
            {
              required: true,
              message: t("form.assets.nameErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.assets.namePlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.assets.statusLabel")}
          name="status"
          rules={[
            {
              required: true,
              message: t("form.assets.statusErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.assets.statusPlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.assets.modelLabel")}
          name="model"
          rules={[
            {
              required: true,
              message: t("form.assets.modelErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.assets.modelPlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.assets.companyLabel")}
          name="company"
          rules={[
            {
              required: true,
              message: t("form.assets.companyErrorMessage"),
            },
          ]}
        >
          <Select
            options={optionsCompanies}
            onSelect={setSelectedCompany}
            placeholder={t("form.assets.companyPlaceholder")}
          />
        </Form.Item>
        <Form.Item
          label={t("form.assets.unitLabel")}
          name="unit"
          rules={[
            {
              required: true,
              message: t("form.assets.unitErrorMessage"),
            },
          ]}
        >
          <Select options={optionsUnits} onSelect={setSelectedUnit} placeholder={t("form.assets.unitPlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.assets.imageLabel")}
          name="image"
          rules={[
            {
              required: true,
              message: t("form.assets.imageErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.assets.imagePlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.assets.assignedUserLabel")}
          name="assignedUser"
          rules={[
            {
              required: true,
              message: t("form.assets.assignedUserErrorMessage"),
            },
          ]}
        >
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder={t("form.assets.assignedUserPlaceholder")}
            options={getUsersOptions()}
            value={valueUserSelect}
            onChange={handleTagChange}
            maxTagCount="responsive"
          />
        </Form.Item>
        <Form.Item
          label={t("form.assets.sensorsLabel")}
          name="sensors"
          rules={[
            {
              required: true,
              message: t("form.assets.sensorsErrorMessage"),
            },
          ]}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder={t("form.assets.sensorsPlaceholder")}
            maxTagCount="responsive"
            value={selectedSensors}
            options={[]}
          />
        </Form.Item>
        <Form.Item label={t("form.assets.specifications")} name="specifications" rules={[{ required: false }]}>
          <Input.Group>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name={["specifications", "maxTemp"]}
                  rules={[{ required: false, message: t("form.assets.maxTempErrorMessage") }]}
                >
                  <Input placeholder={t("form.assets.maxTemp")} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["specifications", "power"]}
                  rules={[{ required: false, message: t("form.assets.powerErrorMessage") }]}
                >
                  <Input placeholder={t("form.assets.power")} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["specifications", "rpm"]}
                  rules={[{ required: false, message: t("form.assets.rpmErrorMessage") }]}
                >
                  <Input placeholder={t("form.assets.rpm")} />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PopupModal;
