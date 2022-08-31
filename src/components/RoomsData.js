
import React, {createContext, useState, useEffect} from 'react'


const RoomsData = [
        {
            "_id":"1",
            // "imageUrl": process.env.PUBLIC_URL+"./Images/rm.jpg",
            
            "imageUrl": "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "title":"Junior Suite",
            "description":{
                "size":"280 sq ft",
               " beds":"2 Double(s)"
            },
           "price":150
        },
    
        {
            "_id":"2",
            "imageUrl":"https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "title":"Standard Room",
            "description":{
                "size":"280 sq ft",
               " beds":"2 Double(s)"
            },
            "price":200
        },
        
        {
            "_id":"3",
            "imageUrl": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title":"Superior Room",
            "description":{
                "size":"280 sq ft",
                "beds":" 1 King(s)"
            },
            "price":250
        }
    ]

    export  default RoomsData;