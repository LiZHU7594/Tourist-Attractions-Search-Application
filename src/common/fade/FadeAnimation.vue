<template>
  <transition>
    <!-- vue会自动给transition加class,比较经典的有：v-enter, v-leave-to，v-enter-active, v-leave-active  -->
    <slot></slot>
    <!-- slot是外部组件插入进来的插槽 -->
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
  opacity: 0
.v-enter-active, .v-leave-active
  transition: opacity .5s
</style>
