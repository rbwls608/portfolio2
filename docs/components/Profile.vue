<template>
  <main class='profile'>
    <header class='profile__header'>
      <div class='profile__header-container'>
        <img src='../assets/kj.jpg' alt>
        <h3 class='profile__header-title'>정규진</h3>
      </div>
    </header>
    <div class='profile__container'>
      <a href='#' class='profile__email'>rbwls9568@gmail.com</a>
      <div class='profile__actions'>
        <div class='profile__action'>
          <span class='profile__action-circle'>
            <i class='fa fa-comment fa-lg' aria-hidden='true'></i>
          </span>
          <span class='profile__action-title'>My Chatroom</span>
        </div>
        <div class='profile__action'>
          <span class='profile__action-circle'>
            <i class='fa fa-pencil fa-lg' aria-hidden='true'></i>
          </span>
          <span class='profile__action-title'>Edit Profile</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style lang='scss' src='../styles/profile.scss'>
</style>
