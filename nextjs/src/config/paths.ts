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
  sampleStepperFormRegister: {
    name: "ステップ形式のフォーム",
    getHref: () => "/sample/stepper-form/register",
  },
  sampleStepperFormConfirm: {
    name: "ステップ形式のフォーム",
    getHref: () => "/sample/stepper-form/confirm",
  },
} as const;
