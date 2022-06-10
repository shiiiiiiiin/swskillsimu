<template>
  <div class="max-w-[1280px] mx-auto px-8">
    <NoJavascript />
    <HeaderLogo />
    <SelectCharacter />
    <AboutSection />
    <ContributorsSection />
  </div>
</template>

<script>
import SelectCharacter from '../components/Sections/SelectCharacter'
import NoJavascript from '~/components/NoJavascript'
import HeaderLogo from '~/components/HeaderLogo'
import AboutSection from '~/components/Sections/About'
import ContributorsSection from '~/components/Sections/Contributors'

export default {
  name: 'IndexPage',
  components: {
    SelectCharacter,
    NoJavascript,
    HeaderLogo,
    AboutSection,
    ContributorsSection
  }
}
</script>
