'use strict';
const clips = require('../../static/clips/_manifest');

function listclips(player) {
  return Promise.resolve(clips);
}


module.exports = function (api) {
  api.registerAction('listclips', listclips);
};
