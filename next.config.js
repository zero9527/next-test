const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const configCommon = require('./config/config.common.js');
const configDev = require('./config/config.dev.js');
const configProd = require('./config/config.prod.js');

/**
 *  phase 是当前配置的环境，如下是 开发环境 development;
 * 'next/constants' 包含了所有的 phase 常量
 * export const PHASE_EXPORT = 'phase-export'
 * export const PHASE_PRODUCTION_BUILD = 'phase-production-build'
 * export const PHASE_PRODUCTION_SERVER = 'phase-production-server'
 * export const PHASE_DEVELOPMENT_SERVER = 'phase-development-server'
 */
module.exports = (phase, { defaultConfig }) => {
  
  // development
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withTypescript(
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
    return withTypescript(
      withSass({
        ...configCommon,
        ...configProd
      })
    );
  }
  
  // 其他
  return withTypescript(
    withSass({
      ...configCommon,
      ...configDev
    })
  );
};