/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.0/24"], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "en",
    timeFormat: 24,
    units: "imperial",

    modules: [
        {
            module: "alert",
            disabled: false,
        },
        {
            module: "updatenotification",
            position: "top_bar",
            disabled: false,
        },
        {
            module: "clock",
            position: "top_left",
            disabled: false,
            config: {
                timezone: "America/Los_Angeles"
            }
        },
        {
            // https://github.com/eouia/worldclock
            module: "worldclock",
            position: "top_left",
            disabled: false,
            config: {
                timeFormat: 'HH:mm A',
                style: "top",
                offsetTimezone: "America/Los_Angeles", // null for absolute offset
                clocks: [
                    {
                        title: "Home",
                        flag: "us",
                    },
                    {
                        title: "India",
                        timezone: "Asia/Kolkata",
                        flag: "in",
                    }
                ]
            }
        },
        {
            module: "calendar",
            header: "US Holidays",
            position: "top_left",
            disabled: false,
            config: {
                calendars: [
                    {
                        symbol: "calendar-check",
                        url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
                        maximumNumberOfDays: 30,
                        maximumEntries: 2
                    }
                ]
            }
        },
        {
            module: "currentweather",
            position: "top_right",
            disabled: false,
            config: {
                location: "San Jose",
                locationID: "5392171",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                appid: "Update me"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            disabled: false,
            header: "Weather Forecast",
            config: {
                location: "San Jose",
                locationID: "5392171",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                appid: "Update me",
                maxNumberOfDays: 1
            }
        },
        {
            // https://github.com/bittiez/MMM-MWWordOfTheDay
            module: "MMM-MWWordOfTheDay",
            position: "top_right",
            disabled: false,
            config: {
                header: "Word Of The Day",
                updateInterval: 60 * 60 * 24 * 1000 // one a day
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            disabled: false,
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    },
                    {
                        title: "ESPN Tennis",
                        url: "https://www.espn.com/espn/rss/tennis/news"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true,
                broadcastNewsFeeds: true,
                broadcastNewsUpdates: true
            }
        },
        {
            // https://github.com/shbatm/MMM-JSONStatusChecker
            module: "MMM-JSONStatusChecker",
            position: "bottom_left",
            disabled: false,
            header: "Garage Door",
            config: {
                name: "opengarage_status",
                updateInterval: 60 * 1000, // Check every minute
                urlApi: "http://update.me/jc",
                keyToCheck: "door",
                keyValue: 0,
                trueString: "Closed",
                falseString: "Open",
                icon: "warehouse"
            }
        },
        {
            // https://github.com/Sispheor/MMM-quote-of-the-day
            module: "MMM-quote-of-the-day",
            position: "lower_third",
            disabled: false,
            config: {
                language: "en",
                updateInterval: "30m"
            }
        },
        {
            // https://github.com/echang15/MMM-Dad-Jokes
            module: "MMM-Dad-Jokes",
            position: "bottom_bar",
            disabled: false,
            config: {
                updateInterval: 60 * 10 * 1000 // Change every 10 minutes
            }
        },
        {
            // https://github.com/kolbyjack/MMM-Wallpaper
            module: "MMM-Wallpaper",
            position: "fullscreen_below",
            disabled: false,
            config: {
                source: "bing",
                slideInterval: 60 * 10 * 1000 // Change every 10 minutes
            }
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
