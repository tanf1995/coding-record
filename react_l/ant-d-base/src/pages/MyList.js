import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';


function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        // cardsLoading: state.loading.effects['cards/queryList'],
    };
}

@connect(mapStateToProps)
class MyList extends Component{
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '描述',
                dataIndex: 'desc',
            },
            {
                title: '链接',
                dataIndex: 'url',
                render: value => <a href={value}>{value}</a>,
            },
        ];
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.props.dispatch({
            type: 'cards/queryList',
        })
            .then(res => {
                console.log(res);
            })
            .finally(() => {
                this.setState({
                    loading: false
                })
            })
    }

    render(){
        return(
            <div>
                <Table 
                    columns={this.columns} 
                    dataSource={this.props.cardsList} 
                    loading={this.state.loading} 
                    rowKey="id" />
            </div>
        )
    }
}

export default MyList;