import React from 'react'
import {Grid,Paper} from '@material-ui/core'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line,LineChart,BarChart,Bar,Brush
  } from 'recharts';
import {Button} from 'reactstrap';

export default class Trends extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            trendType:'No trend',
            dataType:null,
            data : [
                {
                  name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
                },
                {
                  name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
                },
                {
                  name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
                },
                {
                  name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
                },
                {
                  name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
                },
                {
                  name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
                },
                {
                  name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
                },
              ],
              data1 : [
                {
                  name: 'Page A', uv: 3400, pv: 2400, amt: 2400,
                },
                {
                  name: 'Page B', uv: 2300, pv: 1398, amt: 2210,
                },
                {
                  name: 'Page C', uv: 4500, pv: 9800, amt: 2290,
                },
                {
                  name: 'Page D', uv: 1200, pv: 3908, amt: 2000,
                },
                {
                  name: 'Page E', uv: 1800, pv: 4800, amt: 2181,
                },
                {
                  name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
                },
                {
                  name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
                },
              ],
              data2 : [
                {
                  name: 'Page A', uv: 1130, pv: 2400, amt: 2400,
                },
                {
                  name: 'Page B', uv: 2300, pv: 1398, amt: 2210,
                },
                {
                  name: 'Page C', uv: 980, pv: 9800, amt: 2290,
                },
                {
                  name: 'Page D', uv: 2300, pv: 3908, amt: 2000,
                },
                {
                  name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
                },
                {
                  name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
                },
                {
                  name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
                },
              ]
        }
        this.getTrend=this.getTrend.bind(this);
        this.handleEvent=this.handleEvent.bind(this);
        this.handleChange=this.handleChange.bind(this);
    };
    handleEvent(event, picker) {
        this.setState({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
    }
    handleChange(event,picker){
        console.log(picker.startDate)
    }
    getTrend(){
        this.setState({
            trendType:document.getElementById("select").value,
            dataType:document.getElementById("dataSelect").value
        })
        console.log(this.state.trendType)         
      }
    renderData(){
    if(this.state.dataType=="data"){
        return this.state.data
    }
    if(this.state.dataType=="data1"){
        return this.state.data1
    }
    if(this.state.dataType=="data2"){
        return this.state.data2
    }
    }
      renderChart(){
        if(this.state.trendType=='line'){
            return(
                <ResponsiveContainer>
                    <LineChart
                    data={this.renderData()}
                    margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        <Brush/>
                        </LineChart>
                </ResponsiveContainer>
            )
        }
        else if(this.state.trendType=='bar'){
            return(
                <ResponsiveContainer>
                    <BarChart
                    data={this.renderData()}
                    margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                    }}
                    style={{width:100+'%'}}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar type="monotone" dataKey="uv" stroke="#ee2418" fill="#ee2418" />
                        <Brush/>
                        </BarChart>
                </ResponsiveContainer>
            )
        }
        else if(this.state.trendType=='area'){
            return(
            <ResponsiveContainer>
                <AreaChart
                data={this.renderData()}
                margin={{
                top: 10, right: 30, left: 0, bottom: 0,
                }}
                
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#1184ee" fill="#1184ee"  />
                    <Brush/>
                    </AreaChart>
            </ResponsiveContainer>)
        }
    }
    render(){
        return(
            <div>
                <Grid container spacing={1} className="m-1">
                      <Grid item lg={12} xs={12} sm={12} xs={12}>
                        <Paper style={{height:70+'px',backgroundColor:'#2962ff'}}>
                        <div className="row">
                          <div className="col">
                            <select class="form-control mt-3 ml-3"  style={{width:100+'%'}} id="select">
                              <option disabled selected value> -- select an Chart -- </option>
                                <option id="line" value="line">Line</option>
                                <option id="bar" value="bar">Bar</option>
                                <option id="area" value="area">Area</option>
                            </select>
                          </div>
                          <div className="col">
                            <select class="form-control mt-3 ml-3"  style={{width:100+'%'}} id="dataSelect">
                                <option disabled selected value> -- select data -- </option>
                                <option id="data" value="data">data</option>
                                <option id="data1" value="data1">data1</option>
                                <option id="data2" value="data2">data2</option>
                            </select> 
                          </div>
                          <div className="col">
                            <button type="submit" class="btn  mt-3 w-50 ml-3" onClick={this.getTrend} style={{backgroundColor:'#b71c1c',color:'#fff'}}>Generate</button>
                          </div>
                        </div>
                        </Paper>
                      </Grid>
                      <Grid item lg={12} xs={12} sm={12}>
                        <Paper style={{width:100+'%',height:580,backgroundColor:'#e3f2fd'}}>
                            <div className="row">
                            <div className="col-4 pt-3 pl-5 pb-2">
                                <h4 style={{fontWeight:'bold'}}>{this.state.trendType}</h4>
                                </div>
                                <div className="col-6 pt-3 pl-3 pb-2 pr-1">
                                
                                </div>
                            </div>
                            <div style={{height:86+'%',width:100+'%'}}>
                                {this.renderChart()}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Paper>
                  
                </Paper>

            </div>
        )
    }
}