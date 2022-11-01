import { EventType } from "app/shared/enums/event-type";
import { Event } from "app/shared/interfaces/event";

export function getEventsList(): Event[] {
    return [
        {
            monthInt: 1,
            monthStr: 'January',
            eventType: EventType.special,
            name: 'New Years Day',
            dateArr: [1],
            dateStr: 'January 1st'
        },
        {
            monthInt: 1,
            monthStr: 'January',
            eventType: EventType.season,
            name: 'Festive Season',
            dateArr: [1, 2, 3, 4, 5, 6],
            dateStr: 'December 15th - January 6th'
        },
        {
            monthInt: 1,
            monthStr: 'January',
            eventType: EventType.tournament,
            name: 'Fishing Tournament',
            dateArr: [9],
            dateStr: 'January 9th'
        },
        {
            monthInt: 2,
            monthStr: 'February',
            eventType: EventType.special,
            name: "Valentine's Day",
            dateArr: [14],
            dateStr: 'February 14th'
        },
        {
            monthInt: 2,
            monthStr: 'February',
            eventType: EventType.special,
            name: "Setsubun",
            dateArr: [1, 2, 3],
            dateStr: 'February 1st - 3rd'
        },
        {
            monthInt: 2,
            monthStr: 'February',
            eventType: EventType.special,
            name: "Festivale",
            dateArr: [20],
            dateStr: 'February 20th'
        },
        {
            monthInt: 3,
            monthStr: 'March',
            eventType: EventType.special,
            name: 'Shamrock Day',
            dateArr: [17],
            dateStr: 'March 17th'
        },
        {
            monthInt: 3,
            monthStr: 'March',
            eventType: EventType.zodiac,
            name: 'Aries Season',
            dateArr: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            dateStr: 'March 21st - April 19th'
        },
        {
            monthInt: 4,
            monthStr: 'April',
            eventType: EventType.special,
            name: 'Bunny Day',
            dateArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            dateStr: 'April 1st - 12th'
        },
        {
            monthInt: 4,
            monthStr: 'April',
            eventType: EventType.zodiac,
            name: 'Aries Season',
            dateArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            dateStr: 'March 21st - April 19th'
        },
        {
            monthInt: 4,
            monthStr: 'April',
            eventType: EventType.zodiac,
            name: 'Taurus Season',
            dateArr: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            dateStr: 'April 20th - May 20th'
        },
        {
            monthInt: 4,
            monthStr: 'April',
            eventType: EventType.crafting,
            name: 'Cherry Blossom Season',
            dateArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            dateStr: 'April 1st - 10th'
        },
        {
            monthInt: 4,
            monthStr: 'April',
            eventType: EventType.tournament,
            name: 'Fishing Tournament',
            dateArr: [11],
            dateStr: 'April 11th'
        },
        {
            monthInt: 5,
            monthStr: 'May',
            eventType: EventType.special,
            name: 'May Day',
            dateArr: [1, 2, 3, 4, 5, 6, 7],
            dateStr: 'May 1st - 7th'
        },
        {
            monthInt: 5,
            monthStr: 'May',
            eventType: EventType.zodiac,
            name: 'Taurus Season',
            dateArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            dateStr: 'April 20th - May 20th'
        },
        {
            monthInt: 5,
            monthStr: 'May',
            eventType: EventType.zodiac,
            name: 'Gemini Season',
            dateArr: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            dateStr: 'May 21st - June 21st'
        },
        {
            monthInt: 5,
            monthStr: 'May',
            eventType: EventType.special,
            name: "Mother's Day",
            dateArr: [1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31],
            dateStr: 'Entire Month of May'
        },
        {
            monthInt: 5,
            monthStr: 'May',
            eventType: EventType.special,
            name: 'International Museum Day',
            dateArr: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            dateStr: 'May 18th - 31st'
        },
        {
            monthInt: 6,
            monthStr: 'June',
            eventType: EventType.zodiac,
            name: 'Gemini Season',
            dateArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
            dateStr: 'May 21st - June 21st'
        },
        {
            monthInt: 6,
            monthStr: 'June',
            eventType: EventType.season,
            name: 'Wedding Season',
            dateArr: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30
            ],
            dateStr: 'Entire Month of June'
        },
        {
            monthInt: 6,
            monthStr: 'June',
            eventType: EventType.tournament,
            name: 'Bug Off',
            dateArr: [27],
            dateStr: 'June 27th'
        },
        {
            monthInt: 6,
            monthStr: 'June',
            eventType: EventType.zodiac,
            name: 'Cancer Season',
            dateArr: [22, 23, 24, 25, 26, 27, 28, 29, 30],
            dateStr: 'June 22nd - July 22nd'
        },
        {
            monthInt: 7,
            monthStr: 'July',
            eventType: EventType.zodiac,
            name: 'Cancer Season',
            dateArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
            dateStr: 'June 22nd - July 22nd'
        },
        {
            monthInt: 7,
            monthStr: 'July',
            eventType: EventType.tournament,
            name: 'Fishing Tournament',
            dateArr: [11],
            dateStr: 'July 11th'
        },
        {
            monthInt: 7,
            monthStr: 'July',
            eventType: EventType.tournament,
            name: 'Bug Off',
            dateArr: [25],
            dateStr: 'July 25th'
        },
        {
            monthInt: 7,
            monthStr: 'July',
            eventType: EventType.special,
            name: "Fireworks Show",
            dateArr: [4],
            dateStr: 'July 4th'
        },
        {
            monthInt: 8,
            monthStr: 'August',
            eventType: EventType.tournament,
            name: 'Bug Off',
            dateArr: [22],
            dateStr: 'August 22nd'
        },
        {
            monthInt: 9,
            monthStr: 'September',
            eventType: EventType.tournament,
            name: 'Bug Off',
            dateArr: [26],
            dateStr: 'September 26th'
        },
        {
            monthInt: 10,
            monthStr: 'October',
            eventType: EventType.tournament,
            name: 'Fishing Tournament',
            dateArr: [10],
            dateStr: 'October 10th'
        },
        {
            monthInt: 10,
            monthStr: 'October',
            eventType: EventType.special,
            name: 'Halloween',
            dateArr: [31],
            dateStr: 'October 31st'
        },
        {
            monthInt: 11,
            monthStr: 'November',
            eventType: EventType.crafting,
            name: 'Mushrooming Season',
            dateArr: [1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31],
            dateStr: 'Entire Month of November'
        },
        {
            monthInt: 11,
            monthStr: 'November',
            eventType: EventType.special,
            name: 'Turkey Day',
            dateArr: [24],
            dateStr: 'November 24th',
        },
        {
            monthInt: 12,
            monthStr: 'December',
            eventType: EventType.special,
            name: 'Festive Season',
            dateArr: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            dateStr: 'December 15th - January 6th',
        },
        {
            monthInt: 12,
            monthStr: 'December',
            eventType: EventType.special,
            name: 'Toy Day',
            dateArr: [24],
            dateStr: 'December 24th',
        },
        {
            monthInt: 12,
            monthStr: 'December',
            eventType: EventType.special,
            name: "Countdown",
            dateArr: [31],
            dateStr: 'December 31st',
        }
    ]
}

// {
//     monthInt: ,
//     monthStr: ,
//     eventType: ,
//     name: ,
//     dateArr: [],
//     dateStr: [],
// }
