<template>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>

<script>
import Hello from './hello.vue';
export default {
  data(){
    return {
      name:'vue@2.0'
    }
  },
  components:{
    hello:Hello
  }
}
</script>

<style lang="css">
</style>
