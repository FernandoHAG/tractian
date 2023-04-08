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
        if (props.user) {
          const editedUser = {
            id: props.user.id,
            name: values.name,
          };
          await props.onEdit(editedUser);
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
    if (props.user) {
      form.setFieldsValue({ name: props.user.name });
    } else {
      form.setFieldsValue({ name: "" });
    }
  }, [form, props.user]);

  function getInitialValues() {
    return {
      name: props.user?.name || "",
    };
  }

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
      </Form>
    </Modal>
  );
}

export default PopupModal;
