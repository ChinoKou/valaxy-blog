<script setup lang="ts">
import { useFrontmatter, useFullUrl, useSiteConfig } from "valaxy";
import { computed, onMounted } from "vue";
import { useUtterances } from "../composables/use-utterances";

const siteConfig = useSiteConfig();
const frontmatter = useFrontmatter();
const url = useFullUrl();

const showSponsor = computed(() => {
  if (typeof frontmatter.value.sponsor === "boolean")
    return frontmatter.value.sponsor;

  return siteConfig.value.sponsor.enable;
});

const showComment = computed(() => {
  if (typeof frontmatter.value.comment === "boolean")
    return frontmatter.value.comment;

  return true;
});

onMounted(() => {
  useUtterances({
    repo: "ChinoKou/valaxy",
    issueTerm: "pathname",
    label: "utterances",
  });
});
</script>

<template>
  <YunSponsor v-if="showSponsor" m="t-6" />
  <ValaxyCopyright
    v-if="
      frontmatter.copyright ||
      (frontmatter.copyright !== false && siteConfig.license.enabled)
    "
    :url="url"
    m="y-4"
  />
  <!-- 评论容器 -->
  <div v-if="showComment" class="comment" m="t-6" />
</template>
