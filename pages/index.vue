<!-- eslint-disable vue/no-v-html -->
<template>
  <!-- Container -->
  <div class="w-[1280px] mx-auto">
    <!-- Temporary i18n Switcher -->
    <div class="flex flex-row justify-center w-full mt-4 text-center text-sm text-white gap-2">
      <span>
        <nuxt-link :to="switchLocalePath('en')" class="bg-zinc-800 px-4 py-2 rounded-lg">
          English
        </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="switchLocalePath('ja')" class="bg-zinc-800 px-4 py-2 rounded-lg">
          日本語
        </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="switchLocalePath('ko')" class="bg-zinc-800 px-4 py-2 rounded-lg">
          한글
        </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="switchLocalePath('zh')" class="bg-zinc-800 px-4 py-2 rounded-lg">
          官话
        </nuxt-link>
      </span>
    </div>

    <NoScript />
    <HeaderBanner />
    <SectionAbout />
    <SectionContributors />
  </div>
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
  }
}
</script>
