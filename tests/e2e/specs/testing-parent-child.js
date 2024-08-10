module.exports = {
  'Testeando comunicación entre Parent y Child components': function (browser) {
    browser
      .url('http://localhost:8080/parent') // Replace with your Vue app's URL
      .waitForElementVisible('#app', 5000) // Wait for your Vue app to load
      .setValue('input[type=text]', 'Hello from Child!')
      .click('button[type=submit]')
      .waitForElementVisible('h1', 5000) // Wait for the data to be displayed in Parent
      .assert.containsText('h1', 'Content received: Hello from Child!')
      .end();
  }
};