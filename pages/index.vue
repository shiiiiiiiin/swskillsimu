<!-- eslint-disable vue/no-v-html -->
<template>
  <no-ssr>
    <!-- Container -->
    <div class="w-[1280px] mx-auto">
      <!-- Temporary i18n Switcher -->
      <div class="flex flex-row justify-center w-full mt-4 text-center text-sm text-white gap-2">
        <span v-for="locale in availableLocales" :key="locale.code">
          <nuxt-link :to="switchLocalePath(locale.code)" class="bg-zinc-800 px-4 py-2 rounded-lg" v-text="locale.name" />
        </span>
      </div>

      <NoScript />
      <HeaderBanner />
      <SectionAbout />
      <SectionContributors />
    </div>
  </no-ssr>
</template>

<script>
import NoScript from '../components/NoScript.vue'
import HeaderBanner from '../components/HeaderBanner.vue'
import SectionAbout from '../components/Sections/SectionAbout.vue'
import SectionContributors from '../components/Sections/SectionContributors.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderBanner,
    NoScript,
    SectionAbout,
    SectionContributors
  },
  data () {
    return {
      characters: this.$t('characters')
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  }
}
</script>
