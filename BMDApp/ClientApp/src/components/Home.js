import React, { Component } from 'react';
import Chart from "react-apexcharts";
import Buildingdata from '../services/buildingdata.json'


export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);

        this.state = {

            series: [70],
            options: {
                chart: {
                    height: 250,
                    type: 'radialBar',
                },
                colors: ['#E91E63'],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: [''],
            },

            humidityseries: [45],
            humidityoptions: {
                chart: {
                    height: 250,
                    type: 'radialBar',
                },
                colors: ['#00bfff'],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: [''],
            },


        };
    }

    render() {

        return (

            <div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="txtstyle">Building - Temperature</div>
                        <div>
                            {Buildingdata.map((data, i) => {
                                return (
                                    <Chart options={this.state.options} series={[(parseInt(data.Building.Floor1.Room1.Temperature) + parseInt(data.Building.Floor1.Room2.Temperature) + parseInt(data.Building.Floor2.Room1.Temperature) + parseInt(data.Building.Floor2.Room2.Temperature)) / 4]} type="radialBar" height={250} />

                                )
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="txtstyle">Building - Humidity</div>
                        <div>{Buildingdata.map((data, i) => {
                            return (
                                <Chart options={this.state.humidityoptions} series={[(parseInt(data.Building.Floor1.Room1.Humidity) + parseInt(data.Building.Floor1.Room2.Humidity) + parseInt(data.Building.Floor2.Room1.Humidity) + parseInt(data.Building.Floor2.Room2.Humidity)) / 4]} type="radialBar" height={250} />
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
