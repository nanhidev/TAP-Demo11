// src/tests/nlpSmartSearch.spec.js
require('dotenv').config();

const { test, expect } = require('@playwright/test');
const NlpSmartSearchForCandidateProfilesPage = require('../pages/NlpSmartSearchForCandidateProfilesPage');

test.describe('NLP Smart Search for Candidate Profiles', () => {

  // ── TYPE A: LOGIN TEST — valid credentials ──
  test('Valid login with correct credentials', async ({ page }) => {
    const sample = new NlpSmartSearchForCandidateProfilesPage(page);
    await sample.navigate(process.env.BASE_URL);
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com'); // literal from Excel Test data
    await sample.enterPassword('SecurePassword123'); // literal from Excel Test data
    await sample.clickLogin();
    await sample.verifyDashboard(); // positive: assert dashboard reached
    await sample.waitForNetworkIdle();
  });

  // ── TYPE A: LOGIN TEST — invalid credentials ──
  test('Login fails with wrong password', async ({ page }) => {
    const sample = new NlpSmartSearchForCandidateProfilesPage(page);
    await sample.navigate(process.env.BASE_URL);
    await sample.goToSignin();
    await sample.enterEmail('krishna@gmail.com'); // literal from Excel Test data
    await sample.enterPassword('wrongpassword'); // literal from Excel Test data
    await sample.clickLogin();
    await sample.verifyLoginError(); // negative: assert error message
  });

  // ── TYPE B: IN-APP TEST — search candidates ──
  test('Search for candidates using natural language query', async ({ page }) => {
    const sample = new NlpSmartSearchForCandidateProfilesPage(page);
    await sample.navigate(process.env.BASE_URL);
    await sample.goToSignin();
    await sample.enterEmail(process.env.EMAIL); // .env — real app credentials
    await sample.enterPassword(process.env.PASSWORD);
    await sample.clickLogin();
    await sample.verifyDashboard(); // confirm login succeeded
    await sample.waitForNetworkIdle(); // wait for full page load
    await sample.searchCandidates('JavaScript developer in New York');
    await sample.checkCandidateProfiles(); // assert candidate profiles are displayed
  });

  // ── TYPE B: IN-APP TEST — search with no results ──
  test('Search for candidates with no matching profiles', async ({ page }) => {
    const sample = new NlpSmartSearchForCandidateProfilesPage(page);
    await sample.navigate(process.env.BASE_URL);
    await sample.goToSignin();
    await sample.enterEmail(process.env.EMAIL); // .env — real app credentials
    await sample.enterPassword(process.env.PASSWORD);
    await sample.clickLogin();
    await sample.verifyDashboard(); // confirm login succeeded
    await sample.waitForNetworkIdle(); // wait for full page load
    await sample.searchCandidates('Nonexistent skill or location');
    await sample.checkNoProfilesFound(); // assert no profiles found message is displayed
  });

});