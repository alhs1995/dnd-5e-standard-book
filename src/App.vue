<template>
  <div id="app">
      <b-navbar toggleable="lg" type="dark" variant="secondary" sticky>
        <b-navbar-brand to="/">AoMaple的DND資料集散地</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="規則" right class="mr-4 ml-4">
              <b-dropdown-item disabled>快速參照</b-dropdown-item>
              <b-dropdown-item disabled>選用規則,變體與雜項</b-dropdown-item>
              <b-dropdown-item disabled>雜項表格</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item disabled>玩家手冊</b-dropdown-item>
              <b-dropdown-item disabled>地下城主手冊</b-dropdown-item>
              <b-dropdown-item disabled>怪物手冊</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="我是玩家" right class="mr-4">
              <b-dropdown-item to='/Player/Class'>職業</b-dropdown-item>
              <b-dropdown-item to='/Player/Background'>背景</b-dropdown-item>
              <b-dropdown-item to='/Player/Races'>種族</b-dropdown-item>
              <b-dropdown-item to='/Player/Feats'>專長</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item disabled>屬性產生器</b-dropdown-item>
              <b-dropdown-item disabled>名字產生器</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="我是DM" right class="mr-4">
              <b-dropdown-item disabled>異教或惡魔恩惠</b-dropdown-item>
              <b-dropdown-item disabled>特殊物品</b-dropdown-item>
              <b-dropdown-item disabled>陷阱與危害</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="參考資料" right class="mr-4">
              <b-dropdown-item disabled>語言</b-dropdown-item>
              <b-dropdown-item disabled>子職業能力</b-dropdown-item>
              <b-dropdown-item disabled>恩惠與獎勵</b-dropdown-item>
              <b-dropdown-item disabled>法術</b-dropdown-item>
              <b-dropdown-item disabled>狀態與疾病</b-dropdown-item>
              <b-dropdown-item disabled>神祇</b-dropdown-item>
              <b-dropdown-item disabled>物品</b-dropdown-item>
              <b-dropdown-item disabled>動作</b-dropdown-item>
              <b-dropdown-item disabled>載具</b-dropdown-item>
              <b-dropdown-item disabled>靈能</b-dropdown-item>
              <b-dropdown-item disabled>怪物圖鑑</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="搜尋"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" variant="dark">搜尋</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  span{
    font-family: 'Courier New', Courier, monospace;
  }
}
.pointerCls{
  cursor: pointer;
}
</style>
