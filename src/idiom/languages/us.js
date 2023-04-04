const us = {
  api: {
    assets: {
      get: {
        errorBody: "An error occurred while accessing the API on endpoint GET/assets. The error message is:\n\n",
        errorTitle: "Error!",
      },
      delete: {
        errorBody: "An error occurred while accessing the API on endpoint DELETE/assets. The error message is:\n\n",
        errorTitle: "Error!",
      },
    },
    companies: {
      get: {
        errorBody: "An error occurred while accessing the API on endpoint GET/companies. The error message is:\n\n",
        errorTitle: "Error!",
      },
      delete: {
        errorBody: "An error occurred while accessing the API on endpoint DELETE/companies. The error message is:\n\n",
        errorTitle: "Error!",
      },
    },
    units: {
      get: {
        errorBody: "An error occurred while accessing the API on endpoint GET/units. The error message is:\n\n",
        errorTitle: "Error!",
      },
      delete: {
        errorBody: "An error occurred while accessing the API on endpoint DELETE/units. The error message is:\n\n",
        errorTitle: "Error!",
      },
    },
    users: {
      get: {
        errorBody: "An error occurred while accessing the API on endpoint GET/users. The error message is:\n\n",
        errorTitle: "Error!",
      },
      delete: {
        errorBody: "An error occurred while accessing the API on endpoint DELETE/users. The error message is:\n\n",
        errorTitle: "Error!",
      },
    },
    workorders: {
      get: {
        errorBody: "An error occurred while accessing the API on endpoint GET/workordes. The error message is:\n\n",
        errorTitle: "Error!",
      },
      delete: {
        errorBody: "An error occurred while accessing the API on endpoint DELETE/workordes. The error message is:\n\n",
        errorTitle: "Error!",
      },
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
  assetsList: {
    defaultTitle: "Asset",
  },
  companiesList: {
    defaultTitle: "Company",
  },
  unitsList: {
    defaultTitle: "Unit",
  },
  usersList: {
    defaultTitle: "User",
  },
  workordersList: {
    defaultTitle: "Order",
  },
};

export default us;
