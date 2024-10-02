const config = {
	launch: {
		headless: false,
		args: [
			// `--single-process` flag by omitting it
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-dev-shm-usage',
			'--disable-accelerated-2d-canvas',
			'--disable-gpu',
		],
	},
};

export default config;