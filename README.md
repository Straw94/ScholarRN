# ScholarRN
> React-Native 启动报错
>>  react-native run-ios报错
>>> https://reactnative.cn/docs/getting-started/
>>
>> Unable to resolve module `@babel/runtime/helpers/interopRequireDefault`
>>> https://stackoverflow.com/questions/52486219/unable-to-resolve-module-babel-runtime-helpers-interoprequiredefault
>>
>> BVLinearGradient报错不存在 （react-native-linear-gradient 渐变背景）
>>> react-native link react-native-linear-gradient
>>
>> 涉及到一些依赖包下载失败 或者 代理（翻墙）
>>> 建议下载0.44.3  -----  react-native init MyApp --version 0.44.3
>>
>> 如果有问题可以使用邮箱留言... anranemails@163.com
>>> 小编也是费了好久的时间才运行起来、 希望大家在使用的时候稍安勿躁一步一步解决
>
> 插件
>> axios -- http请求封装等. 本次示例并没有使用axios 封装， 详细可查看
>>> https://github.com/tobescholar/Integration/blob/master/src/plugin/http/index.js
>>
>> react-native-exit-app -- 退出app插件
>>
>> react-native-linear-gradient -- 渐变背景
>> 
>> react-navigation -- 导航
>> 
>> react-redux -- 全局状态管理
>>
>> redux-saga -- 全局异步状态管理
>>
# 目录结构
> android
```原生android```
>
> ios
```原生ios```
>
> src
>> assets
```存放图片等静态资源```
>> 
>> Components
```封装组件文件夹```
>> 
>> Containers
```组件容器文件夹```
>>
>> Css
```样式文件夹```
>>
>> Function
```全局方法包括（适配比例等方法）```
>>
>> HTTP
```如果涉及到封装http请求建议封装在这里```
>> 
>> Redux
```官方文档http://www.redux.org.cn/```
>>> Actions 
```redux行为方法```
>>>
>>> Reducers
```redux数据存放```
>>>
>>> Saga
```异步请求```
>>
>> Route
```导航相关配置 react-navigation 小编用的是侧导航 在这里配置```
>>
>> Screen
```页面划分模块```


```
本次示例的结构分为三层
screen ---- 页面  （整合container）
container ---- 容器 （组装components 处理业务逻辑与数据交互）
components ---- 组件 （只负责显示）



