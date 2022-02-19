<script setup lang="ts" name="NaiveProviderContent">
import {
  useLoadingBar,
  useDialog,
  useNotification,
  useMessage,
} from 'naive-ui';

window.$loadingBar = useLoadingBar();
window.$dialog = useDialog();
window.$notification = useNotification();
window.$message = useMessage();
</script>
