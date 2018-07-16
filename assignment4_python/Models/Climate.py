#Climate Model

class Climate(object):
    climate_id = 0
    code = ""
    date = ""
    day = ""
    high = ""
    low = ""
    text = ""
   
    #constructor to set class Climate's values
    def __init__(self,  climate_id = 0, code = "", date = "", day = "", high = "", low = "", text = "" ):
        print("Creating an Instance" + type(self).__name__)
        self.climate_id = climate_id
        self.code = code
        self.date = date
        self.day = day
        self.high = high
        self.low = low
        self.text = text

    #Print output of forecasted weather in a string format
    def __str__(self):
        output = "Climate Id = "+str(self.climate_id)+ ", The forecast of date:" + str(self.date) + "," + str(self.day) + "is " + str(self.text) + " based on high:" + str(self.high) + " and low:" + str(self.low)
        return output