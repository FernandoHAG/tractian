import { Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { companiesChange, unitsChange } from "../../../../../../redux/dataSlice";
import companiesService from "../../../../../../services/companies.service";
import unitsService from "../../../../../../services/units.service";

function PopupModal(props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [optionsCompanies, setOptionsCompanies] = useState([]);
  const [userCompany, setUserCompany] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [optionsUnits, setOptionsUnits] = useState([]);
  const [userUnit, setUserUnit] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState([]);

  const dispatch = useDispatch();

  const handleOk = async () => {
    const isForValid = await form.validateFields();
    try {
      setLoading(true);
      if (isForValid) {
        const values = form.getFieldsValue();
        if (props.user) {
          console.log("selectedCompany ", selectedCompany);
          console.log("selectedUnit ", selectedUnit);
          const editedUser = {
            id: props.user.id,
            name: values.name,
            email: values.email,
            companyId: selectedCompany,
            unitId: selectedUnit,
          };
          await props.onEdit(editedUser);
        } else {
          const newUser = {
            name: values.name,
            email: values.email,
            companyId: values.company,
            unitId: values.unit,
          };
          await props.onOk(newUser);
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
    if (props.user) {
      form.setFieldsValue({
        name: props.user.name,
        company: userCompany.name,
        unit: userUnit.name,
        email: props.user.email,
      });
    } else {
      form.setFieldsValue({ name: "", company: "", unit: "", email: "" });
    }
  }, [form, props.user, userCompany.name, userUnit.name]);

  function getInitialValues() {
    return {
      name: props.user?.name || "",
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
          if (company.id === props.user?.companyId) {
            setUserCompany(company);
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
          if (unit.id === props.user?.unitId) {
            setUserUnit(unit);
            setSelectedUnit(unit.id);
          }
        });
        setOptionsUnits(options);
      }
      getCompanies();
      getUnits();
    }
  }, [dispatch, props.open, props.user?.companyId, props.user?.unitId]);

  return (
    <Modal
      title={props.user ? t("form.users.modalTitleEdit") : t("form.users.modalTitleNew")}
      open={props.open}
      onCancel={props.onCancel}
      onOk={handleOk}
      confirmLoading={loading}
      afterClose={props.onClose}
    >
      <Form form={form} layout="vertical" initialValues={getInitialValues()}>
        <Form.Item
          label={t("form.users.nameLabel")}
          name="name"
          rules={[
            {
              required: true,
              message: t("form.users.nameErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.users.namePlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.users.emailLabel")}
          name="email"
          rules={[
            {
              required: true,
              message: t("form.users.emailErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.users.emailPlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.users.companyLabel")}
          name="company"
          rules={[
            {
              required: true,
              message: t("form.users.companyErrorMessage"),
            },
          ]}
        >
          <Select
            options={optionsCompanies}
            onSelect={setSelectedCompany}
            placeholder={t("form.users.companyPlaceholder")}
          />
        </Form.Item>
        <Form.Item
          label={t("form.users.unitLabel")}
          name="unit"
          rules={[
            {
              required: true,
              message: t("form.users.unitErrorMessage"),
            },
          ]}
        >
          <Select options={optionsUnits} onSelect={setSelectedUnit} placeholder={t("form.users.unitPlaceholder")} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PopupModal;
