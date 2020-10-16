import React, { Component } from 'react';
import { RoomData } from './RoomData';
import  Buildingdata  from '../services/buildingdata.json'
export class Floor1Room1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
   

    render() {     
        {
            
        }
    return (
        <div>
            {Buildingdata.map((data, i) => {
                return (
                    <RoomData tempvalue={data.Building.Floor1.Room1.Temperature} humidity={data.Building.Floor1.Room1.Humidity} />
                )
            })}
            
      </div>
    );
  }
}
