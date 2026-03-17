Feature('login');


Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login');
    I.fillField('#user','judsonlopes88@gmail.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.see('Login realizado Olá, judsonlopes88@gmail.com')
    
})

Scenario('Tentando logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login');
    I.fillField('#user','judsonlopes88@gmail.com')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.see('Senha inválida.')

})

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login');
    I.fillField('#user','')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.see('E-mail inválido.')

})

Scenario('Tentando logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login');
    I.fillField('#user','')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.see('E-mail inválido.')

})
