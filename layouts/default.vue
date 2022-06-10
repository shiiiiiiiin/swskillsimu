<template>
  <div>
    <client-only>
      <!-- Temporary i18n Switcher -->
      <div class="flex flex-row justify-center w-full mt-4 text-center text-sm text-white gap-2">
        <span v-for="locale in availableLocales" :key="locale.code">
          <nuxt-link :to="switchLocalePath(locale.code)" class="bg-zinc-800 px-4 py-2 rounded-lg" v-text="locale.name" />
        </span>
      </div>
      <Nuxt />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  }
}
</script>
