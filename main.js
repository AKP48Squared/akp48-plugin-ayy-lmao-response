'use strict';
const chance = new (require('chance'))();

class AyyLmao extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super('AyyLmao', AKP48);
  }
}

AyyLmao.prototype.handleMessage = function (message, context, res) {
  global.logger.stupid(`${this._pluginName}: Received message.`);
  if(message.toLowerCase().includes('ayy')) {
    context.noPrefix = true;
    this._AKP48.sendMessage((chance.bool({likelihood: 25}) ? 'ayy lamo' : 'ayy lmao'), context);
    res(false);
  }
};

module.exports = AyyLmao;
module.exports.type = 'MessageHandler';
