'use strict';
const chance = new (require('chance'))();

class AyyLmao extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'AyyLmao');
  }
}

AyyLmao.prototype.handleMessage = function (context) {
  global.logger.stupid(`${this.name}: Received message.`);
  if(context.text().toLowerCase().includes('ayy')) {
    context.setCustomData('noPrefix', true);
    this._AKP48.sendMessage((chance.bool({likelihood: 25}) ? 'ayy lamo' : 'ayy lmao'), context);
  }
};

module.exports = AyyLmao;
