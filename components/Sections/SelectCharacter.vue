<template>
  <div class="section">
    <div class="section-heading">
      <h3 class="section-heading__title">
        {{ $t('heading.select_character') }}
      </h3>
    </div>

    <div class="section-body rounded-none">
      <div class="grid grid-cols-10">
        <NuxtLink :to="localePath('/')" prefetch>
          <img src="~/assets/img/characters/stella/select.png" alt="">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionSelectCharacter'
}
</script>
