<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
  </nav>


</template>

<script>
export default {
  name: 'navbar'
}
</script>
