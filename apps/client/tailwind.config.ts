import { config as dsConfig } from '@repo/design'
import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {},
	presets: [dsConfig],
	plugins: [],
} satisfies Config
