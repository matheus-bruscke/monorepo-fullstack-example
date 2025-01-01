import type { Config } from 'tailwindcss'
import { brand, neutral } from '../foundations/colors'

export const config = {
	theme: {
		extend: {
			colors: {
				'ds-brand': brand,
				'ds-neutral': neutral,
				'ds-layout': neutral,
			},
		},
	},
} satisfies Partial<Config>
