from Models.Climate import Climate


climateid = 1

#json data

'''
forecast: [
    {
        "code": "32",
        "date": "17 Jul 2018",
        "day": "Tue",
        "high": "68",
        "low": "39",
        "text": "Sunny"
    },
   {
        "code": "32",
        "date": "26 Jul 2018",
        "day": "Thu",
        "high": "61",
        "low": "41",
        "text": "Sunny"
    }
]
'''

#initializing Climate Object
climate = Climate()

#setting 1st part from json data
climate.climate_id = climateid,
climate.code = "32",
climate.date = "17 Jul 2018",
climate.day = "Tue",
climate.high = "68"
climate.low = "39"
climate.text = "sunny"

print(climate)