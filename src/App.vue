<template>
  <div id="app">
    <ul class="tabs">
      <li v-for="item in examples" :class="{'active': nowExample === item }" 
        @click="changeExample(item)" :key="item.id">{{item}}</li>
    </ul>
    <div class="containers">
      <p>这个是<span>{{nowExample}}</span>通信</p>
      <component :is="nowExample"></component>
    </div>
  </div>
</template>

<script>
import componentList from './components/examples.js'

export default {
  name: 'App',
  components: componentList,
  data() {
    return {
      nowExample: '',
      examples: ['propsMessage', 'eventMessage', 'attrMessage', 'provideMessage']
    }
  },
  methods: {
    changeExample(name) {
      this.nowExample = name
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
.tabs {
  display: flex;
  justify-content: center;
}
.tabs li {
  text-align: center;
  list-style: none;
  padding: 6px 10px;
  cursor: pointer;
  background: #99ffff;
  margin-right: 4px;
}
.tabs li:hover, .tabs li.active {
  color: #fff;
  background: #1a8cff;
}
.containers {
  margin-top: 30px;
  padding: 10px;
  border: 1px solid #ccc;
}
.containers span {
  color: teal
}
</style>
