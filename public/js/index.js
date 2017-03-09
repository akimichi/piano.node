$(function(){
  $("#programs").selectmenu();

  $(function(){
    $("#programs").change(function(){
      $("#submit_form").submit();
    });
  })
  // $.ajax({
  //   type: 'POST',
  //   data: JSON.stringify({number: $("#programs").val()}),
  //   contentType: 'application/json',
  //   url: 'http://localhost:3000/api/channel/voice/program/change.json',						
  //   success: function(data) {
  //     console.log('success');
  //     console.log(JSON.stringify(data));
  //   }
  // });

  // POSTアクセスする
  // $.post('/api/channel/voice/program/change.json', {number: 6}, function(res){
  //   console.log(res);
  // });
});
