<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Layout></Layout>
    <button @click="changeCount">计数器</button>
    当前计数器:{{count}}
    <div>
      已做事情的列表:{{doneTodosCount}}
      <ul>
        <li v-for="item in doneTodos">{{item.text}}</li>
      </ul>
    </div>
    <div class="chart">
        <column></column>
    </div>
    <div class="slideBar">
    <slide-bar></slide-bar>
    </div>
  </div>
</template>

<script>
import Layout from './components/Layout'
import { mapState, mapGetters} from 'vuex'
import column from './components/chart/endlongColumn'
import slideBar from './components/slideBar/slide'
export default {
  name: 'app',
  components: {
    Layout,
    column,
    slideBar
  },
  computed: {
    ...mapState([ // 可以将store中的变量映射到vue的this对象上,主要传递一个数组
        'userInfo',
        'count'
      ]),
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    ...mapGetters([ // getters的辅助函数，将getters里的变量映射到this中
        'doneTodosCount'
      ])
  },
  methods: {
    changeCount () {
      this.$store.commit({
        type: 'increment',
        amount: 10
      })
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chart{
  width: 50%;
  height: 400px;
}
.slideBar{
  width: 100%;
  height: 300px;
}
</style>
