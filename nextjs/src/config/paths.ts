const paths = {
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
} as const;

export { paths };
