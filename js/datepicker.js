$(function () {$('#datetimepicker1').datetimepicker({
                    stepping:60,
                    showClear:true,
                    daysOfWeekDisabled: [1,2,3,4,5],
                    minDate: new Date(2016, 5, 31),
                    maxDate: new Date(2016, 9, 31),
                    format: 'YYYY/MM/DD HH:MM',
                    sideBySide: true,
                    enabledHours:[10,11,12,13,14,15,16,17,18]
                    });
            });
$(datetimepicker1).on('change dp.change', function(e){
    totalPrice();
});