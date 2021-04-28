<template>
  <div id="app">
    <div>
      <text-reader :raw-text="text"/>
    </div>
  </div>
</template>

<script>
import TextReader from '@/components/TextReader'

export default {
  name: 'App',
  components: {TextReader},
  data() {
    return {
      text: '',
    }
  },
  mounted() {
    fetch('/text.txt').then(res => res.text().then(text => this.text = text))
  }
}
</script>

<style lang="stylus">
body
  margin 0

#app
  font-family Consolas, monospace
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  min-height 100vh
  background-color sr-black
  color sr-white
  display flex
  justify-content center
  align-items center

  > div
    width 60rem

    > span
      display block
      width 100%
      text-align center
      line-height 1
      font-size 80px
</style>
