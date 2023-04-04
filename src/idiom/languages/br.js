const br = {
  companyAPI: {
    get: {
      errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint GET/companies. A mensagem de erro é:\n\n",
      errorTitle: "Erro!",
    },
    delete: {
      errorBody:
        "Um erro ocorreu enquanto tentava acessar a API no endpoint DELETE/companies. A mensagem de erro é:\n\n",
      errorTitle: "Erro!",
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
  companiesList: {
    defaultTitle: "Empresa",
  },
};

export default br;
