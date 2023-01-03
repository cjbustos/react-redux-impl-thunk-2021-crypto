import React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class SimpleBarChart extends React.Component {

    render() {
        const data = [
            {
                name: this.props.name,
                price: this.props.price,
            },
        ];

        return (
                <BarChart width={200} height={400} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" name="Price" fill="#8884d8" />
                </BarChart>
        )
    }
}

export default SimpleBarChart