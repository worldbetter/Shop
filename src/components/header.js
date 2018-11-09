import React from 'react'
import { Tabs,Button } from 'antd'
import {StickyContainer,Sticky} from 'react-sticky'
import { Display } from "../components/first/display";
import Commodity from "./first/commodity";
import ladyOuter from "../assets/commodity/ladies_outerwear"
import ladyTshirt from "../assets/commodity/ladies_tshirts"
import menOuter from "../assets/commodity/mens_outerwear"
import menTshirt from "../assets/commodity/mens_tshirts"

const TabPane = Tabs.TabPane

const renderTabBar = (props,DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({style}) => (
      <DefaultTabBar {...props} style={{...style,zIndex:1,background:'#fff'}}/>
    )}
  </Sticky>
)

function Header() {
  const tabProp = [{
    tab: "Men's Outerwear",
    key: "1",
    imageUrl: require("../assets/images/mens_outerwear.jpg"),
    type: "Men's Outerwear",
    itemNumber: 6,
    itemDetail: menOuter
  },{
    tab: "Ladies Outerwear",
    key: "2",
    imageUrl: require("../assets/images/ladies_outerwear.jpg"),
    type: "Ladies Outerwear",
    itemNumber: 6,
    itemDetail: ladyOuter
  },{
    tab: "Men's T-Shirts",
    key: "3",
    imageUrl: require("../assets/images/mens_tshirts.jpg"),
    type: "Men's T-Shirts",
    itemNumber: 6,
    itemDetail: menTshirt
  },{
    tab: "Ladies T-shirts",
    key: "4",
    imageUrl: require("../assets/images/ladies_tshirts.jpg"),
    type: "Ladies T-shirts",
    itemNumber: 6,
    itemDetail: ladyTshirt
  }]
    return (
      <div>
        <h1>SHOP</h1>
        <StickyContainer>
          <Tabs renderTabBar={renderTabBar}>
            {tabProp.map((item) => (
              <TabPane tab={item.tab} key={item.key}>
                <Display imageUrl={item.imageUrl} type={item.type} itemNumber={item.itemNumber}/>
                <Commodity itemDetail={item.itemDetail}/>
              </TabPane>
            ))}
          </Tabs>
        </StickyContainer>
      </div>
    )
}

export default Header
