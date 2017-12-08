<template>
	<div class="aside-nav">
		<div class="nav-list">
			<ul>
				<li>
					<router-link to="/" class="item active"><i class="glyphicon glyphicon-home"></i><span></span>HOME</router-link>
				</li>
				<li>
					<router-link to="/" class="item"><i></i><span></span>CODE</router-link>
				</li>
				<li>
					<router-link to="/" class="item"><i></i><span></span>PROJECT</router-link>
				</li>
				<li>
					<router-link to="/" class="item"><i></i><span></span>THINK</router-link>
				</li>
				<li>
					<router-link to="/" class="item"><i></i><span></span>MUSIC</router-link>
				</li>
				<li>
					<router-link to="/" class="item"><i></i><span></span>ABOUT</router-link>
				</li>
				<li>
					<router-link to="/" class="item"><i></i><span></span>SERVICE</router-link>
				</li>
				<li>
					<router-link to="/" class="item"><i></i><span></span>GUESTBOOK</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'nav',
		data () {
			return {

			}
		}
	}
</script>
<style type="text/css">
	.aside-nav{
		width: 186px;
		height: 500px;
		margin-top: 20px;
		display: inline-block;
		vertical-align: top;
		margin-right: 12px;
	}
	.nav-list{
		position: fixed;
		top: 94px;
		left: 100px;
	}
	.nav-list ul {
		padding: 0;
		margin: 0;
	}
	.nav-list ul li{
		list-style: none;
	}
	.item {
		border: none;
		display: block;
		width: 186px;
		padding: 12px 16px;
		font-weight: 700;
		color: #777;
	}
	.item:hover{
		color: #3DA3F5;
		text-decoration: none;
	}
	.active{
		background-color: rgba(255, 255, 255, 0.7);
	}
</style>