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
} as const;

export { paths };
