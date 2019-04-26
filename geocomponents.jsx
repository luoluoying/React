/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React from 'react'
import './index.less'
import { Select, Input, Form } from 'antd'
import geoRes from './formatGeoInfo'

const Option = Select.Option
// const provinceData = ['重庆市', '四川省']
// const cityData = {
//   重庆市: ['重庆市'],
//   四川省: ['成都市', '南充市'],
// }
// const countyData = {
//   重庆市: ['南岸区', '渝北区'],
//   成都市: ['武侯区', '武侯县'],
//   南充市: ['南充区', '南充县'],
// }
// const provinceData = [['2344', '重庆市'], ['555', '四川省']]
// const cityData = {
//   2344: [['2344', '重庆市']],
//   555: [['123', '成都市'], ['1234', '南充市']],
// }
// const countyData = {
//   2344: [['444', '南岸区'], ['4445', '渝北区']],
//   123: [['5556', '武侯区'], ['5555', '武侯县']],
//   1234: [['6666', '南充区'], ['7666', '南充县']],
// }

const provinceData = geoRes.province
const cityData = geoRes.city
const countyData = geoRes.county

class AreaSelectComponents extends React.Component {
  state = {
    cities: cityData[provinceData[0][0]], // 二级城市列表
    secondCity: cityData[provinceData[0][0]][0][0], // 二级城市代码
    thirdCity: countyData[cityData[provinceData[0][0]][0][0]][0][0], // 三级城市代码
    counties: countyData[cityData[provinceData[0][0]][0][0]], // 三级城市列表
    province: provinceData[0][0], // 一级城市代码
    inputValue: '', // 0
    provincebaidu: provinceData[0][1], // 一级城市名称
    secondCitybaidu: cityData[provinceData[0][0]][0][1], // 二级城市名称
    thirdCitybaidu: countyData[cityData[provinceData[0][0]][0][0]][0][1], // 三级城市名称
  }

  componentDidMount() {
    // 设置表单默认
    const { form } = this.props
    const { thirdCity } = this.state
    // setFieldsValue
    // 百度地图API功能
    console.log('0----1', this.baidumap)
    const map = new BMap.Map(this.baidumap)
    const point = new BMap.Point(116.331398, 39.897445)
    map.centerAndZoom(point, 12)
    // 创建地址解析器实例
    const myGeo = new BMap.Geocoder()
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint('重庆市渝北区嘉州路', (point) => {
      console.log(point)
      if (point) {
        map.centerAndZoom(point, 16)
        map.addOverlay(new BMap.Marker(point))
        const marker = new BMap.Marker(point)// 创建标注
        map.addOverlay(marker)// 将标注添加到地图中
        const label = new BMap.Label('我是文字标注哦', { offset: new BMap.Size(20, -10) })
        marker.setLabel(label)
      } else {
        alert('您选择地址没有解析到结果!')
      }
    }, '重庆市')
  }

  handleProvinceChange = (value) => {
    const key = value.key
    const label = value.label
    console.log(this.selectedProvince, 'ref1', label)
    console.log(value, 'provence', cityData[key][0][0])
    const { form } = this.props
    form.setFieldsValue({ secondCity: { key: cityData[key][0][0] } })
    form.setFieldsValue({ thirdCity: { key: countyData[cityData[key][0][0]][0][0] } })
    this.setState({
      province: key,
      cities: cityData[key],
      secondCity: cityData[key][0][0],
      thirdCity: countyData[cityData[key][0][0]][0][0],
      counties: countyData[cityData[key][0][0]],
      provincebaidu: label,
      secondCitybaidu: cityData[key][0][1],
      thirdCitybaidu: countyData[cityData[key][0][0]][0][1],
    })
  }

  onSecondCityChange = (value) => {
    const key = value.key
    const label = value.label
    console.log('---', value, countyData[key][0][0])
    const { form } = this.props
    form.setFieldsValue({ thirdCity: { key: countyData[key][0][0] } })
    this.setState({
      secondCity: key,
      thirdCity: countyData[key][0][0],
      counties: countyData[key],
      secondCitybaidu: label,
      thirdCitybaidu: countyData[key][0][1],
    })
  }

  onthirdCityChange = (value) => {
    const key = value.key
    const label = value.label
    console.log('+++', label)
    this.setState({
      thirdCity: key,
      thirdCitybaidu: label,
    })
  }

  onBlur = (v) => {
    const {
      province,
      secondCity,
      thirdCity,
      provincebaidu,
      secondCitybaidu,
      thirdCitybaidu,
      counties,
    } = this.state
    console.log(province, secondCity, thirdCity, 'cityCode')
    const { form } = this.props
    const inputValue = form.getFieldValue('input-area')
    // const provinceName = form.getFieldValue('province')
    const secondCityName = form.getFieldValue('secondCity')
    console.log(secondCityName, 'secondCityName')
    // const thirdCityName = form.getFieldValue('thirdCity')
    // console.log(provinceName, secondCityName, thirdCityName, '999999')
    console.log(`${provincebaidu}${secondCitybaidu}${thirdCitybaidu}${inputValue}`, 'geoinfo')
    const map = new BMap.Map(this.baidumap)
    const point = new BMap.Point(116.331398, 39.897445)
    map.centerAndZoom(point, 12)
    // 创建地址解析器实例
    const myGeo = new BMap.Geocoder()
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(`${provincebaidu}${secondCitybaidu}${thirdCitybaidu}${inputValue}`, (point) => {
      console.log(point)
      if (point) {
        map.centerAndZoom(point, 16)
        map.addOverlay(new BMap.Marker(point))
      } else {
        alert('您选择地址没有解析到结果!')
      }
    }, `${provincebaidu}`)
  }

  onChange = (v) => {
    console.log(v, '44')
    // this.setState({
    //   inputValue: v,
    // })
  }

  secondCityChange = (v) => {
    console.log('--888', v)
  }

  render() {
    const {
      cities,
      secondCity,
      thirdCity,
      counties,
      inputValue,
      province,
    } = this.state
    const { form } = this.props
    // console.log(cities, '1', secondCity, '1', thirdCity, '1', counties, '1', province, 'f')
    return (
      <div>
        <Form layout="inline">
          <Form.Item>
            {form.getFieldDecorator('province', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: { key: `${provinceData[0][1]}` },
            })(
              <Select
                labelInValue
                className="select-style"
                style={{ width: 120 }}
                onChange={this.handleProvinceChange}
              >
                {provinceData.map(province => <Option key={province[0]}>{province[1]}</Option>)}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {form.getFieldDecorator('secondCity', {
              rules: [{ required: true, message: 'Please input your note!' }],
              // initialValue: `${cities[0][1]}`,
              initialValue: { key: `${cities[0][1]}` },
            })(
              <Select
                labelInValue
                className="select-style"
                style={{ width: 120 }}
                onChange={this.onSecondCityChange}
              >
                {cities.map(city => <Option key={city[0]}>{city[1]}</Option>)}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {form.getFieldDecorator('thirdCity', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: { key: `${counties[0][1]}` },
            })(
              <Select
                labelInValue
                className="select-style"
                style={{ width: 120 }}
                onChange={this.onthirdCityChange}
              >
                {counties.map(city => <Option key={city[0]}>{city[1]}</Option>)}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {form.getFieldDecorator('input-area', {
              rules: [{ required: false, message: 'Please input your note!' }],
            })(
              <Input
                type="text"
                className="input-area"
                placeholder="请输入详细地址"
                onBlur={this.onBlur}
              />
            )}
          </Form.Item>
        </Form>
        <div id="allmap" ref={(grid) => { this.baidumap = grid }} />
        {/* <iframe title="test" src="http://maxixi.natapp1.cc/esign-web/esign?token=ofqu3krjuf5cvc2srf1azb2s7m5" /> */}
      </div>
    )
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(AreaSelectComponents)
export default WrappedHorizontalLoginForm
