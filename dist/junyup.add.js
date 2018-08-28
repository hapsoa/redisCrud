'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var $addButton = $('.add > .click-button');

$addButton.on('click', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var $this, inputArray, ret;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          $this = $(this);
          inputArray = $this.parent().find('input');
          ret = makeJson(inputArray);
          _context.next = 5;
          return $.post('/a/user', ret, function (d) {
            console.log(d);
          });

        case 5:
          _context.next = 7;
          return $.get('/a/user/' + ret.name, function (d) {
            append(d);
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
})));

var users = [];

$('/a/users', function (d) {
  _.forEach(d, function (item) {
    users[item.name] = item;

    //TODO Create Element
    item.ele = new Element(item);
  });
});