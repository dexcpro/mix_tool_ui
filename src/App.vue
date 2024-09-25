<template>
	<router-view />
</template>
<style>
	html,
	body {
		box-sizing: border-box;
		font-size: calc(100vw / 3.75);
		margin: 0; /* 移除外边距 */
		padding: 0; /* 移除内边距 */
		overflow-x: hidden;
		overflow: hidden;
		min-height: 100%;
		height: auto;
	}
	body {
		position: relative;
		font-size: 0.16rem;
		margin: 0; /* 移除外边距 */
		padding: 0; /* 移除内边距 */
		border: none; /* 移除边框 */
		background: #fff;
		touch-action: none !important;
		user-select: none;
	}
	* {
		box-sizing: border-box;
		touch-action: none !important;
	}
	:root {
		--wui-color-accent-100: #ffffff31 !important;
		--wui-color-accent-090: none !important;
		--wui-color-fg-200: #ffffff !important;
		--w3m-accent: none !important;
		--tg-theme-header-bg-color: #ff0303 !important;
	}
	a {
		text-decoration: none; /* 去除下划线 */
		color: inherit; /* 继承父元素的颜色 */
		/* 如果需要，可以添加其他样式来去除背景、边框等 */
	}
	.el-button--primary {
		--el-button-text-color: #ffffffa6 !;
		--el-button-bg-color: none !important;
		--el-button-border-color: none !important;
		--el-button-outline-color: none !important;
		--el-button-active-color: #fff !important;
		--el-button-hover-text-color: #f0e9e9 !important;
		--el-button-hover-link-text-color: #fff !important;
		--el-button-hover-bg-color: none !important;
		--el-button-hover-border-color: #fff !important;
		--el-button-active-bg-color: none !important;
		--el-button-active-border-color: none !important;
		--el-button-disabled-text-color: none !important;
		--el-button-disabled-bg-color: none !important;
		--el-button-disabled-border-color: none !important;
	}
</style>
