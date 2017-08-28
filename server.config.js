const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  apiServer: 'localhost:3001',
  port: env.PORT || 3000,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};