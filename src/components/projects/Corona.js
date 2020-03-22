import React, {Component} from 'react';
import axios from 'axios';


class Corona extends Component {
    state = {
        areas : []
    }

    componentDidMount() {
        axios.get(
            'https://cors-anywhere.herokuapp.com/https://code.junookyo.xyz/api/ncov-moh/data.json',
            {
                'origin': '*'
            }) //get data asynchronously
        .then(res => {
            console.log(res.data.data["global"].cases);
            this.setState({
                areas: Object.getOwnPropertyNames(res.data.data)  // ["global", "vietname"]
                        .map(area => {
                            return(
                                {
                                    area: area,
                                    cases: res.data.data[area].cases,
                                    deaths: res.data.data[area].deaths,
                                    recovered: res.data.data[area].recovered
                                }
                            )
                        })
            });
        })
        
    }
    
    render(){
        const { areas } = this.state;
        const areaList = areas.map(sample => {
            console.log(sample);
            return(
                <div className="sample" key={sample.area}>
                    <p>Area: {sample.area}</p>
                    <p>Cases: {sample.cases}</p>
                    <p>Deaths: {sample.deaths}</p>
                    <p>Recovered: {sample.recovered}</p>
                    <br></br>
                </div>
            )            
        })
        return (
            <div className="corona">
                <p>Corona</p>
                {areaList}
            </div>
        );
    }
}

export default Corona;