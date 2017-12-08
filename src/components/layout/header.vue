<template>
	<div class="header">
		<div class="nav-bar">
			<div class="nav-container">
				<div class="navbar-head">
					<img src="https://cdn.surmon.me/images/logo.svg">
					<span>Talk is cheap. Show me the code</span>
				</div>
				<div class="navbar-player">
					<div class="song-panel">
						<button class="song-btn prev-song">
							<i class="glyphicon glyphicon-backward"></i>
						</button>
						<button class="song-btn toggle-play">
							<i class="glyphicon glyphicon-play"></i>
						</button>
						<button class="song-btn next-song">
							<i class="glyphicon glyphicon-forward"></i>
						</button>
						<button class="song-btn volume-song">
							<i class="glyphicon glyphicon-volume-up"></i>
						</button>
					</div>
					<div class="current-song">
						<span>天空的轨迹</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'header',
		data () {
			return {

			}
		}
	}
</script>
<style type="text/css">
	.header{
		height: 74px;
	}
	.nav-bar {
		background-color: rgba(255,255,255,0.6);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		height: 74px;
	}
	.nav-container{
		width: 86%;
		margin: 0 auto;
	}
	.nav-container:after{
		content: "";
		display: block;
		height: 0px;
		clear: both;
	}
	.navbar-head{
		color: #3DA3F5;
		line-height: 74px;
		float: left;
	}
	.navbar-head img{
		width: 160px;
		height: 26px;
		margin-right: 70px;
	}
	.navbar-player{
		min-width: 220px;
		opacity: .2;
		float: right;
		border: 0;
		padding-top: 12px;
	}
	.navbar-player:hover {
		opacity: 0.6;
	}
	.song-panel{

	}
	.song-btn{
		border: 0;
		outline: none; 
		background-color: rgba(255,255,255,0.2);
	}
	.current-song{

	}
</style>