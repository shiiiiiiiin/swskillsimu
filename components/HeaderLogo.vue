<template>
  <div class="flex justify-center mt-20">
    <NuxtLink :to="localePath('/')" prefetch>
      <img class="w-[320px]" src="~/assets/img/logo.png">
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>
