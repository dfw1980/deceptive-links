const config = {
	urls: [
		{ url: "http://typosquatting", deceptive: true, method: 1 },
		{ url: "http://typosquatting2", deceptive: true, method: 1 },
		{ url: "http://deceptive_url_ext", deceptive: true, method: 2 },
		{ url: "http://trusted_domain_spoofing", deceptive: true, method: 3 },
		{ url: "http://trusted_domain_redirection", deceptive: true, method: 4 },
		{ url: "http://legitimate_url", deceptive: false, method: 0 },
		{ url: "http://google.com", deceptive: false, method: 0 },
		{ url: "http://facebook.com", deceptive: false, method: 0 },
		{ url: "http://youtube.com", deceptive: false, method: 0 },
		{ url: "http://instagram.com", deceptive: false, method: 0 },
		{
			url: "www.google.com/blabla/bla/blabla/bla/bla.exe",
			deceptive: false,
			method: 0,
		},
	],
	videoIDS: {
		introduction: "r02Mo02Qy_E",
		typosquatting: "OhFCzx8zo8s",
		TDS: "e0AkFnXUynI",
		TDR: "YYzcoz8RARs",
	},
};
export default config;
