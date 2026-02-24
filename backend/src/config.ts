export const config = {
  port: parseInt(process.env.PORT || "8080"),
  dataDir: process.env.DATA_DIR || "./data",
  publicBaseUrl: process.env.PUBLIC_BASE_URL || "",
  disableHttpsRedirect:
    process.env.UNSAFE_DANGEROUSLY_DISABLE_HTTPS_REDIRECT === "true",
  
  // Storage auto-cleanup environment variables (0 to disable)
  // 通过环境变量配置自动清理天数和最大空间，0为禁用
  autoCleanupDays: parseInt(process.env.AUTO_CLEANUP_DAYS || "0"),
  autoCleanupMaxMB: parseInt(process.env.AUTO_CLEANUP_MAX_MB || "0"),
};

export const MAX_DOWNLOAD_SIZE = 8 * 1024 * 1024 * 1024; // 8 GB
export const DOWNLOAD_TIMEOUT_MS = 8 * 60 * 60 * 1000; // 8 hours
export const BAG_TIMEOUT_MS = 15_000; // 15 seconds
export const BAG_MAX_BYTES = 1024 * 1024; // 1 MB
export const MIN_ACCOUNT_HASH_LENGTH = 8;
