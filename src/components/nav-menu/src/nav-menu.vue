<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollpase" class="title">Zohnny</span>
    </div>
    <el-menu
      :default-active="defaultActive"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isCollpase"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handelMenuItemClick(subItem)"
              >
                <!-- <el-icon><location /></el-icon> -->
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { Location } from '@element-plus/icons-vue'

import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'

import { pathMapToMenu } from '@/utils/map-menus-to-routes'

export default defineComponent({
  components: {
    Location
  },
  props: {
    isCollpase: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // vuex
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    // 路由
    const router = useRouter()
    // 当前路径
    const route = useRoute()
    const currentPath = route.path

    // 当前路径获取当前的menu对象
    const menu = pathMapToMenu(userMenus.value, currentPath)
    // 响应式菜单
    const defaultActive = ref(menu.id + '')

    // 事件处理
    const handelMenuItemClick = (menuItem: any) => {
      router.push({
        path: menuItem.url ?? 'not-found'
      })
    }

    return {
      userMenus,
      handelMenuItemClick,
      defaultActive
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;

    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
    }
  }

  :v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
