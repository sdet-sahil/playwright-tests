
export const commonConfig = {
  endpoints: {
    download: '/file-download.php',
    upload: '/file-upload.php',
  },

  timeouts: {
    apiResponse: 10000,
    pollingInterval: 1000,
  },

  headers: {
    contentType: 'application/json',
  },
};