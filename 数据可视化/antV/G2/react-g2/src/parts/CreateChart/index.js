import React, {Component} from 'react';
import G2 from '@antv/g2';
import './index.css';


export default class CreateChart extends Component{
    container = React.createRef();
    chart = null;
    state = {
        chartShow: true
    }

    componentDidMount(){
        this.chart = new G2.Chart({
            container: this.container.current,
            // width: 1000,
            height: 400,
            forceFit: true,
            // animate: false,
            padding: [10, 0, 70, 50]
        })
        const data = [
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 }
        ];

        this.chart.source(data);
        // this.chart.forceFit();
        this.chart.interval().position('genre*sold').color('genre');
        this.chart.render();
    }

    handleToggle = async () => {
        await this.setState({chartShow: !this.state.chartShow})
        // this.chart.forceFit();
    }

    render(){
        return (
            <div className="create-chart">
                <div ref={this.container} className="chart" style={{display: this.state.chartShow? "": "none"}}></div>
                <button onClick={this.handleToggle}>
                    toggle chart
                </button>
            </div>
        )
    }
}