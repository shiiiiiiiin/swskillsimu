<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="section">
    <div class="section-heading">
      <h3 class="section-heading__title">
        {{ $t('heading.about') }}
      </h3>
    </div>

    <div class="section-body">
      <div class="section-body__text">
        <!-- Content -->
        <p v-for="(content, index) in contents" :key="index" v-html="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  data () {
    return {
      contents: this.$t('about_content')
    }
  }
}
</script>
