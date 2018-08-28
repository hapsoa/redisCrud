const aa = $('.delete > .click-button');

aa.on('click', function () {
  console.log('aaa');
  const $this = $(this);
  const inputArray = $this.parent().find('input');
  const ret = makeJson(inputArray);

  $.delete(`/a/user/${ret.name}`);

  await $.get('/a/users', function (d) {
    appendAll(d);
  });
});