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
  apiBaseUrl: 'http://54.193.222.125',
};

// eslint-disable-next-line default-case
switch (envType) {
  case EnvTypes.production:
    config.apiBaseUrl = 'http://54.193.222.125';
    break;

  case EnvTypes.stage:
    config.apiBaseUrl = 'http://54.193.222.125';
    break;
}

export const isDev = envType === EnvTypes.development;

export default config;
