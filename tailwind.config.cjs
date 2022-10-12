const {slate, red} = require("tailwindcss/colors")


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: red[500],
                // neutral: slate,
            }
        },
	},
	plugins: [],
};
