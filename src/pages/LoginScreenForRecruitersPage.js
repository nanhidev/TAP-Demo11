const { expect } = require('@playwright/test');

/**
 * Page Object: LoginScreenForRecruitersPage
 * Project    : CompanyDemo
 * Generated  : 2026-06-16 06:40
 */
class LoginScreenForRecruitersPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to the given URL and wait for the page to be ready.
   */
  async navigate(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Step: Title: Login Screen for Recruiters | Test Cases Description: Verify that clicking the 'Get Started' button on the Welcom
   */
  async verifyClickingTheGetStarted() {
    await expect(this.page.locator('[data-testid='started']')).toBeVisible();
  }

  /**
   * Step: Verify the presence of the 'Get Started' button.
   */
  async verifyThePresenceOfThe() {
    await expect(this.page.locator('[data-testid='the']')).toBeVisible();
  }

  /**
   * Step: Click on the 'Get Started' button.
   */
  async clickTheGetStarted() {
    const el = this.page.locator('[data-testid='started']').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Step: Verify that the user is redirected to the Organization signup screen.
   */
  async verifyTheUserIsRedirected() {
    await expect(this.page.locator('[data-testid='redirected']')).toBeVisible();
  }

  /**
   * Step: Click on the 'Continue as Organization' button.
   */
  async clickTheContinueAsOrganization() {
    const el = this.page.locator('[data-testid='organization']').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Step: Result 2: 'Get Started' button is visible.
   */
  async performResult2GetStarted() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Result 3: User is redirected to the Organization signup screen.
   */
  async performResult3UserIs() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Result 4: User is redirected to the Login page after clicking 'Continue as Organization'. | Test data: Follow the step a
   */
  async performResult4UserIs() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Title: Login Screen for Recruiters | Test Cases Description: Verify that entering valid email and password allows the us
   */
  async fillAValidEmailAddress(value) {
    let el = this.page.locator('[data-testid='address']').first();
    if ('[data-testid='address']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='address']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  /**
   * Step: Enter a valid password in the Password field.
   */
  async fillAValidPassword(value) {
    let el = this.page.locator('[data-testid='password']').first();
    if ('[data-testid='password']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='password']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  /**
   * Step: Click on the Login button.
   */
  async clickTheLogin() {
    const el = this.page.locator('[data-testid='login']').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Step: Wait for the system to process the login request.
   */
  async waitForTheSystemToProcess() {
    await this.page.locator('[data-testid='process']').waitFor({ state: 'visible' });
  }

  /**
   * Step: Check that the dashboard displays the user's name. | Step Expected Result: Result 1: Email ID is accepted without errors
   */
  async checkThatTheDashboardDisplays() {
    const el = this.page.locator('[data-testid='displays']');
    await el.waitFor({ state: 'visible' });
    await el.check();
  }

  /**
   * Step: Result 2: Password is accepted without errors.
   */
  async performResult2PasswordIs() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Result 3: Login button is clickable.
   */
  async performResult3LoginButton() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Result 5: User's name is displayed on the dashboard. | Test data: field: "krishna@gmail.com"
   */
  async performResult5UserS() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: field: "SecurePassword123"
   */
  async performFieldSecurepassword123() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Title: Login Screen for Recruiters | Test Cases Description: Verify that the 'Show/Hide Password' option toggles the vis
   */
  async fillAPassword(value) {
    let el = this.page.locator('[data-testid='password']').first();
    if ('[data-testid='password']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='password']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  /**
   * Step: Click on the 'Show/Hide Password' option.
   */
  async clickTheShowhidePasswordOption() {
    const el = this.page.locator('[data-testid='option']').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Step: Verify that the password is visible.
   */
  async verifyThePasswordIsVisible() {
    await expect(this.page.locator('[data-testid='visible']')).toBeVisible();
  }

  /**
   * Step: Verify that the password is hidden. | Step Expected Result: Result 1: Password is entered successfully.
   */
  async verifyThePasswordIsHidden() {
    await expect(this.page.locator('[data-testid='hidden']')).toBeVisible();
  }

  /**
   * Step: Result 3: Password is hidden when 'Hide' is clicked. | Test data: field: "P@ssw0rd123"
   */
  async performResult3PasswordIs() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Verify that the Login button is enabled.
   */
  async verifyTheLoginButtonIs() {
    await expect(this.page.locator('[data-testid='is']')).toBeVisible();
  }

  /**
   * Step: Enter an incorrect password in the Password field.
   */
  async fillAn(value) {
    let el = this.page.locator('[data-testid='an']').first();
    if ('[data-testid='an']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='an']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  /**
   * Step: Verify that an error message is displayed.
   */
  async verifyAnErrorMessageIs() {
    await expect(this.page.locator('[data-testid='is']')).toBeVisible();
  }

  /**
   * Step: Verify that the user is still on the Login page. | Step Expected Result: Result 1: Email ID is accepted without errors.
   */
  async verifyTheUserIsStill() {
    await expect(this.page.locator('[data-testid='still']')).toBeVisible();
  }

  /**
   * Step: Result 4: Error message is displayed: 'Incorrect email or password.'
   */
  async performResult4ErrorMessage() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Result 5: User remains on the Login page. | Test data: field: "krishna@gmail.com"
   */
  async performResult5UserRemains() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: field: "wrongpassword"
   */
  async performFieldWrongpassword() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Title: Login Screen for Recruiters | Test Cases Description: Verify that after a failed login attempt, the user can ente
   */
  async fillNewCredentialsAndAttempt(value) {
    let el = this.page.locator('[data-testid='attempt']').first();
    if ('[data-testid='attempt']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='attempt']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  /**
   * Step: Enter valid credentials in both fields.
   */
  async fillValidCredentials(value) {
    let el = this.page.locator('[data-testid='credentials']').first();
    if ('[data-testid='credentials']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='credentials']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  /**
   * Step: Result 5: User is redirected to the dashboard after entering valid credentials. | Test data: field: "krishna@gmail.com"
   */
  async performResult5UserIs() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: field: "wrongpassword123"
   */
  async performFieldWrongpassword123() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Follow the step actions, no input data required.
   */
  async performFollowTheStepActions() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: field: "krishna@gmail.com"
   */
  async performFieldKrishnaGmailCom() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: field: "correctpassword123"
   */
  async performFieldCorrectpassword123() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Enter the new password in the Password field.
   */
  async fillTheNewPassword(value) {
    let el = this.page.locator('[data-testid='password']').first();
    if ('[data-testid='password']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='password']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  /**
   * Step: Result 2: New password is accepted without errors.
   */
  async performResult2NewPassword() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: field: "NewPassword123"
   */
  async performFieldNewpassword123() {
    // TODO: implement this step
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Step: Enter the correct password in the Password field.
   */
  async fillTheCorrectPassword(value) {
    let el = this.page.locator('[data-testid='password']').first();
    if ('[data-testid='password']'.includes('email')) el = this.page.locator('input[type="email"], input[name="email"], [placeholder*="email" i], #email').first();
    if ('[data-testid='password']'.includes('password')) el = this.page.locator('input[type="password"], input[name="password"], [placeholder*="password" i], #password').first();
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.fill(value);
  }

  async verifyDashboard() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.page).toHaveURL(/dashboard|home/i);
  }
}

module.exports = LoginScreenForRecruitersPage;
