
// export default {
//   nameRules: [
//     (v) => !!v || 'Name is required',
//     (v) => v && v.length >= 5 || 'Name must be biger than 4 characters',
//     (v) => v && v.length <= 24 || 'Name must be less than 25 characters',
//   ],
//   emailRules: [
//     (v) => !!v || 'Email is required',
//     (v) => /.+@.+/.test(v) || 'E-mail must be valid'
//   ],
//   cityRules:[
//     (v) => !!v || 'Name is required',
//     (v) => v && v.length >= 5 || 'Name must be biger than 4 characters',
//     (v) => v && v.length <= 35 || 'Name must be less than 25 characters',
//   ],
//   mobileRules:[
//     (v) => !!v || 'Number is required',
//     (v) => v && v.length >= 5 || 'Name must be biger than 4 characters',
//     (v) => v && v.length <= 35 || 'Name must be less than 25 characters',
//   ]
// }

let required = (propertyType) => { 
  return v => v && v.length > 0 || `You must input a ${propertyType}`
}
let minLength = (propertyType, minLength) => {
  return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength} characters`
}
let maxLength = (propertyType, maxLength) => {
  return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`
}
let number = (number) => {
  return v => v && number
}
let emailFormat = () => {
  let regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  return v => v && regex.test(v) || "Must be a valid email"
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
  number
}