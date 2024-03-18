<template>
  <div>
   <Navbar/>
    <main>
    <div class="conteiner">
        <nuxt />
    </div>
  </main>
  </div>

</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
    components: { Navbar }
}
</script>
