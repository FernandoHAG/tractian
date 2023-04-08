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
        if (props.workorder) {
          const editedWorkorder = {
            id: props.workorder.id,
            name: values.name,
          };
          await props.onEdit(editedWorkorder);
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
    if (props.workorder) {
      form.setFieldsValue({ name: props.workorder.name });
    } else {
      form.setFieldsValue({ name: "" });
    }
  }, [form, props.workorder]);

  function getInitialValues() {
    return {
      name: props.workorder?.name || "",
    };
  }

  return (
    <Modal
      title={props.workorder ? t("form.workorders.modalTitleEdit") : t("form.workorders.modalTitleNew")}
      open={props.open}
      onCancel={props.onCancel}
      onOk={handleOk}
      confirmLoading={loading}
      afterClose={props.onClose}
    >
      <Form form={form} layout="vertical" initialValues={getInitialValues()}>
        <Form.Item
          label={t("form.workorders.nameLabel")}
          name="name"
          rules={[
            {
              required: true,
              message: t("form.workorders.nameErrorMessage"),
            },
          ]}
        >
          <Input placeholder={t("form.workorders.namePlaceholder")} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PopupModal;
