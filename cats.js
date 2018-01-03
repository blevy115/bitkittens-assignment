document.addEventListener('DOMContentLoaded', function() {

  var summon = document.querySelector('.summon-cats')
  var catBoxes = document.querySelectorAll('.cat-box')
  summon.addEventListener("click", function(e){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      datatype: 'json'
    }).done(function(data){
      var i = 0
      data.cats.forEach(function(cat){
        var imgTag = document.createElement('img');
        imgTag.src = cat.photo;
        imgTag.alt = "Photo of "+ cat.name;
        catBoxes[i].append(imgTag);
        i++;
      });
    });
  });


});
