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

<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <h1 class="navbar-brand">Price Bitcoin</h1>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink exact active-class="active" class="nav-link" to="/">
              Price is now
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" class="nav-link" to="/week">
              Weekly price chart
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" class="nav-link" to="/month">
              Monthly price chart
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" class="nav-link" to="/year">
              Price chart for the year
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" class="nav-link" to="/choose">
              Choose your range
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->


</template>

<script>
export default {
  name: 'navbar'
}
</script>
