$(function(){
  // $("#programs").selectmenu();

  $(function(){
    $("#programs").change(function(){
      // var val = $("#programs").val();
      // $("#submit_form").submit();
      $.ajax({
        type: 'POST',
        data: JSON.stringify({number: $("#programs").val()}),
        contentType: 'application/json',
        url: '/api/channel/voice/program/change',						
        // url: 'http://localhost:3000/api/channel/voice/program/change',						
        success: function(data) {
          console.log('success');
          console.log(JSON.stringify(data));
        }
      });
    });
  })
  

  // POSTアクセスする
  // $.post('/api/channel/voice/program/change.json', {number: 6}, function(res){
  //   console.log(res);
  // });
});
