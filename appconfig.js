// ════════════════════════════════════════════════════════════════════════════
// appconfig.js — KBN Designs TaskApp
// ─────────────────────────────────────────────────────────────────────────
// SIRF YAHAN GAS_URL CHANGE KARO — index.html ya app.js mein kuch nahi
// ════════════════════════════════════════════════════════════════════════════

window.APP_CONFIG = {

  // ── GAS Web App URL ────────────────────────────────────────────────────
  // Har nayi deployment ke baad sirf yahan update karo
  // TODO: Deploy new GAS and paste URL here
  GAS_URL: '',   // not used any more — browser talks to /api/rpc only

  // ── App Info ────────────────────────────────────────────────────────────
  APP_NAME:    'KBN Designs TaskApp',
  APP_VERSION: '1.0',
  APP_COMPANY: 'KBN Designs',

  // ── Session ─────────────────────────────────────────────────────────────
  SESSION_KEY:     'kbn_session_v1',
  SESSION_HOURS:   12,    // overridden by AppConfig from server

  // ── API Timeouts ─────────────────────────────────────────────────────────
  DEFAULT_TIMEOUT: 30000,   // 30s
  LONG_TIMEOUT:    60000,   // 60s for analytics / checklist generate

  // ── Polling ─────────────────────────────────────────────────────────────
  POLL_INTERVAL:   30000,   // 30s badge / uptime poll

};

// Convenience shortcut — app.js uses window.GAS_URL
window.GAS_URL = window.APP_CONFIG.GAS_URL;
