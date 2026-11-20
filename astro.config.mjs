// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
      enabled: false
    },

  /* 
      redirects: {
          "/chat-guide": "/chat",
          "/calendar": "/#calendar",
          "/join": "https://act.dsausa.org/donate/membership/",
          "/proposal": "https://docs.google.com/forms/d/e/1FAIpQLScf2BFwYRuuAyI-ZvWSUlqywyndKDLNaSjGUSsmROHr_JBGfw/viewform",
          "/email": "https://actionnetwork.org/forms/join-our-mailing-list-153",
          "/announcements": "https://signal.group/#CjQKIKdyBrfxzJgQPIcbBHgz-__aywc3fyY46hzIW6VShXcGEhDehiRcyvcVvp5dIglT7731",
          "/donate": "https://actionnetwork.org/fundraising/donate-to-bloomington-dsa?source=bloomingtondsa.org&",
          "/sign-in": "https://docs.google.com/forms/d/e/1FAIpQLScDLp6x0HsGGa2TIKJjZjE2m4Rt2AAmTT_94KYYKrygdgDqTw/viewform?usp=preview",
          "/discord": "https://discord.gg/uhfySdvq6t",
          "/instagram": "https://instagram.com/bloomingtondsa/",
          "/facebook": "https://www.facebook.com/bloomingtondsa/",
          "/anti-flock": "https://linktr.ee/btownflocksafety",
          "/change-everything": "/",
          "/ewoc": "https://docs.google.com/forms/d/e/1FAIpQLSc2qnqUUVUz8i16Fji7J8pMGaVJBFcwPWsLTqgdAkQtQTFNAA/viewform",
    },
   */

  site: 'https://bloomingtondsa.org',

  integrations: [
  	sitemap({
            filter: (page) => !page.includes('/errors/'),
            customPages: [
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