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
    $("#slider-vertical").slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 127,
      value: 66,
      slide: function( event, ui ) {
        $("#amount").val( ui.value );
        $.ajax({
          type: 'POST',
          data: JSON.stringify({pitch_value: ui.value}),
          contentType: 'application/json',
          url: '/api/channel/voice/pitch',						
          success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
          }
        });
      }
    });
    $("#amount").val($("#slider-vertical").slider( "value" ) );
  })
  // POSTアクセスする
  // $.post('/api/channel/voice/program/change.json', {number: 6}, function(res){
  //   console.log(res);
  // });
});
