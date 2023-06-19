import { createNewFoodplanArray, getCafeteriaDateString, getIndexForDate } from "utils/cafeteriahelper"

describe("Testing the helper functions defined for the cafeteriaplan-component", () => {
    test("Transformation of a date-object to a date-string in the format provided by the API", () => {
        const input = [new Date(Date.parse("2020-12-05T00:00:00")), new Date(Date.parse("2017-05-12T00:00:00"))]
        const output = ["2020-12-05", "2017-05-12"]

        input.forEach((value, index) => {
            expect(getCafeteriaDateString(value)).toBe(output[index])
        })
    })

    test("Finding the index of the Foodplan for a specified date object", () => {
        const input = [new Date(Date.parse("2023-06-18T00:00:00")), new Date(Date.parse("2023-06-19T00:00:00"))]
        const output = [1, 2]

        input.forEach((value, index) => {
            expect(getIndexForDate(TEST_DATA_FORMATTED, value)).toBe(output[index])
        })
    })

    test("Transformation of the Cafeteriaplan provided by the API", () => {
        const converted_by_function = createNewFoodplanArray(TEST_DATA_API);

        // check if function returns an array
        expect(Array.isArray(converted_by_function)).toBe(true);

        converted_by_function.forEach((data, index) => {
            // check if date is instance of Date and matches expected value
            expect(data.date).toBeInstanceOf(Date);
            expect(data.date.getDay()).toBe(TEST_DATA_FORMATTED[index].date.getDay());

            // check if weekday is removed
            expect(data).not.toHaveProperty('weekday');

            // check if item field is correctly transformed, including 'undefined' for missing entries
            expect(data.item).toEqual(TEST_DATA_FORMATTED[index].item);
        });
    });
})

const TEST_DATA_FORMATTED = [
    {
        date: new Date(Date.parse("2023-06-17T00:00:00")),
        item: [
            {
                meal: "Dish 1",
                price1: 10,
                category: "Category 1",
                foodicons: [],
                price3: 0,
                allergens: "A"
            },
            {
                meal: "Dish 2",
                price1: 6,
                category: "Category 2",
                foodicons: [],
                price3: 0,
                allergens: "B"
            }
        ]
    },
    {
        date: new Date(Date.parse("2023-06-18T00:00:00")),
        item: [
            {
                meal: "Dish 3",
                price1: 10,
                category: "Category 1",
                foodicons: [],
                price3: 0,
                allergens: "A"
            },
            {
                meal: "Dish 4",
                price1: 6,
                category: "Category 2",
                foodicons: [],
                price3: 0,
                allergens: "B"
            }
        ]
    },
    {
        date: new Date(Date.parse("2023-06-19T00:00:00")),
        item: [
            {
                meal: "Dish 5",
                price1: 12,
                category: "Category 3",
                foodicons: [],
                price3: 0,
                allergens: "D"
            },
            {
                meal: "Dish 6",
                price1: 8,
                category: "Category 4",
                foodicons: [],
                price3: 0,
                allergens: "G"
            }
        ]
    },
    {
        date: new Date(Date.parse("2023-06-20T00:00:00")),
        item: undefined
    },
    {
        date: new Date(Date.parse("2023-06-21T00:00:00")),
        item: [
            {
                meal: "Dish 9",
                price1: 15,
                category: "Category 7",
                foodicons: [],
                price3: 0,
                allergens: "H"
            },
            {
                meal: "Dish 10",
                price1: 11,
                category: "Category 8",
                foodicons: [],
                price3: 0,
                allergens: "I"
            }
        ]
    },
]

const TEST_DATA_API = [
    {
        date: "2023-06-17",
        weekday: "Saturday",
        item: [
            {
                meal: "Dish 1",
                price1: 10,
                category: "Category 1",
                foodicons: [],
                price3: 0,
                allergens: "A"
            },
            {
                meal: "Dish 2",
                price1: 6,
                category: "Category 2",
                foodicons: [],
                price3: 0,
                allergens: "B"
            }
        ]
    },
    {
        date: "2023-06-18",
        weekday: "Sunday",
        item: [
            {
                meal: "Dish 3",
                price1: 10,
                category: "Category 1",
                foodicons: [],
                price3: 0,
                allergens: "A"
            },
            {
                meal: "Dish 4",
                price1: 6,
                category: "Category 2",
                foodicons: [],
                price3: 0,
                allergens: "B"
            }
        ]
    },
    {
        date: "2023-06-19",
        weekday: "Monday",
        item: [
            {
                meal: "Dish 5",
                price1: 12,
                category: "Category 3",
                foodicons: [],
                price3: 0,
                allergens: "D"
            },
            {
                meal: "Dish 6",
                price1: 8,
                category: "Category 4",
                foodicons: [],
                price3: 0,
                allergens: "G"
            }
        ]
    },
    {
        date: "2023-06-21",
        weekday: "Wednesday",
        item: [
            {
                meal: "Dish 9",
                price1: 15,
                category: "Category 7",
                foodicons: [],
                price3: 0,
                allergens: "H"
            },
            {
                meal: "Dish 10",
                price1: 11,
                category: "Category 8",
                foodicons: [],
                price3: 0,
                allergens: "I"
            }
        ]
    },
]
