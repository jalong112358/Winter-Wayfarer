const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 charecters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (Validator.isEmpty(data.subject)) {
    errors.subject = "Subject field is required";
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = "Please enter your message";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
