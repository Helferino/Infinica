<template>
  <div class="wrapper">
    <div
      class="content"
      :class="{ anim: news.length > 0 }"
      :style="getAnimDuration"
      @animationend="fetch()"
    >
      <div v-for="item of news" :key="item.id" class="item">
          &squf; {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Response } from '~~/models/Response'

const config = useRuntimeConfig()
const batch = ref<Response | null>(null)
const isLoading = ref(false)
const initialLen = ref<number | null>(null)

const props = defineProps({
  perBatch: {
    type: Number,
    default: 10
  },
  speed: {
    type: Number,
    default: 1
  }
})

const repeat = () => {
  batch.value = null
  initialLen.value = null
  fetch()
}

const fetch = async () => {
  // Prevents accidental double fetch and provides more state control
  if (isLoading.value) {
    return
  }

  // Assign correct URL (Next page is generated from previous request)
  const path = `/v2/reference/news?limit=${props.perBatch}`
  const fetchUrl = batch.value !== null
    ? batch.value.next_url
    : config.public.API_URL + path

  batch.value = null

  // No more results (Start from page 1)
  if (typeof fetchUrl !== 'string') {
    return repeat()
  }

  isLoading.value = true

  try {
    // Fetch API results
    // Improvement 1 - Create custom API service
    // Improvement 2 - Use Axios with default header settings
    const res = await $fetch(fetchUrl, {
      headers: {
        'Authorization': 'Bearer ' + config.public.API_TOKEN
      }
    })

    // Improvement:
    // "Response" class would be extended from some kind of "BaseModel" class
    // where its constructor can auto-assign data to "Response" class
    // example: batch.value = new Response(res)
    batch.value = Object.assign(new Response(), res)

  } catch(e) {
    alert('Problem with News API')
    console.error(e)
    return
  }

  // First data length is used as reference for other batches to maintain same animation speed (More in "getAnimDuration")
  if (initialLen.value === null) {
    initialLen.value = batch.value.newsLength
  }

  isLoading.value = false
}

const getAnimDuration = computed(() => {
  const len = batch.value?.newsLength

  // No batch found
  if (len === undefined) {
    return ''
  }

  // Because Im using animation based on content % width,
  // speed may vary based on total response length (batch.newsLength).
  // This algorithm fixes this issue
  const lenDiff = len / (initialLen.value !== null ? initialLen.value : 1)
  const spd = (len * 100) / props.speed / (len / lenDiff)

  return `animation-duration: ${spd}s;`
})

const news = computed(() => batch.value ? batch.value.results : [])

// Initial fetch
onMounted(fetch)
</script>

<style scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
  background-color: rgb(44, 48, 71);
  padding: 14px 0;
}

.content {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding-left: 100%;
  height: 100%;
}

.anim {
  animation: anim linear;
}

.item {
  display: inline-block;
  padding-left: 32px;
  color: white;
  font-weight: 600;
}

@keyframes anim {
  0% {
    transform: (0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
