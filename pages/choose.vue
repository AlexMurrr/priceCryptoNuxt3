<template>
  <div>
    <h2>выберите количество дней за которое хотите узнать тенденцию цены</h2><br>
    <input type="number" v-model="choose">
   
  </div>
</template>

<script>
export default{
name: 'choosePage',
data () {
  return {
    choose: 7,
  }
},




}
</script>
