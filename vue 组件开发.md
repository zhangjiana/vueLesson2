vue 组件
注册方式：
1. 全局注册
在入口文件main.js中进行注册
```javascript
Vue.component('dog', 
{
    
    template: '<p>this is a dog</p>'
}
)
```
2. 局部注册
```javascript
import componentA from '@/components/componentA'
// 在组件的实例中引用
export default {
    components: {
        componentA
    }
}
```

基础组件，偏功能性组件，适用于全局注册；
业务组件，适用范围小的， 适用局部注册；


三要素：
1. props
2. event
3. slot

组件通信
1. props 传值 ， v-bind
2. $on 与 $emit 事件传值
3. $attrs/$listeners
4. provide/inject
5. mixins

传家宝的故事

富爷爷
富爸爸
富孙子

监听子组件的生命周期

钩子函数hooks



组件开发原则
