<template>
  <div class="flex flex-col mt-8">
    <div class="pl-5 pr-14 py-4 w-full bg-zinc-800 text-white shadow-lg rounded-lg -skew-x-12">
      <h3 class="tracking-widest text-lg font-extrabold uppercase skew-x-12">
        <span class="inline-flex items-baseline">
          <IconUsers class="self-center h-6 w-6 mr-3" />
          {{ $t('heading.contributors') }}
        </span>
      </h3>
    </div>

    <div class="-mt-2 mx-8 pt-2 bg-zinc-700 rounded-b-lg">
      <div class="px-6 py-6 text-white">
        <!-- Contributors Grid -->
        <div class="grid grid-cols-4 gap-3">
          <div v-for="(contributor, index) in contributors" :key="index" class="flex items-center px-4 py-2 bg-zinc-600 rounded">
            <!-- Contributor Details -->
            <div class="flex flex-col w-full">
              <h4 class="text-base" v-text="contributor.discord_username" />
              <h6 class="text-sm text-zinc-400" v-text="$t('contributors_role.' + contributor.role)" />
            </div>
            <!-- Contributor GitHub Link -->
            <a v-if="contributor.github_username !== null" :href="'https://github.com/' + contributor.github_username" target="_blank" class="shrink-0">
              <!-- GitHub Icon -->
              <IconGithub class="self-center h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconGithub from '../Icons/IconGithub.vue'
import IconUsers from '../Icons/IconUsers.vue'
import contributors from '~/assets/json/contributors.json'

export default {
  name: 'SectionContributors',
  components: { IconGithub, IconUsers },
  data () { return { contributors } }
}
</script>
