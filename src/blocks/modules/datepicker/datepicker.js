import DatePicker from "../../../js/vendor/datepicker";

new DatePicker({
    id: 'f-date-in',
    dateFormat: 'yyyy-MM-dd',
    minDate: 0
});
new DatePicker({
    id: 'f-date-out',
    dateFormat: 'yyyy-MM-dd',
    minDate: 0
});
new DatePicker({
    id: 'f-from-date',
    dateFormat: 'yyyy-MM-dd',
    minDate: 0,
    callback: () => document.getElementById('f-from-date').closest('form').submit()
});
