<template>
  <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold">Price crypto</nuxt-link>
                <ul class="flex gap-4">
                   <li><nuxt-link to="/now">Price now</nuxt-link></li>
                   <li><nuxt-link to="/week">Weekly price chart</nuxt-link></li>
                   <li><nuxt-link to="/month">Monthly price chart</nuxt-link></li>
                   <li><nuxt-link to="/year">Price chart for the year</nuxt-link></li>
                   <li><nuxt-link to="/choose">Choose your range</nuxt-link></li>
                </ul>                
            </nav>
        </header>

        <!-- out the page content -->
      
        <div class="container mx-auto p-4">
            <slot />
        </div>
</div>


</template>

<script setup>
   

</script>
