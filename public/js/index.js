$(function(){
  $(function(){
    $("#programs").change(function(){
      $.ajax({
        type: 'POST',
        data: JSON.stringify({program_number: $("#programs").val()}),
        contentType: 'application/json',
        url: '/api/channel/voice/program/change',						
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
