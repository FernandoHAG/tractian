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
      put: {
        errorBody: "An error occurred while accessing the API on endpoint PUT/assets. The error message is:\n\n",
        errorTitle: "Error!",
      },
      patch: {
        errorBody: "An error occurred while accessing the API on endpoint PATCH/assets. The error message is:\n\n",
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
      put: {
        errorBody: "An error occurred while accessing the API on endpoint PUT/companies. The error message is:\n\n",
        errorTitle: "Error!",
      },
      patch: {
        errorBody: "An error occurred while accessing the API on endpoint PATCH/companies. The error message is:\n\n",
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
      put: {
        errorBody: "An error occurred while accessing the API on endpoint PUT/units. The error message is:\n\n",
        errorTitle: "Error!",
      },
      patch: {
        errorBody: "An error occurred while accessing the API on endpoint PATCH/units. The error message is:\n\n",
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
      put: {
        errorBody: "An error occurred while accessing the API on endpoint PUT/users. The error message is:\n\n",
        errorTitle: "Error!",
      },
      patch: {
        errorBody: "An error occurred while accessing the API on endpoint PATCH/users. The error message is:\n\n",
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
      put: {
        errorBody: "An error occurred while accessing the API on endpoint PUT/workordes. The error message is:\n\n",
        errorTitle: "Error!",
      },
      patch: {
        errorBody: "An error occurred while accessing the API on endpoint PATCH/workordes. The error message is:\n\n",
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
    company: "Company: ",
  },
  usersList: {
    defaultTitle: "User",
  },
  workordersList: {
    defaultTitle: "Order",
  },
  form: {
    assets: {
      modalTitleNew: "New asset",
      modalTitleEdit: "Edit asset",
      nameLabel: "Name of asset",
      nameErrorMessage: "Please, inform the name of asset!",
      namePlaceholder: "Type the name of asset",
      statusLabel: "Status of asset",
      statusErrorMessage: "Please, inform the status of asset!",
      statusPlaceholder: "Type the status of asset",
      modelLabel: "Model of asset",
      modelErrorMessage: "Please, inform the model of asset!",
      modelPlaceholder: "Type the model of asset",
      imageLabel: "Link of the image of asset",
      imageErrorMessage: "Please, inform the link of the image of asset!",
      imagePlaceholder: "Type the link of the image of asset",
      companyLabel: "Name of company",
      companyErrorMessage: "Please, select the company!",
      companyPlaceholder: "Select the company",
      unitLabel: "Name of the unit",
      unitErrorMessage: "Please, select the unit!",
      unitPlaceholder: "Select the unit",
      assignedUserLabel: "Assigned users of asset",
      assignedUserErrorMessage: "Please select the assigned users of asset!",
      assignedUserPlaceholder: "Select the assigned users of asset",
      sensorsLabel: "Sensors of asset",
      sensorsErrorMessage: "Please type the sensors of asset!",
      sensorsPlaceholder: "Type the sensonrs of asset",
      specifications: "specifications",
      maxTemp: "Max temperature (ºC)",
      maxTempErrorMessage: "Please, Type the max temperature!",
      power: "Power (HP)",
      powerErrorMessage: "Please, Type the power!",
      rpm: "RPM",
      rpmErrorMessage: "Please, Type the RPM!",
    },
    companies: {
      modalTitleNew: "New company",
      modalTitleEdit: "Edit company",
      nameLabel: "Name of company",
      nameErrorMessage: "Please, inform the name of company!",
      namePlaceholder: "Type the name of company",
    },
    units: {
      modalTitleNew: "New unit",
      modalTitleEdit: "Edit unit",
      nameLabel: "Name of unit",
      nameErrorMessage: "Please, inform the name of unit!",
      namePlaceholder: "Type the name of unit",
      companyLabel: "Name of company",
      companyErrorMessage: "Please, select the company!",
      companyPlaceholder: "Select the company",
    },
    users: {
      modalTitleNew: "New user",
      modalTitleEdit: "Edit user",
      nameLabel: "Name of user",
      nameErrorMessage: "Please, inform the name of user!",
      namePlaceholder: "Type the name of user",
      companyLabel: "Name of company",
      companyErrorMessage: "Please, select the company!",
      companyPlaceholder: "Select the company",
      unitLabel: "Name of the unit",
      unitErrorMessage: "Please, select the unit!",
      unitPlaceholder: "Select the unit",
      emailLabel: "E-mail of the user",
      emailErrorMessage: "Please, inform the e-mail of user!",
      emailPlaceholder: "Type the e-mail of user",
    },
    workorders: {
      modalTitleNew: "New workorder",
      modalTitleEdit: "Edit workorder",
      nameLabel: "Name of workorder",
      nameErrorMessage: "Please, inform the name of workorder!",
      namePlaceholder: "Type the name of workorder",
    },
  },
  card: {
    info: "Information",
    edit: "Edit",
    del: "Delete",
    confirmDelete: "Are you sure you want to delete this item?",
  },
  infoModal: {
    title: "Information",
    data: {
      tabTitle: "Data",
      nameLabel: "Name: ",
      emailLabel: "E-mail",
      companyLabel: "Company",
      unitLabel: "Unit",
      usersLabel: "Users",
      healthscore: "Health Score",
      model: "Model",
      sensors: "Sensors",
      specifications: "Specifications",
      maxTemp: "Maximum temperature: ",
      power: "Power: ",
      rpm: "RPM: ",
      status: "Status",
      metrics: "Metrics",
      lastUptimeAt: "Last Uptime at: ",
      totalCollectsUptime: "Total collects uptime: ",
      totalUptime: "Total uptime: ",
    },
    image: {
      tabTitle: "Image",
    },
    graphs: {
      tabTitle: "Graphs",
    },
  },
};

export default us;
