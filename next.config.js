const { 
  PHASE_DEVELOPMENT_SERVER, 
  PHASE_PRODUCTION_BUILD, 
  PHASE_PRODUCTION_SERVER 
} = require('next/constants');
const withSass = require('@zeit/next-sass');
const configCommon = require('./config/config.common.js');
const configDev = require('./config/config.dev.js');
const configProd = require('./config/config.prod.js');

module.exports = (phase, { defaultConfig }) => {
  
  // development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withSass({
      ...configCommon,
      ...configDev
    });
  }

  // pruduction
  if (
    phase === PHASE_PRODUCTION_BUILD ||
    phase === PHASE_PRODUCTION_SERVER
  ) {
    return withSass({
      ...configCommon,
      ...configProd
    });
  }
  
  // 其他
  return withSass({
    ...configCommon,
    ...configProd
  });
};