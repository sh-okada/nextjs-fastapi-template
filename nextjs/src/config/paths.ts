export const paths = {
  home: {
    name: "このアプリについて",
    getHref: () => "/",
  },
  login: {
    name: "ログイン",
    getHref: () => "/login",
  },
  signup: {
    name: "新規登録",
    getHref: () => "/signup",
  },
  sampleForm: {
    name: "シンプルなフォーム",
    getHref: () => "/sample/form",
  },
  sampleStepperForm: {
    register: {
      name: "ステップ形式のフォーム",
      getHref: () => "/sample/stepper-form/register",
      confirm: {
        name: "ステップ形式のフォーム",
        getHref: () => "/sample/stepper-form/register/confirm",
      },
      complete: {
        name: "ステップ形式のフォーム",
        getHref: () => "/sample/stepper-form/register/complete",
      },
    },
  },
  sampleDynamicForm: {
    name: "動的なフォーム",
    getHref: (zipcode?: string) =>
      `/sample/dynamic-form${zipcode ? `?zipcode=${encodeURIComponent(String(zipcode))}` : ""}`,
  },
} as const;
