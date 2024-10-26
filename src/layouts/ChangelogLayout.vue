<template>
  <div>
    <div class="sidebar relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:pl-[max(4rem,calc(50%-38rem))] overflow-hidden">
        <div class="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6 w-full">
          
          <div class="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20 max-w-sm">
            <StarField class="absolute inset-0 rotate-[30deg]" />
            <div class="relative text-white">
              

              <!-- intro start -->

              <div>
                <a href="/">
                  <Logo class="inline-block h-8 w-auto" />
                </a>
              </div>
              <h1 class="mt-14 font-display text-4xl/tight font-light text-white">
                Open-source component library
                <span class="text-sky-300">for Vue + Tailwind minimalists</span>
              </h1>
              <p class="mt-4 text-sm/6 text-gray-300">
                Sketchbook UI is a collection of Vue components built with TailwindCSS that are designed to be
                simple, minimal, and easy to use. It's a great starting point for building your own application.
                And it's always free.
              </p>
              <div class="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                <SBButton>
                  Get started
                </SBButton>
                <SBButton arrow>
                  Documentation
                </SBButton>
                <!-- <IconLink href="#" icon={BookIcon} class="flex-none">
                  Documentation
                </IconLink>
                <IconLink href="#" icon={GitHubIcon} class="flex-none">
                  GitHub
                </IconLink>
                <IconLink href="/feed.xml" icon={FeedIcon} class="flex-none">
                  RSS
                </IconLink> -->
              </div>
              <!-- intro end  -->




            </div>
          </div>

          <div class="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6 text-white">
            <span>Footer item 1</span>
            <span>Footer item 2</span>
          </div>

        </div>
      </div>
    </div>
    <SBThemeToggle @switch="(value) => isDarkMode = value" />
    <div class="relative flex-auto min-h-screen h-full bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
      <Timeline />
      <slot />
    </div>

  </div>
</template>
<script setup>
import StarField from '../components/StarField/StarField.vue';
import Glow from '../components/Backgrounds/Glow.vue';
import Timeline from '../components/Backgrounds/Timeline.vue';
import SBButton from '../components/Common/SBButton.vue';
import SBThemeToggle from '../components/Common/SBThemeToggle.vue';
import { ref, onMounted } from 'vue';


const isDarkMode = ref(false);

const id = ref(`glow-${Math.random().toString(36).substr(2, 9)}`);
const loading = ref(false);


</script>