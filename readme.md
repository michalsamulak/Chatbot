# ![cover](/Chatbot.gif)



# CHATBOT

CHATBOT widget to easy implement on the any website. 
This Chatbot can improve your communication with users thanks to very convenient way of adding predominate most common questions and answers.
Bot it's imitating conversation with human. Thanks to it is more user friendly.

## Tool & technologies I've used

- Visual Studio Code
- SASS
- TS

One of the difficulties during creating application were imitating human writing behavior and animated that proces. To animated CSS I inspired from online messengers with 3 dots loading effect and writing delay effect I create thanks to setTimeout function.


## How to use it

Download zip file and unpack it. 
Use `npm install` command to get all required dependencies.
```
npm install
```

Import Chatbot class from index.ts file and initial class with `new Chatbot()` as the argument provide in what HTML element you whish to attached or as the default is body. Use method `init()` to run chat. If you wish to provided options and replies use method `setQues(options, replyes)` were options is array with predominated question and replyes is array with answers.
```
const chat = new Chatbot()
chat.init()
chat.setQues(options, replyes)
```
I hope you enjoy this app

### I built this program thanks to knowledge what I learn from fundamentals at [Localhoste Academy](https://academy.localhost-group.com/)
