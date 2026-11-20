// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	devToolbar: {
			enabled: false
		},

		redirects: {
				"/proposal": "https://docs.google.com/forms/d/e/1FAIpQLScf2BFwYRuuAyI-ZvWSUlqywyndKDLNaSjGUSsmROHr_JBGfw/viewform",
				"/announcements": "https://indianagradworkers.org/meet-with-me",
				"/donate": "https://actionnetwork.org/fundraising/donate-to-bloomington-dsa?source=bloomingtondsa.org&",
				"/sign-in": "https://docs.google.com/forms/d/e/1FAIpQLScDLp6x0HsGGa2TIKJjZjE2m4Rt2AAmTT_94KYYKrygdgDqTw/viewform?usp=preview",
				"/change-everything": "/",
				"/anti-flock": "https://linktr.ee/btownflocksafety",
				"/flock": "/community-defense-committee",
				"/chat-guide": "/chat",
				"/discord": "https://discord.gg/uhfySdvq6t",
				"/meet": "https://discord.gg/uhfySdvq6t",
				"/instagram": "https://instagram.com/bloomingtondsa/",
				"/facebook": "https://www.facebook.com/bloomingtondsa/",
				"/job-board": "https://docs.google.com/spreadsheets/d/1lYSCVKPTsNHtq-WHOtZJp7ekxCCa2xgwghk-kENaJeI/edit?usp=sharing",
				"/local-dues": "https://actionnetwork.org/fundraising/bloomington-dsa-local-dues-2",
				"/dues": "https://actionnetwork.org/fundraising/bloomington-dsa-local-dues-2",
				"/cardinal": "https://actionnetwork.org/fundraising/bloomington-dsa-local-dues-2",
				"/shirt": "https://actionnetwork.org/fundraising/donate-to-bloomington-dsa-to-receive-a-t-shirt",
				"/pdfs/Bloomington+DSA+2027+Voter+Guide.pdf": "/pdfs/Bloomington%20DSA%202027%20Voter%20Guide.pdf",
				"/housing-survey": "https://docs.google.com/forms/d/e/1FAIpQLSfhSBC78cnQ1JSF_A5TSlSolqjnuKbwU0uoEN-L-kF45IXgCw/viewform",
		},

	site: 'https://bloomingtondsa.org',

	integrations: [
		sitemap({
						filter: (page) => !page.includes('/errors/'),
						customPages: [
								'https://bloomingtondsa.org/pdfs/Bloomington%20DSA%202027%20Voter%20Guide.pdf',
								'https://bloomingtondsa.org/pdfs/Bloomington%20DSA%20Petition%20for%20Endorsement.pdf',
								'https://bloomingtondsa.org/pdfs/DSA%20Letter%20Opposing%20ICE%20Cooperation%20and%20Flock%20Safety.pdf',
								'https://bloomingtondsa.org/pdfs/DSA-IGWC-Endorsement.pdf',
								'https://bloomingtondsa.org/pdfs/ice-and-know-your-rights.pdf',
								]
				})
	],

	adapter: node({
		mode: "standalone",
	}),
});