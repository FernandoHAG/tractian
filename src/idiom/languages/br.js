const br = {
  api: {
    companies: {
      get: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint GET/companies. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      delete: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint DELETE/companies. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      put: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint PUT/companies. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
    },
    assets: {
      get: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint GET/assets. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      delete: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint DELETE/assets. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
    },
    units: {
      get: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint GET/units. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      delete: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint DELETE/units. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
    },
    users: {
      get: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint GET/users. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      delete: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint DELETE/users. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
    },
    workorders: {
      get: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint GET/workordes. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      delete: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint DELETE/workordes. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
    },
  },
  header: {
    Segmented: {
      labelAssets: "Ativos",
      labelCompanies: "Empresas",
      labelUnits: "Unidades",
      labelUsers: "Usuários",
      labelWorkorders: "ordens de trabalho",
    },
  },
  footer: {
    languageSelector: {
      placeholder: "Idioma",
    },
    themeSelector: {
      themeLabel: "Tema",
    },
  },
  assetsList: {
    defaultTitle: "Ativo",
  },
  companiesList: {
    defaultTitle: "Empresa",
  },
  unitsList: {
    defaultTitle: "Unidade",
  },
  usersList: {
    defaultTitle: "Usuário",
  },
  workordersList: {
    defaultTitle: "Orden",
  },

  form: {
    companies: {
      modalTitleNew: "Nova Empresa",
      modalTitleEdit: "Editar Empresa",
      nameLabel: "Nome da Empresa",
      nameErrorMessage: "Por favor, informe o nome da empresa!",
      namePlaceholder: "Digite o nome da empresa",
    },
  },
};

export default br;
