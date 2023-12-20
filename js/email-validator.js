const VALID_EMAIL_ENDINGS = [
    "redberry.ge",
  ];

  const isValid = (email) => {
    for (const endingEl of VALID_EMAIL_ENDINGS) {
      if (email.endsWith(endingEl)) {
        return true;
      }
    }
    return false;
  };
 
  function validate(email) {
    return isValid(email);
  }
  
  
  
  export { validate};
  