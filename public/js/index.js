$(function(){
  // $(function(){
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
    // ピッチベンド
    $("#slider-pitch").slider({
      orientation: "horizontal",
      range: "min",
      min: 0,
      max: 127,
      value: 64,
      slide: function( event, ui ) {
        $("#amount-pitch").val( ui.value );
        $.ajax({
          type: 'POST',
          data: JSON.stringify({pitch_value: ui.value}),
          contentType: 'application/json',
          url: '/api/channel/voice/pitch',						
          // success: function(data) {
          //   console.log('success');
          //   console.log(JSON.stringify(data));
          // }
        });
      }
    });
    $("#amount-pitch").val($("#slider-pitch").slider("value"));
    // モジュレーション
    $("#slider-modulation").slider({
      orientation: "horizontal",
      range: "min",
      min: 0,
      max: 127,
      value: 0,
      slide: function( event, ui ) {
        $("#amount-modulation").val( ui.value );
        $.ajax({
          type: 'POST',
          data: JSON.stringify({modulation_value: ui.value}),
          contentType: 'application/json',
          url: '/api/channel/voice/modulation',						
          // success: function(data) {
          //   console.log('success');
          //   console.log(JSON.stringify(data));
          // }
        });
      }
    });
    $("#amount-modulation").val($("#slider-modulation").slider("value"));
    // ボリューム
    $("#slider-volume").slider({
      orientation: "horizontal",
      range: "min",
      min: 0,
      max: 127,
      value: 64,
      slide: function( event, ui ) {
        $("#amount-volume").val( ui.value );
        $.ajax({
          type: 'POST',
          data: JSON.stringify({volume_value: ui.value}),
          contentType: 'application/json',
          url: '/api/channel/voice/volume',						
        });
      }
    });
    $("#amount-volume").val($("#slider-volume").slider("value"));
  // })
});

