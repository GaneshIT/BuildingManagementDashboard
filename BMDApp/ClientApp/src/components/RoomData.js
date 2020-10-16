import React, { Component } from 'react';
import Chart from "react-apexcharts";


export class RoomData extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [props.tempvalue],
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

            humidityseries: [props.humidity],
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
                        <div className="txtstyle">Temperature</div>
                        <div>
                            <Chart options={this.state.options} series={this.state.series} type="radialBar" height={250} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="txtstyle">Humidity</div>
                        <div>
                            <Chart options={this.state.humidityoptions} series={this.state.humidityseries} type="radialBar" height={250} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
