<template>
	<div v-loading.fullscreen="fullscreenLoading" class="footer">
		<el-card class="reging">
			<template #header>绑定账号</template>
			<el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="auto" class="demo-ruleForm">
				<el-form-item label="机器码:" prop="mac">
					<el-input v-model="ruleForm.mac" autocomplete="off" />
				</el-form-item>
				<el-form-item label="推荐ID:">
					<el-input v-model="ruleForm.superiorid" type="password" autocomplete="off" />
				</el-form-item>
			</el-form>
			<el-alert title="机器码请点击软件右上角图标复制" type="success" :closable="false" />
			<el-alert title="填写推荐码可获得5天VIP" type="error" :closable="false" />
			<el-button type="danger">绑定机器码</el-button>
		</el-card>
		<el-card class="reging">
			<template #header>用户信息</template>
			<div>机器码:XXXXXXXXXXX</div>
			<div>用户等级:</div>
			<div>推荐码:</div>
			<el-alert title="下级填写你的推荐码,你可自动获得10天VIP,同时下级也可以获得5天VIP等级" type="success" :closable="false" />
			<el-button type="danger">直接购买VIP</el-button>
		</el-card>
	</div>
</template>
<script setup>
	import { ref, reactive } from "vue";
	import store from "./../store";
	import { axiosInstance } from "@/api/post";
	import eruda from "eruda";
	const rig = ref(false);
	const ruleForm = reactive({
		mac: "",
		superiorid: "",
	});
	const rules = reactive({
		mac: [
			{ required: true, message: "请输入机器码", trigger: "blur" },
			{
				pattern: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
				message: "机器码格式不正确",
				trigger: "blur",
			},
		],
	});

	const name = ref(null);
	const fullscreenLoading = ref(false);
	// 先查询  有没有绑定 只返回true或者false

	const user = async () => {
		try {
			// 打开调试
			eruda.init();

			fullscreenLoading.value = true;
			let urlEncodedString = window.Telegram.WebApp.initData;
			window.Telegram.WebApp.setHeaderColor("#6a4c41");
			window.Telegram.WebApp.setBackgroundColor("#6a4c41");
			const decodedString = decodeURIComponent(urlEncodedString);

			const params = Object.fromEntries(new URLSearchParams(decodedString));
			params.user = JSON.parse(params.user);
			let response = await axiosInstance.post("topup", { tgid: params.user.id });

			//

			// 提取 JSON 部分
			// this.name = params.user.first_name + params.user.last_name;
			fullscreenLoading.value = false;
			window.Telegram.WebApp.ready();

			// 注册
		} catch (error) {
			console.log(error);
		}
	};

	// 进来就先获取用户信息 上传TGid 即可  获取不到 就让绑定账户
</script>
<style lang="scss">
	.footer {
		display: flex;
		width: 100vw;
		height: 100vh;
		align-items: center; /* 垂直居中 */
		justify-items: center;
		justify-content: center;
		.reging {
			width: 80vw;
			.el-card__body {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}
			.el-card__header {
				text-align: center;
				padding: 10px !important;
				font-weight: bold;
				color: #555555b0;
			}
			.demo-ruleForm .el-form-item:last-child {
				margin-bottom: 0px;
			}
		}
		/* opacity: 0.3; */
	}
</style>
<!-- 绑定页面    -->
<!-- 如果已经绑定就显示他的推广代码 -->

<!-- 前端上传字符串  给后端 后端验证   然后根据权限做出判断 -->
