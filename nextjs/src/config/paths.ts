const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  login: {
    path: "/login",
    getHref: () => "/login",
  },
  signup: {
    path: "/signup",
    getHref: () => "/signup",
  },
  profile: {
    path: "/profile",
    getHref: () => "/profile",
  },
} as const;

export { paths };
