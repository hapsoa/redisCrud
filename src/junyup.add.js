const $addButton = $('.add > .click-button');

$addButton.on('click',  async function() {
  const $this = $(this);
  const inputArray = $this.parent().find('input');
  const ret = makeJson(inputArray);

  await $.post('/a/user', ret, function (d){
    console.log(d);
  });

  await $.get(`/a/user/${ret.name}`, function (d) {
    append(d);
  });
  
  

});

const users = {};

$.get('/a/users', function(users){
  _.forEach(users, user => {
    users[user.name] = user;

    //TODO Create Element
    user.ele = new Element(user);
  });
})

$.get('/a/user/hyunsik', function(u)=>{
  // 수정을 해줘라 덮어쓰지말고.
})

const Element = function Element(user){
  user.ele = $(template);
  user.show = () => item.ele.addClass('show');
  user.hide = () => item.ele.addClass('hide');

  user.update = () => {item.ele.find()....} 
  
};


