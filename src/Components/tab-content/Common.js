/**
 * Created by bigdrop on 21.03.17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Common extends Component{
    render(){
        const weather = this.props.weather;

        return ( <li className="common-info-wrap">
            <h4>common</h4>
            <div className="common-inner">
                <div className="pressure">
                    <svg x="0px" y="0px" viewBox="0 0 512 512">
                        <g>
                            <g>
                                <path d="M256,0C114.51,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256
			C512,114.509,397.503,0,256,0z M256,478.609c-122.746,0-222.609-99.862-222.609-222.609S133.254,33.391,256,33.391
			S478.609,133.254,478.609,256S378.746,478.609,256,478.609z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M256,66.783C151.29,66.783,66.783,151.738,66.783,256c0,48.619,18.872,97.248,55.421,133.797
			c6.52,6.52,17.091,6.52,23.611,0l23.611-23.611c6.52-6.519,6.52-17.09,0-23.611c-6.519-6.52-17.09-6.52-23.611,0l-11.177,11.177
			c-19.241-23.851-30.408-52.1-33.501-81.056h15.734c9.22,0,16.696-7.475,16.696-16.696c0-9.22-7.475-16.696-16.696-16.696h-15.725
			c3.094-28.955,14.261-57.198,33.5-81.05l11.17,11.169c6.52,6.52,17.091,6.52,23.611,0c6.519-6.519,6.519-17.091,0-23.611
			l-11.175-11.175c23.276-18.804,51.227-30.356,81.054-33.5v15.732c0,9.22,7.475,16.696,16.696,16.696
			c9.22,0,16.696-7.475,16.696-16.696v-15.731c29.827,3.144,57.777,14.698,81.054,33.5l-72.032,72.032
			c-7.699-4.03-16.444-6.323-25.719-6.323c-30.687,0-55.652,24.966-55.652,55.652c0,30.687,24.966,55.652,55.652,55.652
			c30.687,0,55.652-24.966,55.652-55.652c0-9.275-2.293-18.02-6.323-25.718l72.026-72.026c19.239,23.85,30.406,52.094,33.5,81.05
			H395.13c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h15.734c-3.093,28.956-14.26,57.206-33.501,81.056
			l-11.177-11.177c-6.519-6.519-17.091-6.519-23.611,0c-6.52,6.52-6.52,17.091,0,23.611l23.611,23.611
			c6.52,6.52,17.091,6.52,23.611,0c36.482-36.483,55.421-85.084,55.421-133.798C445.217,151.681,360.676,66.783,256,66.783z
			 M256,278.261c-12.275,0-22.261-9.986-22.261-22.261c0-12.275,9.986-22.261,22.261-22.261c12.275,0,22.261,9.986,22.261,22.261
			C278.261,268.275,268.275,278.261,256,278.261z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M272.696,345.043h-33.391c-27.618,0-50.087,22.469-50.087,50.087s22.469,50.087,50.087,50.087h33.391
			c27.618,0,50.087-22.469,50.087-50.087S300.314,345.043,272.696,345.043z M272.696,411.826h-33.391
			c-9.206,0-16.696-7.49-16.696-16.696s7.49-16.696,16.696-16.696h33.391c9.206,0,16.696,7.49,16.696,16.696
			S281.902,411.826,272.696,411.826z"/>
                            </g>
                        </g>
                    </svg>
                    <div className="info">
                        <h6>pressure</h6>
                        <span>{ weather.main.pressure }</span>
                    </div>
                </div>
                <div className="temperature">
                    <svg x="0px" y="0px" viewBox="0 0 426.121 426.121" >
                        <g>
                            <path className="path1" d="M258.793,265.096V45.737c0-25.259-20.476-45.735-45.735-45.735l0,0
		c-25.259,0-45.735,20.476-45.735,45.735v219.359c-25.558,15.826-42.319,44.506-41.223,77.023
		c1.511,44.824,37.469,81.522,82.256,83.878c50.188,2.64,91.71-37.273,91.71-86.885C300.067,307.84,283.56,280.433,258.793,265.096z
		"/>
                            <path className="path2" d="M233.793,50.002V279.02l11.838,7.331c18.432,11.414,29.436,31.137,29.436,52.761
		c0,16.564-6.45,32.137-18.161,43.848s-27.281,18.161-43.843,18.161c-0.001,0-0.002,0-0.003,0c-1.124,0-2.264-0.03-3.389-0.089
		c-31.777-1.672-57.511-27.919-58.584-59.755c-0.748-22.187,10.517-43.233,29.399-54.926l11.838-7.331V50.002H233.793z"/>
                            <path className="path3" d="M300.071,339.11c0,6.94-0.81,13.68-2.35,20.15l-130.4-130.4V45.74c0-12.63,5.12-24.07,13.4-32.34
		c8.28-8.28,19.71-13.4,32.34-13.4c25.26,0,45.73,20.48,45.73,45.74V265.1C283.561,280.43,300.071,307.84,300.071,339.11z"/>
                            <path className="path4" d="M192.323,50.001v203.86l82.686,82.686c-0.834-20.611-11.678-39.236-29.378-50.196l-11.838-7.331
		V50.001H192.323z"/>
                        </g>

                    </svg>
                    <div className="info">
                        <h6>temperature</h6>
                        <span style={{ color: '#FF7058' }}>{ Math.ceil( weather.main.temp_max - 274) } C</span>
                        <span>{ Math.floor( weather.main.temp_min - 274) } C</span>

                    </div>
                </div>
                <div className="humidity">
                    <svg x="0px" y="0px" viewBox="0 0 328.611 328.611">
                        <g>
                            <path d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485
		c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446
		c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657
		c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765
		c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779
		c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z"
                            />
                            <path d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197
		s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z"/>
                            <path d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106
		S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106
		s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z"/>
                            <path d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106
		S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106
		c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z"/>
                        </g>
                    </svg>
                    <div className="info">
                        <h6>humidity</h6>
                        <span>{ weather.main.humidity } %</span>
                    </div>
                </div>

            </div>
        </li> );
    }
};

function mapStateToProps(state){
    return {
        weather: state.cityWeather
    }
}

export default connect(
    mapStateToProps,
    null
)(Common);