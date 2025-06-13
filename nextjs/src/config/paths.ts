const paths = {
  home: {
    name: "このアプリについて",
    path: "/",
    getHref: () => "/",
  },
  login: {
    name: "ログイン",
    path: "/login",
    getHref: () => "/login",
  },
  signup: {
    name: "新規登録",
    path: "/signup",
    getHref: () => "/signup",
  },
  profile: {
    name: "サンプルフォーム",
    path: "/profile",
    getHref: () => "/profile",
  },
} as const;

export { paths };
