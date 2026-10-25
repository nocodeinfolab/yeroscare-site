import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
//  EDIT THESE FOUR VALUES. They are used across the whole site.
// ─────────────────────────────────────────────────────────────
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.yeroscare.app';
const APPSTORE_URL = 'https://apps.apple.com/app/yeroscare/id0000000000';
const SUPPORT_EMAIL = 'support@yeroscare.com';
const LEGAL_URL = 'https://legal.yeroscare.com';

export default defineConfig({
  site: 'https://yeroscare.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    define: {
      __PLAY_URL__: JSON.stringify(PLAY_URL),
      __APPSTORE_URL__: JSON.stringify(APPSTORE_URL),
      __SUPPORT_EMAIL__: JSON.stringify(SUPPORT_EMAIL),
      __LEGAL_URL__: JSON.stringify(LEGAL_URL),
    },
  },
});
