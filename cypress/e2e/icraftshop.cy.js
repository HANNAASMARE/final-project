/// <reference types = "cypress"/>

import  Register from './pageobject/Register/Register'
import login from './pageobject/login/login'
import product from './pageobject/product/product'
import cart from './pageobject/cart/cart'

let dt
describe('icraftshope',() => {
 
    before (() =>{
     cy.fixture('icraftshopedata').then(function(data){

      dt = data
      
    })

    })
    it('passes', () => {
  
      cy.visit('http://shop.icraftsoft.net:8095/')
      const R = new Register()

      R.registerButton().eq(0).click()
      R.username().type(dt.name)
      R.email().type(dt.email)
     cy.wait(4000)
     R.submitButton().eq(0).click()

      })
      it('login',()=>{
        cy.visit('http://shop.icraftsoft.net:8095/')
        const logs = new login()
        const pr = new product()
        const cr = new cart()
        
        
        const L = new login
        L.logins().type(dt.loginid)
        L.loginButton().eq(1).click()

        cy.wait(4000)
        cy.get('#myTable_filter > label > .form-control').type('FZA')
        cy.wait(4000)
        cy.selectProduct("FZA") 

       for(let index = 0; index < dt.productName.length;index++){
        cy.selectProduct(dt.productName[index])
       }
       cr.carts();
      })
    })
