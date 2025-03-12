import dotenv from 'dotenv';

dotenv.config();
const env = process.env.NODE_ENV;

let BACKEND_URL: string;

switch (env) {
  case 'development':
    BACKEND_URL = 'http://localhost:3000'
    break;
  default:
    break;
};

export { BACKEND_URL };