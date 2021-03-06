export default {
    type: 'form',
    components: [
        {
        label: 'Time',
        useLocaleSettings: true,
        format: 'hh:mm a',
        tableView: true,
        enableDate: false,
        enableMinDateInput: false,
        datePicker: {
            disableWeekends: false,
            disableWeekdays: false,
        },
        enableMaxDateInput: false,
        key: 'time',
        type: 'datetime',
        input: true,
        widget: {
            type: 'calendar',
            displayInTimezone: 'viewer',
            locale: 'en',
            useLocaleSettings: true,
            allowInput: true,
            mode: 'single',
            enableTime: true,
            noCalendar: true,
            format: 'hh:mm a',
            hourIncrement: 1,
            minuteIncrement: 1,
            minDate: null,
            disableWeekends: false,
            disableWeekdays: false,
            maxDate: null,
        },
        },
        {
        label: 'Submit',
        showValidations: false,
        tableView: false,
        key: 'submit',
        type: 'button',
        input: true,
        },
    ],
    title: 'test12',
    display: 'form',
    name: 'test12',
    path: 'test12',
};
