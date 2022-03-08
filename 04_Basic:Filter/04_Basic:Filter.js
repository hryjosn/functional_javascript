const getShortMessages = messages =>
  messages.filter(message => message.message.length < 50).map(item=>item.message)

module.exports = getShortMessages
