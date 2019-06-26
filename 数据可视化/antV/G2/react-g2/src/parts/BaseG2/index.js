import React, {Component} from 'react';
import G2 from '@antv/g2';
import './index.css';


export default class BaseG2 extends Component{
    container = React.createRef();

    componentDidMount(){
        let chart = new G2.Chart({
            container: this.container.current,
            width: 800,
            height: 400
        })
        const data = [
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 }
        ];

        chart.source(data);
        chart.interval().position('genre*sold').color('genre');
        chart.render();
    }

    render(){
        return (
            <div className="base-g2">
                <div ref={this.container}></div>
            </div>
        )
    }
}