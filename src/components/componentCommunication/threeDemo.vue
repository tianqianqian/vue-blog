<template>
	<div id="threeChild">
		<h2>这是第三个组件</h2>
		<div>这是监听发送消息而收到的参数:{{msg}}</div>
	</div>
</template>
<script type="text/javascript">
	import bus from '../../assets/eventBus'
	export default {
		name: 'threeChild',
		data () {
			return {
				msg: '默认值'
			}
		},
		mounted () {
			let self = this
			self.$on('userDefinedEvent', function (msg) {
				self.msg = msg
			})
		}
	}
</script>
<style type="text/css">
	
</style>