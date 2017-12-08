<template>
	<div id="firstChild">
		<h2>firstchild组件</h2>
		<button @click="sendMsg">向组件传值</button>
	</div>
</template>
<script type="text/javascript">
import bus from '../../assets/eventBus'
	export default {
		methods: {
			sendMsg: function () {
				bus.$emit("userDefinedEvent", "this message is from firstChild")
			}
		}
	}
</script>