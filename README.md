# telegram-bot-boilerplate
A quick base for developing a Telegram bot.

Uses https://github.com/yagop/node-telegram-bot-api

##Basic usage:
-Install node modules (npm install)
-Set Telegram bot token in config.json
-Start app (node .) or use nodemon to auto-restart during dev.

##Routing:
-Commands start with "/". 
-Each command is parsed by router.js and then the relevant controller is loaded, and execute is called on it. See controllers/start.js for example.

##TODO:
[] Basic user authentication/management
[] Handle more than just commands (i.e. chatbot integration).
[] Handle other message types
[] Sample channel management
[] Standardise HTML keyboard management
[] Standardise GPS location handling
[] Standardise file handling