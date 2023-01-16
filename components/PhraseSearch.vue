<template>
  <div>
    <div ref="contentEl" class="content">
      <slot/>
    </div>

    <slot name="toolbar" v-bind="{ search: debounced, forceSearch: search }">
      <input @input="debounced" placeholder="Enter search phrase"/>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash'

const contentEl = ref<HTMLDivElement | null>(null)

const search = (phrase: string) => {
  // Problem with rendering
  if (!contentEl.value) {
    return
  }

  const children = contentEl.value.children
  const selectRegex = new RegExp('(' + phrase + ')', 'g')
  const removeRegex = new RegExp(/<span class="_h">(.*?)<\/span>/, 'g')

  for (const child of children) {
    const el = child as HTMLElement

    // Remove previous search (If any)
    if (el.innerHTML.indexOf('<span class="_h">') !== -1) {
      el.innerHTML = el.innerHTML.replace(removeRegex, '$1')
    }

    // Check if there is atleast one match (If any)
    if (phrase.length && el.innerText.indexOf(phrase) !== -1) {
      el.innerHTML = el.innerHTML.replace(selectRegex, '<span class="_h">$1</span>')
    }
  }
}

// Lodash's debounce may be overkill, custom debouncer using `setTimeout` can replace this
const debounced = debounce((event: Event) => {
  const target = event.target as HTMLInputElement
  search(target.value)
}, 100)
</script>

<style>
/* "_h" has low chance to be used as class in body search and causing unwanted behaviours */
.content ._h {
  background-color: yellow
}
</style>
