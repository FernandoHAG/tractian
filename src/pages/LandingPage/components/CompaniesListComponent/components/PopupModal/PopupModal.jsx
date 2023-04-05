import { Form, Input, Modal } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

function PopupModal(props) {
  const { visible, onCancel, onOk, onEdit, company } = props;
  const { t } = useTranslation();
  const [form] = Form.useForm();
  // const [loading, setLoading] = useState(false); //TODO - add some response to the user while loading, maybe do it on CompaniesListComponent with modal and that alert thing of ant

  const handleOk = async () => {
    try {
      // setLoading(true);
      if (await form.validateFields()) {
        const values = form.getFieldsValue();
        console.log(company);
        if (company) {
          const editedCompany = {
            id: company.id,
            name: values.name,
          };
          await onEdit(editedCompany);
        } else {
          await onOk(values);
        }
      }
    } catch (error) {
      console.log(error);
      // setLoading(false);
    } finally {
      form.resetFields();
      // setLoading(false);
    }
  };

  return (
    <Modal
      title={company ? t("form.companies.modalTitleEdit") : t("form.companies.modalTitleNew")}
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
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
          <Input placeholder={t("form.companies.namePlaceholder")} value={company?.name} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PopupModal;
