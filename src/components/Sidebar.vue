<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          
          <span class="mx-2 text-2xl font-semibold text-white"
            >CloudBusiness</span
          >
        </div>
      </div>

      <nav class="mt-10">
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
          <Dashboardlogo></Dashboardlogo>
          <span class="mx-4">Dashboard</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'UIElements' ? activeClass : inactiveClass]"
          to="/ui-elements"
        >
          <UIlogo></UIlogo>
          <span class="mx-4">UI Elements</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
          to="/tables"
        >
          <TablesLogo></TablesLogo>
          <span class="mx-4">Tables</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Forms' ? activeClass : inactiveClass]"
          to="/forms"
        >
          <FormsLogo></FormsLogo>
          <span class="mx-4">Forms</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Cards' ? activeClass : inactiveClass]"
          to="/cards"
        >
          <CardsLogo></CardsLogo>
          <span class="mx-4">Cards</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
          to="/modal"
        >
          <Modallogo></Modallogo>

          <span class="mx-4">Modal</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
          to="/blank"
        >
          <Blanklogo></Blanklogo>
          <span class="mx-4">Blank</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dashboardlogo from '../assets/icons/Dashboardlogo.vue';
import UIlogo from '../assets/icons/UIlogo.vue';
import TablesLogo from '../assets/icons/TablesLogo.vue';
import CardsLogo from '../assets/icons/Cardslogo.vue';
import Modallogo from '../assets/icons/Modallogo.vue';
import Blanklogo from '../assets/icons/Blanklogo.vue';
import FormsLogo from '../assets/icons/FormsLogo.vue';
import { useSidebar } from '../hooks/useSidebar';


const { isOpen } = useSidebar();
const activeClass = ref(
  'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100'
);
const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
);
</script>
