export const paths = {
  home: {
    name: "このアプリについて",
    getHref: (query: { page?: string }) =>
      `/?${new URLSearchParams(query).toString()}`,
  },
  login: {
    name: "ログイン",
    getHref: () => "/login",
  },
  signup: {
    name: "新規登録",
    getHref: () => "/signup",
  },
  doc: {
    name: "ドキュメント",
    getHref: (id: string) => `/doc/${id}`,
  },
  postDoc: {
    name: "ドキュメントを書く",
    getHref: () => "/doc/post",
  },
  simpleForm: {
    name: "シンプルなフォーム",
    getHref: () => "/sample/simple-form",
  },
  stepperFormRegister: {
    name: "ステップ形式のフォーム",
    getHref: () => "/sample/stepper-form/register",
  },
  stepperFormConfirm: {
    name: "ステップ形式のフォーム",
    getHref: () => "/sample/stepper-form/register/confirm",
  },
  stepperFormComplete: {
    name: "ステップ形式のフォーム",
    getHref: () => "/sample/stepper-form/register/complete",
  },
  dynamicForm: {
    name: "動的なフォーム",
    getHref: (query?: { zipcode?: string }) =>
      `/sample/dynamic-form?${new URLSearchParams(query).toString()}`,
  },
} as const;
