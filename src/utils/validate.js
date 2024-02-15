export const checkValidateData = (email, password, name) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      password
    );
  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Passsword is not valid";
  if (!isNameValid) return "Name is not valid";
  return null;
};
