<!-- You can mount anything here -->

<script lang="ts" setup>
import { useUtterances } from "./composables/use-utterances";

useUtterances({
  repo: "ChinoKou/valaxy-blog",
  issueTerm: "pathname",
  label: "utterances",
});
</script>

<template>
  <!-- try it -->
  <div />
</template>
