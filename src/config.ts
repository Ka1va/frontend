export enum EnvTypes {
  development = 'development',
  production = 'production',
  stage = 'staging',
}

const envType: EnvTypes =
  process.env.REACT_APP_NODE_ENV as EnvTypes ||
  process.env.NODE_ENV ||
  EnvTypes.development;

const config = {
  apiBaseUrl: 'https://intern.fusion-team.com/api',
};

// eslint-disable-next-line default-case
switch (envType) {
  case EnvTypes.production:
    config.apiBaseUrl = 'https://intern.fusion-team.com/api';
    break;

  case EnvTypes.stage:
    config.apiBaseUrl = 'https://intern.fusion-team.com/api';
    break;
}

export const isDev = envType === EnvTypes.development;

export default config;
