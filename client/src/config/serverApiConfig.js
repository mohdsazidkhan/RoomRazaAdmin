console.log(
  "process env REACT_APP_DEV_REMOTE",
  process.env.REACT_APP_DEV_REMOTE
)

export const API_BASE_URL =
process.env.NODE_ENV == "production" ||
  process.env.REACT_APP_DEV_REMOTE == "remote"
    ? "https://erp-crm.idurarapp.com/api/"
    : "http://localhost:4000/api/"

export const ACCESS_TOKEN_NAME = "token"
