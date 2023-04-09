import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function PopupModal(props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    const isFormValid = await form.validateFields();
    try {
      setLoading(true);
      if (isFormValid) {
        const values = form.getFieldsValue();
        if (props.company) {
          const editedCompany = {
            id: props.company.id,
            name: values.name,
          };
          await props.onEdit(editedCompany);
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
    if (props.company) {
      form.setFieldsValue({ name: props.company.name });
    } else {
      form.setFieldsValue({ name: "" });
    }
  }, [form, props.company]);

  function getInitialValues() {
    return {
      name: props.company?.name || "",
    };
  }

  return (
    <Modal
      title={props.company ? t("form.companies.modalTitleEdit") : t("form.companies.modalTitleNew")}
      open={props.open}
      onCancel={props.onCancel}
      onOk={handleOk}
      confirmLoading={loading}
      afterClose={props.onClose}
    >
      <Form form={form} layout="vertical" initialValues={getInitialValues()}>
        <Form.Item
          label={t("form.companies.nameLabel")}
          name="name"
          rules={[
            {
              required: true,
              message: t("form.companies.nameErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.companies.namePlaceholder")} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PopupModal;
