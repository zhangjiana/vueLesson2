vue 组件
注册方式：

组件命名： 
1. 组件名由多个单词组成，避免与现有的html 元素冲突；
2. 单词应该是用连接符 组成的，如： my-component
    或者是驼峰命名的, 如： myComponent
但是在DOM中引用的时候，需要是连接符的标签。


3. 全局注册
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



组件通信
1. props 传值 ， v-bind
2. $on 与 $emit 事件传值
3. $attrs/$listeners
4. provide/inject
5. mixins
6. slot

传家宝的故事

富爷爷
富爸爸
富孙子

监听子组件的生命周期

钩子函数hooks



组件开发原则
