import { useAppStore } from "valaxy";
import { nextTick, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const utterancesClientSrc = "https://utteranc.es/client.js";

/**
 * @see https://utteranc.es/
 */
export function useUtterances(options: {
  repo: string;
  issueTerm: "pathname" | "title";
  label: string;
}) {
  const app = useAppStore();
  const route = useRoute();

  const utterScriptRef = ref<HTMLScriptElement>();
  /**
   * mount utterances
   * @see https://utteranc.es/
   */
  function createUtterancesScript() {
    const commentContainer = document.querySelector(".comment");

    if (!commentContainer) {
      console.warn("[Utterances] 未找到 .comment 容器，评论系统无法挂载");
      return;
    }

    if (utterScriptRef.value) {
      utterScriptRef.value.remove();
    }

    utterScriptRef.value = document.createElement("script");

    utterScriptRef.value.src = utterancesClientSrc;
    utterScriptRef.value.async = true;
    utterScriptRef.value.crossOrigin = "anonymous";

    utterScriptRef.value.setAttribute("repo", options.repo);
    utterScriptRef.value.setAttribute("issue-term", options.issueTerm);
    utterScriptRef.value.setAttribute("label", options.label);
    utterScriptRef.value.setAttribute(
      "theme",
      app.isDark ? "github-dark" : "github-light",
    );

    // 移除旧的 utterances 容器
    const utterancesContainer = commentContainer.querySelector(".utterances");
    if (utterancesContainer) {
      commentContainer.removeChild(utterancesContainer);
    }

    commentContainer.appendChild(utterScriptRef.value);
  }

  // watch dark mode for theme switching
  watch(
    () => app.isDark,
    () => {
      createUtterancesScript();
    },
  );

  // watch route change
  watch(
    () => route.path,
    () => {
      nextTick(() => {
        createUtterancesScript();
      });
    },
  );

  onMounted(() => {
    createUtterancesScript();
  });
}
