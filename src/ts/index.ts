import { createElementWithClass, createElementWithManyClass, addElemntsToContainer, setAttr, loaderAnimation, removeLoader } from './helpers'
const body = document.querySelector<HTMLBodyElement>('.body')!

// sendMessage
const createMessageElement = (messType: 'bot' | 'user') => createElementWithManyClass('div', [`chat__${messType}`, 'chat__message'])


class Chatbot {
  input: any
  submitInput: HTMLElement
  chatBtn: HTMLElement
  chatContainer: HTMLElement
  chatQuesBtn: any
  chatQues: HTMLDivElement
  root: HTMLElement
  chatWindow: HTMLElement
  quesOptions: string[]
  quesReply: string[]
  loader: HTMLElement


  constructor(root: HTMLElement = document.body) {
    this.root = root
    this.input = createElementWithClass('input', 'chat__input--field')
    this.submitInput = createElementWithClass('button', 'chat__input--submit')
    this.chatBtn = createElementWithClass('button', 'chat__btn')
    this.loader = loaderAnimation()
    this.chatContainer = createElementWithManyClass('div', ['chat__container', 'active'])
    this.chatQues = document.createElement('div')
    this.chatWindow = createElementWithClass('div', 'chat__window')
    this.quesOptions = ['Payment declined', 'Payment info', 'Unknown charge', 'Promotions and Deals']
    this.quesReply = ['I am very sorry your card has been declined', 'Your last paymant was $3.000', 'I will transfer you to... ', 'Are special deals for you...  ']
  }

  init() {
    const welcome = createMessageElement('bot')
    welcome.innerHTML = 'Welcome! Ask me a question so I can help you or chose one of the options:'
    this.chatWindow.appendChild(welcome)
    this.createLayout()
    this.chatEventsHandler()
    this.botQueHandler()
  }

  createLayout() {
    // creating elements
    const chatDiv = createElementWithClass('div', 'chat')
    const chatInput = createElementWithClass('form', 'chat__input')

    this.chatBtn.innerHTML = 'Chat'

    setAttr(this.input, { type: 'text', placeholder: 'Ask me question...?' })
    setAttr(this.submitInput, { type: 'submit' }, '✔')

    //appending element
    this.root.appendChild(chatDiv)
    addElemntsToContainer(chatDiv, [this.chatBtn, this.chatContainer])
    addElemntsToContainer(this.chatContainer, [this.chatWindow, chatInput])
    addElemntsToContainer(chatInput, [this.input, this.submitInput])
    this.chatWindow.appendChild(this.chatQues)
  }

  botAnswers(question: string) {
    const findAnswer = this.quesOptions.indexOf(question)
    const botMessage = findAnswer === -1 ? 'I\'m sorry. Chose one of the folowing options: ' : this.quesReply[findAnswer];
    const chatBotMessage = createMessageElement('bot')



    chatBotMessage.appendChild(this.loader)
    this.chatWindow.appendChild(chatBotMessage)

    removeLoader(chatBotMessage, this.loader, botMessage, 3000)

    this.resetHeight()
  }

  botQueHandler() {
    this.quesOptions.forEach((option, i) => {
      const chatQuesBtn = document.createElement('button')
      chatQuesBtn.innerHTML = option
      chatQuesBtn.setAttribute('id', `${i}`)
      chatQuesBtn.addEventListener('click', (e) => this.predominateOptionsHandler(e));
      this.chatQues.appendChild(chatQuesBtn)
    })
  }

  resetHeight() {
    this.chatWindow.removeChild(this.chatQues)
    this.chatWindow.appendChild(this.chatQues)
    this.chatWindow.scrollTo(0, this.chatWindow.scrollHeight)
  }

  predominateOptionsHandler(e: any) {
    const chatBotMessage = createMessageElement('bot')
    const chatUserMessage = createMessageElement('user')
    const targetId = +e.target.id

    chatUserMessage.innerHTML = e.target.innerHTML

    chatBotMessage.appendChild(this.loader)
    this.chatWindow.append(chatUserMessage, chatBotMessage)
    removeLoader(chatBotMessage, this.loader, this.quesReply[targetId], 3000)


    this.resetHeight()
  }

  chatEventsHandler() {
    this.submitInput.addEventListener('click', (e) => {
      const userQuestion = this.input.value

      if (userQuestion.length < 4) return

      const chatUserMessage = createMessageElement('user')
      e.preventDefault()
      const userMessage = userQuestion
      this.input.value = ''
      chatUserMessage.innerHTML = userMessage
      this.chatWindow.appendChild(chatUserMessage)
      this.botAnswers(userMessage);
    })

    this.chatBtn.addEventListener('click', () => {
      this.chatContainer.classList.toggle('active')
    })

    window.addEventListener('mouseup', (e) => {
      if (e.target === body) {
        this.chatContainer.classList.remove('active')
      }
    })
  }
}

const chat = new Chatbot(body)
chat.init()
