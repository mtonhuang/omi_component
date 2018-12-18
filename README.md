# omi_component
    omi 组件
    在工作开发过程中 总结，并且封装出一些可复用的组件
    未完待续...
    
    slider-nav组件用法：
 ```
import { define, WeElement} from 'omi'

//引入css样式
import normalizeStyle from '../../../assets/_normalize.css'
import commStyle from './_index.scss'

//在需要用到的组件里引入slider-nav组件
import '../../common/slider-nav'

define('demo', class extends WeElement {
  static observe = true
  data = {
    nav : [
      {
        label: '',
        path: '',
        tag: '',
        children: [
          //嵌套子路由
        ]
      },
      {
        label: '',
        path: '',
        tag: '',
        children: [
          //嵌套子路由
        ]
      },
      {
        label: '处罚系统',
        path: '',
        tag: '',
        children: [
          //嵌套子路由
        ]
      }
    ]
  }
  install() {}
  css() {
    return (
      normalizeStyle + commStyle
    )
  }
  render(props,data) {
    console.log(porps)
    return (
      <div>
            <slider-nav nav={this.data.nav}></slider-nav>
            <div class="content"></div>
      </div>
    )
  }
})
```
