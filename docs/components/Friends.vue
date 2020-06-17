<template>
  <main class='friends'>
    <div class='search-bar'>
      <i class='fa fa-search' aria-hidden='true'></i>
      <input type='text' placeholder='Find friends, chats, Plus Friends'>
    </div>
    <section class='friends__section'>
      <header class='friends__section-header'>
        <h6 class='friends__section-title'>My Profile</h6>
      </header>
      <div class='friends__section-rows'>
        <div class='friends__section-row'>
          <img src='../assets/kj.jpg' alt>
          <router-link to='/profile' class='fiends__section-name'>정규진</router-link>
        </div>
      </div>
      <header class='friends__section-header'>
        <h6 class='friends__section-title'>Favorites</h6>
      </header>
      <div class='friends__section-rows'>
        <div class='friends__section-row'>
          <img src='../assets/hj.jpg' alt>
          <a href='profile2.html'>
            <span class='fiends__section-name'>고수르</span>
          </a>
        </div>
      </div>
      <div class='friends__section-rows'>
        <div class='friends__section-row'>
          <img src='../assets/yr.jpg' alt>
          <a href='profile3.html'>
            <span class='fiends__section-name'>보스맘</span>
          </a>
        </div>
      </div>
      <div class='friends__section-rows'>
        <div class='friends__section-row'>
          <img src='../assets/yg.jpg' alt>
          <a href='profile4.html'>
            <span class='fiends__section-name'>신연갱</span>
          </a>
        </div>
      </div>
      <div class='friends__section-rows'>
        <div class='friends__section-row'>
          <img src='../assets/sw.jpg' alt>
          <a href='profile5.html'>
            <span class='fiends__section-name'>수완오빠</span>
          </a>
        </div>
      </div>
    </section>
    <section class='friends__section'>
      <header class='friends__section-header'>
        <h6 class='friends__section-title'>Friends</h6>
      </header>
      <div class='friends__section-rows'>
        <div class='friends__section-row with-tagline'>
          <div class='friends__section-column'>
            <img src='../assets/empty.jpg' alt>
            <span class='friends__section-name'>Friend Name</span>
          </div>
          <span class='friends__section-tagline'>Have a good day. See you soon.</span>
        </div>

        <div class='friends__section-row with-tagline'>
          <div class='friends__section-column'>
            <img src='../assets/empty.jpg' alt>
            <span class='friends__section-name'>Friend Name</span>
          </div>
          <span class='friends__section-tagline'>Have a good day. See you soon.</span>
        </div>

        <div class='friends__section-row with-tagline'>
          <div class='friends__section-column'>
            <img src='../assets/empty.jpg' alt>
            <span class='friends__section-name'>Friend Name</span>
          </div>
          <span class='friends__section-tagline'>Have a good day. See you soon.</span>
        </div>

        <div class='friends__section-row with-tagline'>
          <div class='friends__section-column'>
            <img src='../assets/empty.jpg' alt>
            <span class='friends__section-name'>Friend Name</span>
          </div>
          <span class='friends__section-tagline'>Have a good day. See you soon.</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'friends',
  data() {
    return {
      title: 'friends'
    }
  },
  mounted() {
    // this.$parent.menu = 'Manage'
    // this.$parent.title = 'Friends'
    // this.$parent.num = '1'
    // this.$parent.icon = 'fa fa-cog fa-lg'
    this.$parent.$emit('changeData', 'Manage', 'Friends', '1', 'fa fa-cog fa-lg')
  }
}
</script>

<style lang='scss' src='../styles/friends.scss'></style>
