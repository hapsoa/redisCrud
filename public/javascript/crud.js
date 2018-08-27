const $button = $('.button');

$button.on('click', function () {
  const $this = $(this);
  const id = $this.attr('id');
  
  $('.input-content').addClass('display-none');
  $(`.${id}`).removeClass('display-none');
  
});

$('.click-button').on('click', function (e) {
  const $this = $(this);
  const inputArray = $this.parent().find('input');
  console.log(makeJson(inputArray));
  // console.log($(inputArray).val());
  
  
});

const makeJson = function (array) {
  const json = {};
  
  for (let i = 0; i < array.length; i++) {
    json[$(array[i]).attr('key')] = $(array[i]).val();
  }
  
  return json;
};
