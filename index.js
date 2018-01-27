'use strict';

var FBMessenger = require('fb-messenger')

const token = "EAACDcONKDisBAJFqfdxo60naEVFZCWMn1vUT6hCuMYX0BEaW4vNCS9sU0x6jyxOTj60oiGRGGzNNDTItcY2EQlf93tpdYrZBzFK5mHmBGKYdzYZCRntvg0bIg4sPRWgLiNkJO2nCvQoNc7jZBUaN27Y3pBMpTvjCJzZBuxlxEJAZDZD"

var messenger = new FBMessenger(token)

var flightDelayedEvent = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "airline_update",
        "intro_message": "Your flight is delayed",
        "update_type": "delay",
        "locale": "en_US",
        "pnr_number": "CF23G2",
        "update_flight_info": {
          "flight_number": "KL123",
          "departure_airport": {
            "airport_code": "SFO",
            "city": "San Francisco",
            "terminal": "T4",
            "gate": "G8"
          },
          "arrival_airport": {
            "airport_code": "AMS",
            "city": "Amsterdam",
            "terminal": "T4",
            "gate": "G8"
          },
          "flight_schedule": {
            "boarding_time": "2015-12-26T10:30",
            "departure_time": "2015-12-26T11:30",
            "arrival_time": "2015-12-27T07:30"
          }
        }
      }
    }
 }


var idArray = ["1503503856363974", "1307627679338414"]

exports.handler = (event, context, callback) => {
 	console.log(event);
 	for(var i=0; i < idArray.length; i++) {
		messenger.sendMessage(idArray[i], flightDelayedEvent, function (err, body) {
		  if(err) return console.error(err)
		  console.log(body)
		})
 	}
  	
};




