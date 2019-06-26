import MyCom from '../components/FirstPage/MyCom';
import { Card } from 'antd';

export default () => {
    const style = {
        width: '400px',
        margin: "30px",
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        border: '1px solid #e8e8e8'
    }

    return (
        <div>
            Hello world! first page.

            <MyCom />

            <Card style={style} actions={[<a>add</a>, <a>delete</a>]} />
        </div>
    )
}