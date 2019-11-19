const { 
  PHASE_DEVELOPMENT_SERVER, 
  PHASE_PRODUCTION_BUILD, 
  PHASE_PRODUCTION_SERVER 
} = require('next/constants');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const configCommon = require('./config/config.common.js');
const configDev = require('./config/config.dev.js');
const configProd = require('./config/config.prod.js');

module.exports = (phase, { defaultConfig }) => {
  
  // development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withCSS(
      withSass({
        ...configCommon,
        ...configDev
      })
    );
  }

  // pruduction
  if (
    phase === PHASE_PRODUCTION_BUILD ||
    phase === PHASE_PRODUCTION_SERVER
  ) {
    return withCSS(
      withSass({
        ...configCommon,
        ...configProd
      })
    );
  }
  
  // 其他
  return withCSS(
    withSass({
      ...configCommon,
      ...configProd
    })
  );
};