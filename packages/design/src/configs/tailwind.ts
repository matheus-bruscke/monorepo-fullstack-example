import type { Config } from 'tailwindcss'
import { brand, layout, neutral } from '../foundations/colors'

export const config = {
	theme: {
		extend: {
			colors: {
				'ds-brand': brand,
				'ds-neutral': neutral,
				'ds-layout': layout,
			},
		},
	},
} satisfies Partial<Config>
