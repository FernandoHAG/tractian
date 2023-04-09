import { Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { companiesChange } from "../../../../../../redux/dataSlice";
import companiesService from "../../../../../../services/companies.service";

function PopupModal(props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  // const companies = useSelector((state) => state.data.companies);
  const [unitCompany, setUnitCompany] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);

  const dispatch = useDispatch();

  const handleOk = async () => {
    try {
      setLoading(true);
      if (await form.validateFields()) {
        const values = form.getFieldsValue();
        console.log(values);
        if (props.unit) {
          const editedUnit = {
            id: props.unit.id,
            name: values.name,
            companyId: selectedCompany,
          };
          await props.onEdit(editedUnit);
        } else {
          await props.onOk(values);
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
    if (props.unit) {
      form.setFieldsValue({ name: props.unit.name, company: unitCompany.name });
    } else {
      form.setFieldsValue({ name: "", company: "" });
    }
  }, [form, props.unit, unitCompany.name]);

  function getInitialValues() {
    return {
      name: props.unit?.name || "",
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
          if (company.id === props.unit?.companyId) {
            setUnitCompany(company);
          }
        });
        setOptions(options);
      }
      getCompanies();
    }
  }, [props.open]);

  function selectCompany(companyId) {
    setSelectedCompany(companyId);
  }

  return (
    <Modal
      title={props.unit ? t("form.units.modalTitleEdit") : t("form.units.modalTitleNew")}
      open={props.open}
      onCancel={props.onCancel}
      onOk={handleOk}
      confirmLoading={loading}
      afterClose={props.onClose}
    >
      <Form form={form} layout="vertical" initialValues={getInitialValues()}>
        <Form.Item
          label={t("form.units.nameLabel")}
          name="name"
          rules={[
            {
              required: true,
              message: t("form.units.nameErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.units.namePlaceholder")} />
        </Form.Item>
        <Form.Item
          label={t("form.units.companyLabel")}
          name="company"
          rules={[
            {
              required: true,
              message: t("form.units.companyErrorMessage"),
            },
          ]}
        >
          <Select options={options} onSelect={selectCompany} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PopupModal;
