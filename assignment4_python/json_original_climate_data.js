//data from : https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Sydney%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
{
    "query": {
        "count": 1,
            "created": "2018-07-16T20:52:13Z",
                "lang": "en-US",
                    "results": {
            "channel": {
                "units": {
                    "distance": "mi",
                        "pressure": "in",
                            "speed": "mph",
                                "temperature": "F"
                },
                "title": "Yahoo! Weather - Sydney, NSW, AU",
                    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/",
                        "description": "Yahoo! Weather for Sydney, NSW, AU",
                            "language": "en-us",
                                "lastBuildDate": "Tue, 17 Jul 2018 06:52 AM AEST",
                                    "ttl": "60",
                                        "location": {
                    "city": "Sydney",
                        "country": "Australia",
                            "region": " NSW"
                },
                "wind": {
                    "chill": "36",
                        "direction": "315",
                            "speed": "11"
                },
                "atmosphere": {
                    "humidity": "62",
                        "pressure": "1010.0",
                            "rising": "0",
                                "visibility": "16.1"
                },
                "astronomy": {
                    "sunrise": "6:58 am",
                        "sunset": "5:7 pm"
                },
                "image": {
                    "title": "Yahoo! Weather",
                        "width": "142",
                            "height": "18",
                                "link": "http://weather.yahoo.com",
                                    "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
                },
                "item": {
                    "title": "Conditions for Sydney, NSW, AU at 06:00 AM AEST",
                        "lat": "-33.856281",
                            "long": "151.020966",
                                "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/",
                                    "pubDate": "Tue, 17 Jul 2018 06:00 AM AEST",
                                        "condition": {
                        "code": "31",
                            "date": "Tue, 17 Jul 2018 06:00 AM AEST",
                                "temp": "40",
                                    "text": "Clear"
                    },
                    "forecast": [
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
                            "date": "18 Jul 2018",
                            "day": "Wed",
                            "high": "64",
                            "low": "41",
                            "text": "Sunny"
                        },
                        {
                            "code": "30",
                            "date": "19 Jul 2018",
                            "day": "Thu",
                            "high": "68",
                            "low": "33",
                            "text": "Partly Cloudy"
                        },
                        {
                            "code": "34",
                            "date": "20 Jul 2018",
                            "day": "Fri",
                            "high": "59",
                            "low": "46",
                            "text": "Mostly Sunny"
                        },
                        {
                            "code": "32",
                            "date": "21 Jul 2018",
                            "day": "Sat",
                            "high": "61",
                            "low": "40",
                            "text": "Sunny"
                        },
                        {
                            "code": "34",
                            "date": "22 Jul 2018",
                            "day": "Sun",
                            "high": "61",
                            "low": "34",
                            "text": "Mostly Sunny"
                        },
                        {
                            "code": "32",
                            "date": "23 Jul 2018",
                            "day": "Mon",
                            "high": "68",
                            "low": "39",
                            "text": "Sunny"
                        },
                        {
                            "code": "32",
                            "date": "24 Jul 2018",
                            "day": "Tue",
                            "high": "72",
                            "low": "48",
                            "text": "Sunny"
                        },
                        {
                            "code": "32",
                            "date": "25 Jul 2018",
                            "day": "Wed",
                            "high": "64",
                            "low": "45",
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
                    ],
                        "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/31.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Clear\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Tue - Sunny. High: 68Low: 39\n<BR /> Wed - Sunny. High: 64Low: 41\n<BR /> Thu - Partly Cloudy. High: 68Low: 33\n<BR /> Fri - Mostly Sunny. High: 59Low: 46\n<BR /> Sat - Sunny. High: 61Low: 40\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
                            "guid": {
                        "isPermaLink": "false"
                    }
                }
            }
        }
    }
}