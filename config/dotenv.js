module.exports = function(env) {
  return {
    clientAllowedKeys: [
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DB_URL',
      'FIREBASE_PROJ_ID',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MSG_SENDER_ID'
    ],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};
