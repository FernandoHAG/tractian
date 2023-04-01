import ReactMainScreen from "../../components/ReactMainScreen/ReactMainScreen";
import companiesService from "../../services/companies.service";
// import { useTranslation } from "react-i18next";

function LandingPage() {
  companiesService.getCompanies();
  return <ReactMainScreen />;
}

export default LandingPage;
