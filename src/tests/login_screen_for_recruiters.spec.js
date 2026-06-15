// src/tests/LoginScreenForRecruiters.spec.js
require('dotenv').config();

const { test, expect } = require('@playwright/test');
const LoginScreenForRecruitersPage = require('../pages/LoginScreenForRecruitersPage');

test.describe('Login Screen for Recruiters', () => {
  let sample;

  test.beforeEach(async ({ page }) => {
    sample = new LoginScreenForRecruitersPage(page);
    await sample.navigate(process.env.BASE_URL);
  });

  test('Verify navigation to Organization signup screen', async () => {
    await sample.goToSignin();
  });

  test('Verify valid login with correct credentials', async () => {
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com');    
    await sample.enterPassword('SecurePassword123'); 
    await sample.clickLogin();
    await sample.verifyDashboard();                  
  });

  test('Verify Show/Hide Password functionality', async () => {
    await sample.goToSignin();
    await sample.checkShowHidePassword();
  });

  test('Verify Login button is enabled with valid data', async () => {
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com');    
    await sample.enterPassword('SecurePassword123'); 
    const btn = sample.page.locator('button:has-text("Login"), button:has-text("Sign in"), [type="submit"]').first();
    await btn.waitFor({ state: 'attached', timeout: 15000 });
    await btn.scrollIntoViewIfNeeded();
    await btn.waitFor({ state: 'visible', timeout: 15000 });
    await expect(btn).toBeEnabled();
    await sample.clickLogin();
    await sample.verifyDashboard();
  });

  test('Verify login fails with incorrect credentials', async () => {
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com'); 
    await sample.enterPassword('wrongpassword');  
    await sample.clickLogin();
    await sample.verifyLoginError();              
  });

  test('Verify login after failed attempt', async () => {
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com'); 
    await sample.enterPassword('wrongpassword123');  
    await sample.clickLogin();
    await sample.verifyLoginError();              
    await sample.enterPassword('correctpassword123'); 
    await sample.clickLogin();
    await sample.verifyDashboard();                
  });

  test('Verify login after password reset', async () => {
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com'); 
    await sample.enterPassword('NewPassword123'); 
    await sample.clickLogin();
    await sample.verifyDashboard();                
  });

  test('Verify login with lowercase email', async () => {
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com'); 
    await sample.enterPassword('correctPassword123'); 
    await sample.clickLogin();
    await sample.verifyDashboard();                
  });

  test('Verify login with mixed case email', async () => {
    await sample.goToSignin();
    await sample.enterEmail('KrIsHnA@GmAiL.cOm'); 
    await sample.enterPassword('correctPassword123'); 
    await sample.clickLogin();
    await sample.verifyDashboard();                
  });
});