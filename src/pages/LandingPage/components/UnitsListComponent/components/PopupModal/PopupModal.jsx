import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function PopupModal(props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    try {
      setLoading(true);
      if (await form.validateFields()) {
        const values = form.getFieldsValue();
        if (props.unit) {
          const editedUnit = {
            id: props.unit.id,
            name: values.name,
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
      form.setFieldsValue({ name: props.unit.name });
    } else {
      form.setFieldsValue({ name: "" });
    }
  }, [form, props.unit]);

  function getInitialValues() {
    return {
      name: props.unit?.name || "",
    };
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
      </Form>
    </Modal>
  );
}

export default PopupModal;
