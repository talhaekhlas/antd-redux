import React from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,Row, Col,Table } from 'antd';

const TableSpan = (props) => {

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const spanInfo = (value, row, index) => {

    let colSpanTalha = index===4?0:1;
    
    return {
      children: value,
      props: {
          colSpan:colSpanTalha
      },
    };
  
    }



const columns = [
{
  title: 'Actual Name',
  dataIndex: 'name',
  render: (value, row, index) => {

    // console.log('from column',row,index);

    let rowSpanTalha = index<4?1:4;
    let alignInfo = index===4?'right':null;
    
    return {
      children: <a href="#">{value}</a>,
      props: {
          colSpan:rowSpanTalha,
          align:alignInfo
      },
    };

  },
  }, 
  {
  title: 'Age',
  dataIndex: 'age',
  render: spanInfo

  },
  {
  title: 'Home phone',
  colSpan: 2,
  dataIndex: 'tel',

  
  render: (value, row, index) => {

    let rowSpanTalha = 1;

    if (index === 2) {
        rowSpanTalha = 2;
      }
      // These two are merged into above cell
      if (index === 3) {
        rowSpanTalha = 0;
      }
      if (index === 4) {
        rowSpanTalha = 0;
      }
    
    return {
      children: value,
      props: {
          rowSpan:rowSpanTalha
      },
    };


    
  },
},
{
  title: 'Phone',
  colSpan: 0,
  dataIndex: 'phone',
  render: spanInfo
}, 
{
  title: 'Address',
  dataIndex: 'address',
  render: (value, row, index) =>   {
    console.log(value);
    return {
      children: value.district+','+value.thana,
     
    };
    
  }
  
},
{
    title: 'Action',
    dataIndex: '',
    render: (value, row, index) =>   (
        <div>
            <Button  type="danger"  >
                 delete</Button>&nbsp;
            
                <Button  type="primary">
                     edit
                </Button>
            
        </div>
        )
    
  }
];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: {
      district:'pabna',
      thana:'Sujanagar'
  },
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park',
}, {
  key: '5',
  name: 'Total',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park',
}];
    return (
        <div>
            <br/>
            <Row>
                <Col span={16} offset={4}>
                    <Table columns={columns} dataSource={data} bordered />
                </Col>
            </Row>
            
        </div>
    );
};


const WrappeComponent = Form.create({ name: 'horizontal_login' })(TableSpan);
export default WrappeComponent

//ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

//export default connect(mapStateToProps)(TodoForm)

// export default connect(mapStateToProps)(WrappedHorizontalLoginForm)

// export default TableSpan;