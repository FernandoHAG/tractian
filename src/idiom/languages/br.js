const br = {
  api: {
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
      put: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint PUT/assets. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      patch: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint PATCH/assets. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
    },
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
      patch: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint PATCH/companies. A mensagem de erro é:\n\n",
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
      put: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint PUT/units. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      patch: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint PATCH/units. A mensagem de erro é:\n\n",
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
      put: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint PUT/users. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      patch: {
        errorBody: "Um erro ocorreu enquanto tentava acessar a API no endpoint PATCH/users. A mensagem de erro é:\n\n",
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
      put: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint PUT/workorders. A mensagem de erro é:\n\n",
        errorTitle: "Erro!",
      },
      patch: {
        errorBody:
          "Um erro ocorreu enquanto tentava acessar a API no endpoint PATCH/workorders. A mensagem de erro é:\n\n",
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
    company: "Empresa: ",
  },
  usersList: {
    defaultTitle: "Usuário",
  },
  workordersList: {
    defaultTitle: "Orden",
  },
  form: {
    assets: {
      modalTitleNew: "Novo Ativo",
      modalTitleEdit: "Editar Ativo",
      nameLabel: "Nome do Ativo",
      nameErrorMessage: "Por favor, informe o nome do ativo!",
      namePlaceholder: "Digite o nome do ativo",
      statusLabel: "Status do Ativo",
      statusErrorMessage: "Por favor, informe o status do ativo!",
      statusPlaceholder: "Digite o status do ativo",
      modelLabel: "Modelo do Ativo",
      modelErrorMessage: "Por favor, informe o modelo do ativo!",
      modelPlaceholder: "Digite o modelo do ativo",
      imageLabel: "Link da imagem do Ativo",
      imageErrorMessage: "Por favor, informe o link da imagem do ativo!",
      imagePlaceholder: "Digite o link da imagem do ativo",
      companyLabel: "Nome da compania",
      companyErrorMessage: "Por favor, selecione a compania!",
      companyPlaceholder: "Selecione a compania",
      unitLabel: "Nome da unidade",
      unitErrorMessage: "Por favor, selecione a unidade!",
      unitPlaceholder: "Selecione a unidade",
      assignedUserLabel: "Usuários atribuidos ao Ativo",
      assignedUserErrorMessage: "Por favor, informe os usuários atribuidos ao ativo!",
      assignedUserPlaceholder: "Digite os usuários atribuidos ao ativo",
      sensorsLabel: "Sensores do Ativo",
      sensorsErrorMessage: "Por favor, informe os sensores do ativo!",
      sensorsPlaceholder: "Digite os sensores do ativo",
      specifications: "especificações",
      maxTemp: "Temperatura máxima (ºC)",
      maxTempErrorMessage: "Por favor, preencha a temperatura máxima!",
      power: "Potência (HP)",
      powerErrorMessage: "Por favor, preencha a potência!",
      rpm: "RPM",
      rpmErrorMessage: "Por favor, preencha o RPM!",
    },
    companies: {
      modalTitleNew: "Nova empresa",
      modalTitleEdit: "Editar empresa",
      nameLabel: "Nome da empresa",
      nameErrorMessage: "Por favor, informe o nome da empresa!",
      namePlaceholder: "Digite o nome da empresa",
    },
    units: {
      modalTitleNew: "Nova unidade",
      modalTitleEdit: "Editar unidade",
      nameLabel: "Nome da unidade",
      nameErrorMessage: "Por favor, informe o nome da unidade!",
      namePlaceholder: "Digite o nome da unidade",
      companyLabel: "Nome da compania",
      companyErrorMessage: "Por favor, selecione a compania!",
      companyPlaceholder: "Selecione a compania",
    },
    users: {
      modalTitleNew: "Nova usuário",
      modalTitleEdit: "Editar usuário",
      nameLabel: "Nome do usuário",
      nameErrorMessage: "Por favor, informe o nome do usuário!",
      namePlaceholder: "Digite o nome do usuário",
      companyLabel: "Nome da compania",
      companyErrorMessage: "Por favor, selecione a compania!",
      companyPlaceholder: "Selecione a compania",
      unitLabel: "Nome da unidade",
      unitErrorMessage: "Por favor, selecione a unidade!",
      unitPlaceholder: "Selecione a unidade",
      emailLabel: "E-mail do usuário",
      emailErrorMessage: "Por favor, informe o e-mail do usuário!",
      emailPlaceholder: "Digite o email so usuário",
    },
    workorders: {
      modalTitleNew: "Nova ordem de trabalho",
      modalTitleEdit: "Editar ordem de trabalho",
      nameLabel: "Nome da ordem de trabalho",
      nameErrorMessage: "Por favor, informe o nome da ordem de trabalho!",
      namePlaceholder: "Digite o nome da ordem de trabalho",
    },
  },
  card: {
    info: "Informações",
    edit: "Editar",
    del: "Deletar",
    confirmDelete: "Tem certeza que deseja deletar este item?",
  },
  infoModal: {
    title: "Informações",
    data: {
      tabTitle: "Dados",
      nameLabel: "Nome: ",
      emailLabel: "E-mail",
      companyLabel: "Empresa",
      unitLabel: "Unidade",
      usersLabel: "Usuários",
      healthscore: "Pontos de saúde",
      model: "Modelo",
      sensors: "Sensores",
      specifications: "Especificações",
      maxTemp: "Temperatura máxima: ",
      power: "Potência: ",
      rpm: "RPM: ",
      status: "Status",
      metrics: "Métricas",
      lastUptimeAt: "Ultima vez ligado: ",
      totalCollectsUptime: "Tempo total de coleta: ",
      totalUptime: "Total de horas ligado: ",
    },
    image: {
      tabTitle: "Imagem",
    },
    graphs: {
      tabTitle: "Gráficos",
    },
  },
};

export default br;
