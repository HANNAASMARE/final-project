
class Register{

  registerButton(){
    return cy.get('.login-form-2 > form > .form-group > .btnSubmit');
  } 
  username(){
    return cy.get("input[type='text']")

        //  return cy.get(':nth-child(2) > form-control');
  } 
  email(){
        return cy.get(':nth-child(3) > .form-control');
  } 
  submitButton(){
        return cy.get('.btnSubmit');
  }
    info(){ 
    return cy.get(':nth-child(3) > :nth-child(3)');

  }
} 
export default Register;