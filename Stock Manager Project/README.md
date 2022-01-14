# Project-4 <p />
Links to projects: <br />
Web: https://hidden-fortress-58471.herokuapp.com/ <br />
API: https://desolate-island-76676.herokuapp.com/ <p />

Name: Andrew Kerr <p />

Overview/Description: This project is meant to be an easy-to-use stock trading application. Be careful as the application will only track your progress if you are logged into your account. Utilizing the power of the browser's session storage and a database, your portfolio will stay in tact. <p />

Functionality: 
**It is not recommended to use these folders holding the web and api of the project. These are simply just to show the source code of what I did to build it.** <br />
**You must create an account and login to the application to fully experience the application.** <p />
**[Portfolio]**: The portfolio holds the shares that the user currently owns. These shares include the symbol of the stock, the value that the stock was purchased at, and also, the quantity of shares. The user can choose to add more or sell shares depending on what they choose to do. You are only allowed to buy or sell a maximum of 5 shares at once per stock in the portfolio. The reason for this is to control the quantity of shares that the user has. You are also not allowed to complete a transaction if it would cause you to go below $0 and above $3000 in your wallet. The portfolio also contains the ability to reset, save, or view a history of the transactions done for the user. Resetting the portfolio clears the user's portfolio from the session storage only. The user may save a portfolio that is reset however, as long as the last save of the portfolio wasn't a blank/default one. Saving the portfolio pushes the data from the user's session storage to the database. Viewing the history of the transactions will show a chart that shows the user's wallet balance as it changes from each transaction, and it will tell you a description of the transaction. <p />
**[Stock Viewer]**: The stock viewer will display the financial history for the price of the stock if your search matches with the symbol of a stock; otherwise, it alerts that the stock could not be found. If successful, the chart with the price history will be displayed alongside the symbol and current price of the stock. The user can buy up to 5 shares of the stock. If they already have the stock in the portfolio, an alert pop-up tells you that it is already in the portfolio. If you don't have the stock in your portfolio, then the stock will be added to your portfolio, displaying the symbol, the value (current price), and the quantity that you own. <p />

Technologies used: HTML, CSS, JavaScript, React, Express, Node.js, MySQL, etc. <p />

Ideas for future imporvement: Polish up the design a little bit more, Maybe an auto-save approach for the portfolio instead of requiring it to be manually saved, Streamline the code a lot more, and allow the user to specify the range of stock prices to see on the chart in the stock viewer.
