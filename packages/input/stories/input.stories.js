import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },//依赖的组件
  template: '<lg-input v-model="value"></lg-input>',//模板
  data () {
    return {
      value: 'admin'
    }
  }
})//加小括号，不然会把{}内当成代码段来运行

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
