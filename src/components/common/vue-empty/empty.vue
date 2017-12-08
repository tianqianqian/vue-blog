<template>
	<div class="empty-box">
		<slot>No Result Data.</slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'vue-empty'
	}
</script>
<style type="text/css">
	.empty-box{
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		min-height: 5em;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
</style>