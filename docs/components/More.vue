<template>
  <main class='more'>
    <header class='more__header'>
      <div class='more-header__column'>
        <img src='../assets/kj.jpg' alt>
        <div class='more-header__info'>
          <h3 class='more-header__title'>정규진</h3>
          <span class='more-header__subtitle'>rbwls9568@naver.com</span>
        </div>
      </div>
      <i class='far fa-comment' aria-hidden='true'></i>
    </header>
    <section class='more__options'>
      <div class='more-option'>
        <i class='far fa-smile-wink' aria-hidden='true'></i>
        <span class='more-option__title'>Emotions</span>
      </div>
      <div class='more-option'>
        <i class='fas fa-paint-brush' aria-hidden='true'></i>
        <span class='more-option__title'>Themes</span>
      </div>
      <div class='more-option'>
        <i class='fa fa-hand-peace-o' aria-hidden='true'></i>
        <span class='more-option__title'>Plus Friend</span>
      </div>
      <div class='more-option'>
        <i class='fa fa-user-circle-o' aria-hidden='true'></i>
        <span class='more-option__title'>Account</span>
      </div>
    </section>
    <section class='plus-friends'>
      <header class='plus-friends__header'>
        <h2>Plus Friends</h2>
        <span>
          <i class='fas fa-info-circle' aria-hidden='true'></i>Learn More
        </span>
      </header>
      <div class='plus-friends__items'>
        <div class='plus-friends__item'>
          <i class='fas fa-utensils' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>Order</span>
        </div>
        <div class='plus-friends__item'>
          <i class='fas fa-home' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>Store</span>
        </div>
        <div class='plus-friends__item'>
          <i class='fas fa-tv' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>TVChannel/Radio</span>
        </div>
        <div class='plus-friends__item'>
          <i class='fas fa-pencil-alt' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>Creation</span>
        </div>
        <div class='plus-friends__item'>
          <i class='fas fa-graduation-cap' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>Education</span>
        </div>
        <div class='plus-friends__item'>
          <i class='fas fa-landmark' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>Politics/Society</span>
        </div>
        <div class='plus-friends__item'>
          <i class='fas fa-won-sign' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>Finance</span>
        </div>
        <div class='plus-friends__item'>
          <i class='fas fa-camera-movie' aria-hidden='true'></i>
          <span class='plus-friends__item-title'>Movies/Music</span>
        </div>
      </div>
    </section>
    <section class='more__links'>
      <div class='more__option'>
        <img src='../assets/kakaostory.png' class='more__options-image' alt>
        <span class='more__options-title'>Kakao Story</span>
      </div>
      <div class='more__option'>
        <img src='../assets/path.png' class='more__options-image' alt>
        <span class='more__options-title'>Path</span>
      </div>
      <div class='more__option'>
        <img src='../assets/kakaofriends.png' class='more__options-image' alt>
        <span class='more__options-title'>Kakao friends</span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'more',
  data() {
    return {
      title: 'more'
    }
  },
  mounted() {
    // this.$parent.menu = '';
    // this.$parent.title = 'More';
    // this.$parent.num = '';
    // this.$parent.icon = 'fas fa-cog';
    this.$parent.$emit('changeData', '', 'More', '', 'fas fa-cog')
  }
}
</script>

<style lang='scss' src='../styles/more.scss'></style>
