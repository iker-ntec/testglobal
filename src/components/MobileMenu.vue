<script setup lang="ts">
import { ref } from "vue";
import type { NavLink } from "../data/navigation";

defineProps<{
  links: NavLink[];
}>();

const isOpen = ref(false);
</script>

<template>
  <div class="md:hidden">
    <button
      type="button"
      class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"
      aria-label="Abrir menu"
      aria-controls="mobile-nav"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span v-if="isOpen" class="text-lg leading-none">&times;</span>
      <span v-else class="text-lg leading-none">&#9776;</span>
    </button>

    <div
      v-show="isOpen"
      id="mobile-nav"
      class="absolute left-0 right-0 top-full border-b border-white/5 bg-[#0f0f14]/95 backdrop-blur-md"
    >
      <nav class="mx-auto max-w-7xl px-6 py-4">
        <ul class="flex flex-col gap-1">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-lg px-4 py-3 text-white/60 transition hover:bg-white/5 hover:text-white"
              @click="isOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="mt-4 flex flex-col gap-3 border-t border-white/5 pt-4">
          <a href="#" class="px-4 py-3 text-center text-sm text-white/60 transition hover:text-white">
            Iniciar sesion
          </a>
          <a
            href="#"
            class="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-center text-sm font-medium transition hover:opacity-90"
          >
            Crear cuenta gratis
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
