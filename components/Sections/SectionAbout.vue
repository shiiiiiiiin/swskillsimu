<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex flex-col mt-8">
    <div class="pl-5 pr-14 py-4 w-full bg-zinc-800 text-white shadow-lg rounded-lg -skew-x-12">
      <h3 class="tracking-widest text-lg font-extrabold uppercase skew-x-12">
        <span class="inline-flex items-baseline">
          <IconInfo class="self-center h-6 w-6 mr-3" />
          {{ $t('heading.about') }}
        </span>
      </h3>
    </div>

    <div class="-mt-2 mx-8 pt-2 bg-zinc-700 rounded-b-lg">
      <div class="px-6 py-6 text-white">
        <!-- Content -->
        <p v-for="(content, index) in contents" :key="index" v-html="content" />
      </div>
    </div>
  </div>
</template>

<script>
import IconInfo from '../Icons/IconInfo.vue'

export default {
  name: 'SectionAbout',
  components: { IconInfo },
  data () {
    return {
      contents: this.$t('about_content')
    }
  }
}
</script>
