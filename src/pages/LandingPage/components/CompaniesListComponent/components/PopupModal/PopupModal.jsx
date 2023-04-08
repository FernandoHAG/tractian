import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function PopupModal(props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      if (await form.validateFields()) {
        const values = form.getFieldsValue();
        if (props.company) {
          console.log(props.company);
          const editedCompany = {
            id: props.company.id,
            name: values.name,
          };
          await props.onEdit(editedCompany);
        } else {
          await props.onOk(values);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      form.resetFields();
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      name: props.company ? props.company.name : undefined,
    });
  }, [form, props.company]);

  return (
    <Modal
      title={props.company ? t("form.companies.modalTitleEdit") : t("form.companies.modalTitleNew")}
      open={props.open}
      onCancel={props.onCancel}
      onOk={handleOk}
      afterClose={props.onClose}
    >
      <Form form={form} layout="vertical">
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
