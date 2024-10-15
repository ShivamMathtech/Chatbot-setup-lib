# Chatbot Setup

`chatbot-setup` is a simple Node.js library that allows you to integrate a chatbot into your application. It provides pre-defined answers to common questions, making it easy to set up a basic chatbot for your website or application.

## Installation

You can install the `chatbot-setup` package using npm:

```bash
 npm i chatbot-setup
```
# Usage
After installing the package, you can use it in your project as follows:

# Basic Setup
```
const { getAnswer } = require('./index');

// Test with different questions
console.log(getAnswer("What is your name?")); // I am ChatBot, your virtual assistant.
console.log(getAnswer("Tell me a joke.")); // Why don’t programmers like nature? It has too many bugs!
console.log(getAnswer("How can you help me?")); // I can answer your questions based on the information I have!
console.log(getAnswer("What services do you provide?")); // I provide responses to predefined questions and assist with simple tasks.
console.log(getAnswer("What is Node.js?")); // I'm sorry, I don't have an answer for that question.
```
# License
This project is licensed under the MIT License.
# Author
Shivam Singh
