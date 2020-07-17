<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- detail不会被缓存，ajax请求在没此页面被加载的时候都会发送 -->
      <router-view/>
    </keep-alive>
    <!-- keep-alive可以让被加载过的内容放在内存中 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
