const devEnv = process.env.ENVIRONMENT === "DEV";

const BASE_URL_CLIENT = devEnv
  ? "http://localhost:3001"
  : process.env.BASE_URL_CLIENT;
const JWT_TOKEN = "P@0ch@t";
const JWT_REFRESH_TOKEN = "paochatrefresh";
const TIME_EXPIRED = "1y";
const MAX_MESSAGE = 80;
const STATUS = { SUCCESS: 1, FAIL: -1 };
const GG_GET_USER =
  "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=TOKEN_ID";
const MONGO_DB_URL =
  "mongodb+srv://baobao:paopaopao@cluster0.posaw.mongodb.net/paochat?retryWrites=true&w=majority";

module.exports = {
  STATUS,
  JWT_TOKEN,
  JWT_REFRESH_TOKEN,
  TIME_EXPIRED,
  MONGO_DB_URL,
  GG_GET_USER,
  MAX_MESSAGE,
  BASE_URL_CLIENT,
};
