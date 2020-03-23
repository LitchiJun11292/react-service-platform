import React from 'react';
import {Card, Col, Row} from 'antd';
import './index.scss';
import Axios from './../../../utils/request.js';

class WorkHall extends React.Component {

    state = {
        dataList: []
    };

    render () {
        return (
            <Row gutter={10} className="work_hall">
                {this.handleMapList()}
            </Row>
        );
    }

    componentDidMount () {
        Axios.get('/list').then(res => {
            this.setState({
                dataList: res.list
            });
        });
    }

    handleMapList = () => {
        return this.state.dataList.map((item, index) => {
            return (
                <Col className="gutter-row" span={8} key={index}>
                    <Card title={item.busiTypeName} bordered={true}>
                        {item.flowNodes.map((it, i) => {
                           return (
                               <div key={i} className="work_hall_item">
                                   {it.flowNodeName}({it.count})
                               </div>
                           )
                        })}
                    </Card>
                </Col>
            )
        });
    }
}

export default WorkHall;
