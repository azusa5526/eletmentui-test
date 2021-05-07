<template>
	<div id="app">
		<el-container>
			<el-header>Header</el-header>
			<el-main>
				<div>main</div>
				<el-row>
					<el-button type="primary" class="fs-1">primary</el-button>
					<el-button type="success" class="fs-2">success</el-button>
					<el-button type="info" class="fs-3">info</el-button>
					<el-button type="warning" class="fs-4">warning</el-button>
					<el-button type="danger" class="fs-5">danger</el-button>
					<el-button>default</el-button>
				</el-row>
			</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
		<!-- <router-view /> -->
	</div>
</template>

<style lang="scss">
@import './assets/scss/all.scss';
</style>
