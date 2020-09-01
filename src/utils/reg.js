const MAIL_CHECK = (str) => {
  return /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str)
}
const PASSWORD_CHECK = (str) => {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(str) 
}
export default {
  MAIL_CHECK,
  PASSWORD_CHECK
}