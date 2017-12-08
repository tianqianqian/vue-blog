<template>
	<div>
		<div>这是一个页面</div>
		<first-demo></first-demo>
		<second-demo></second-demo>
		<three-demo></three-demo>
	</div>
</template>
<script type="text/javascript">
import firstDemo from './componentCommunication/firstDemo'
import secondDemo from './componentCommunication/secondDemo'
import threeDemo from './componentCommunication/secondDemo'

	export default {
		name: 'Layout',
		data () {
			return {
				
			}
		},
		components: {
			firstDemo,
			secondDemo,
			threeDemo
		}
	}
</script>
<style type="text/css"></style>
