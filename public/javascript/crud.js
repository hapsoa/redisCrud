const $button = $('.button');

$button.on('click', function () {
  const $this = $(this);
  const id = $this.attr('id');

  $('.input-content').addClass('display-none');
  $(`.${id}`).removeClass('display-none');

});

// $('.click-button').on('click', function (e) {
//   const $this = $(this);
//   const inputArray = $this.parent().find('input');
//   console.log(makeJson(inputArray));
// });


// DB -

// API Server - 

// Web API - WebServer와 연동 

// Publish - UI 


const makeJson = function (array) {
  const json = {};

  for (let i = 0; i < array.length; i++) {
    json[$(array[i]).attr('key')] = $(array[i]).val();
  }

  return json;
};

const append = function (data) {
  const jsonData = JSON.parse(data)
  const $root = $('.main-content');
  const template = `<div class="card">
  <div class="photo-content"><i class="fas fa-user-circle"></i></div>
  <div class="profile-content">
    <div class="name">${jsonData.name}</div>
    <div class="text">${jsonData.age}</div>
    <div class="text">${jsonData.hobby}</div>
    <div class="text">${jsonData.food}</div>
  </div>
</div>`;
  $root.append(template);
};



const appendAll = function (datas) {
  const keys = Object.keys(datas);
  const $root = $('.main-content');
  $root.empty();

  for(let i = 0; i< keys.length; i++) {
    const jsonData = JSON.parse(datas[keys[i]]);
    const template = `<div class="card" id="${jsonData.name}">
  <div class="photo-content"><i class="fas fa-user-circle"></i></div>
  <div class="profile-content">
    <div class="name">${jsonData.name}</div>
    <div class="text">${jsonData.age}</div>
    <div class="text">${jsonData.hobby}</div>
    <div class="text">${jsonData.food}</div>
  </div>
</div>`;
    $root.append(template);
  }
};

$.get('/a/users', function (d) {
  appendAll(d);
});
