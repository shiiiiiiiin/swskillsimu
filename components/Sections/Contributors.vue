<template>
  <div class="section">
    <div class="section-heading">
      <h3 class="section-heading__title">
        {{ $t('heading.contributors') }}
      </h3>
    </div>

    <div class="section-body">
      <div class="section-body__text">
        <!-- Contributors Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div v-for="(contributor, index) in contributors" :key="index" class="flex items-center px-4 py-2 bg-zinc-600 rounded">
            <!-- Contributor Details -->
            <div class="flex flex-col w-full">
              <h4 class="text-base" v-text="contributor.discord_username" />
              <h6 class="text-sm text-zinc-400" v-text="$t('contributors_role.' + contributor.role)" />
            </div>
            <!-- Contributor GitHub Link -->
            <a v-show="contributor.github_username !== null" :href="'https://github.com/' + contributor.github_username" target="_blank" class="shrink-0">
              <!-- GitHub Icon -->
              <i class="fa-brands fa-github self-center text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contributors from '~/assets/json/contributors.json'

export default {
  name: 'SectionContributors',
  data () {
    return {
      contributors
    }
  }
}
</script>
