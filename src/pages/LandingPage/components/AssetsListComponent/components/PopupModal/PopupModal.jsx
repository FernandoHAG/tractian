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
        if (props.asset) {
          const editedAsset = {
            id: props.asset.id,
            name: values.name,
          };
          await props.onEdit(editedAsset);
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
    if (props.asset) {
      form.setFieldsValue({ name: props.asset.name });
    } else {
      form.setFieldsValue({ name: "" });
    }
  }, [form, props.asset]);

  function getInitialValues() {
    return {
      name: props.asset?.name || "",
    };
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
      </Form>
    </Modal>
  );
}

export default PopupModal;
