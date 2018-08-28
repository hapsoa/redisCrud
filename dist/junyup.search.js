'use strict';

var $searchButton = $('.search > .click-button');

$searchButton.on('click', function () {
  var $this = $(this);
  var inputArray = $this.parent().find('input');
  var ret = makeJson(inputArray);
  console.log(ret);

  // UI 적으로 코딩하는것이 아니고,
  // Data 에 포커스해서 코딩을 하기 위함.


  $.get('/a/user/' + ret.name, function (d) {
    var $root = $('.main-content');
    var jsonData = JSON.parse(d);
    $root.find('.card').removeClass('background-red');
    $root.find('#' + jsonData.name).addClass('background-red');
    // $root.find(`#${jsonData.name}`).css('background','red');
  });
});