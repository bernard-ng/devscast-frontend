<template>
<div class="about">

  <PageHeader name="About Us"></PageHeader>

  <main class="main" id="main">
    <AboutSection></AboutSection>
    <NewsletterSection></NewsletterSection>
    <DonateSection></DonateSection>
  </main>
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'
import NewsletterSection from '@/components/Sections/NewsletterSection.vue'
import DonateSection from '@/components/Sections/DonateSection.vue'

export default {
  name: 'About',
  components: {
    PageHeader,
    AboutSection,
    NewsletterSection,
    DonateSection
  }
}
</script>
