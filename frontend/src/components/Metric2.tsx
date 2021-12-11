import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

class Metric extends React.Component {
    data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    c: any[] = [];

    state = {
        y: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/actions/getMonthlyCumulativeAvg').then(response => response.json()).then((result: []) => {
            this.c = result;
            this.setState({ y: this.c });
            console.log(this.c);
        });
    }

    render() {
        return (
            this.state.y.length > 0 &&
            <div className="top__card">
                <h3>Daily Views</h3>
                <span>September 2021 - October 2021</span>
                <AreaChart width={700} height={250} data={this.state.y} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="_" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} fillOpacity={1} fill="url(#colorview)" />
                </AreaChart>
            </div>
        );
    }
}

export default Metric;
