<template>
  <div>
    {{/* Magic numbers. Don't touch, don't question. */}}
    <svg viewBox="0 0 167 12">
      <text :x="8.78 * (19 - words[currentWord].length) / 2" y="11.2">{{words[currentWord]}}</text>
    </svg>
    <hr>
    <ul>
      <li>
        <button @click="startStop">{{started ? 'PAUSE' : 'PLAY'}}</button>
      </li>
      <li>
        <ul>
          <li>
            <button @click="slower">SLOWER</button>
          </li>
          <li><span>{{wordsPerMinute}} wpm</span></li>
          <li>
            <button @click="faster">FASTER</button>
          </li>
        </ul>
      </li>
      <li>
        <button @click="() => {this.showText = !this.showText}">{{showText ? 'HIDE TEXT' : 'SHOW TEXT'}}</button>
      </li>
    </ul>
    <p v-if="showText">
      <template v-for="(w, i) of words">
        <span :key="2 * i" v-if="i !== 0">{{'\n' /* Uma gambiarra em seu habitat natural */}}</span>
        <span :key="2 * i + 1" :class="i === currentWord ? 'highlight' : ''">{{w}}</span>
      </template>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextReader',
  props: {
    rawText: String,
  },
  computed: {
    words() {
      return this.rawText.split(/\s+/)
    },
  },
  data() {
    return {
      currentWord: 0,
      started: false,
      interval: 0,
      wordsPerMinute: 300,
      showText: false,
    }
  },
  methods: {
    startStop() {
      if (this.started) {
        this.started = false
        clearInterval(this.interval)
        return
      }

      this.started = true
      this.interval = setInterval(() => {
        this.currentWord++
        if (this.words.length === this.currentWord) {
          this.startStop()
          this.currentWord = 0
        }
      }, 60000 / this.wordsPerMinute)
    },
    faster() {
      this.wordsPerMinute++
      if (this.started) {
        this.startStop()
        this.startStop()
      }
    },
    slower() {
      this.wordsPerMinute--
      if (this.started) {
        this.startStop()
        this.startStop()
      }
    },
  },
  destroyed() {
    if (this.started) {
      clearInterval(this.interval)
    }
  },
}
</script>

<style lang="stylus" scoped>
div
  display flex
  flex-direction column
  width 100%

  hr
    width calc(100% - 4px)
    border 2px solid sr-grey

  svg
    background-color sr-word-box-bg-color

    text
      font-size 16px
      fill sr-word-box-color

  ul
    display flex
    justify-content space-between
    margin 0
    padding 0

    li
      display block
      margin 0
      background-color sr-white
      color sr-black
      min-width 10%
      text-align center

      span
        width 5rem
        height 100%
        padding 0 1rem
        background-color sr-grey

      button
        display block
        border-radius 0
        border unset
        background-color sr-white
        padding 0 1rem
        width 100%
        height 100%

  .highlight
    color sr-highlight-color
</style>
