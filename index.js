'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  contentFor(type) {
    if (type === 'body') {
      return '<script type="text/javascript" src="https://portal.sandbox.afterpay.com/afterpay.js"></script>';
    }
  },
};
