const us = {
  companyAPI: {
    get: {
      errorBody: "An error occurred while accessing the API on endpoint GET/companies. The error message is:\n\n",
      errorTitle: "Error!",
    },
    delete: {
      errorBody: "An error occurred while accessing the API on endpoint DELETE/companies. The error message is:\n\n",
      errorTitle: "Error!",
    },
  },
  header: {
    Segmented: {
      labelAssets: "Assets",
      labelCompanies: "Companies",
      labelUnits: "Units",
      labelUsers: "Users",
      labelWorkorders: "Workorders",
    },
  },
  footer: {
    languageSelector: {
      placeholder: "Idiom",
    },
    themeSelector: {
      themeLabel: "Theme",
    },
  },
  companiesList: {
    defaultTitle: "Company",
  },
};

export default us;
