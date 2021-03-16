<template>
  <div id="app">
    <div>
      <span>_</span>
      <text-reader :raw-text="text"/>
    </div>
  </div>
</template>

<script>
import TextReader from '@/components/TextReader'

const text = `1
12
123
1234
12345
123456
1234567
12345678
123456789
1234567890
12345678901
123456789012
1234567890123
12345678901234
123456789012345
1234567890123456
12345678901234567
123456789012345678
1234567890123456789`

export default {
  name: 'App',
  components: {TextReader},
  computed: {
    text() {
      return text;
    }
  },
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
