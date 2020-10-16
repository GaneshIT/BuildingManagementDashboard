import React, { Component } from 'react';
import { RoomData } from './RoomData';
import Buildingdata from '../services/buildingdata.json'

export class Floor2Room2 extends Component {




    render() {
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
