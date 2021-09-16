import React from 'react'
import '../css/Home.css'
import MyCarousel from '../components/MyCarousel';
import Product from '../components/Product';
import Category from '../components/Category';

export default function Home() {
    return (
        <div className="app__body">
          <MyCarousel/>
        <div className="app__body__products">
          <div className='product__row'>
              <Product title='Explore home bedding' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg'/>
              <Product title='Easy returns' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg'/>
              <Product title='Get fit at home' src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'/>
              <Product title='Oculus' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg'/>
          </div>
          <div className='product__row'>
              <Product title='Explore home bedding' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg'/>
              <Product title='Easy returns' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg'/>
              <Product title='Get fit at home' src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'/>
              <Product title='Oculus' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg'/>

          </div>
        <Category/>
        <Category/>
          
        </div>

      </div>
    )
}
