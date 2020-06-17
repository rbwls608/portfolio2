<template>
  <main class='find'>
    <section class='find__options'>
      <div class='find__option'>
        <i class='fas fa-address-book' aria-hidden='true'></i>
        <span class='find__option-title'>Find</span>
      </div>
      <div class='find__option'>
        <i class='fas fa-qrcode' aria-hidden='true'></i>
        <span class='find__option-title'>QR Code</span>
      </div>
      <div class='find__option'>
        <i class='fas fa-mobile-alt' aria-hidden='true'></i>
        <span class='find__option-title'>Shake</span>
      </div>
      <div class='find__option'>
        <i class='far fa-envelope' aria-hidden='true'></i>
        <span class='find__option-title'>Invite via SMS</span>
      </div>
    </section>
    <section class='find__recommended'>
      <header>
        <h6 class='recommended__title'>Recommended Friends</h6>
      </header>
      <div class='recommended__none'>
        <span class='recommended__text'>You have no recommended friends.</span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'find',
  data() {
    return {
      title: 'find'
    }
  },
  mounted() {
    // this.$parent.menu = 'Edit'
    // this.$parent.title = 'Find'
    // this.$parent.num = ''
    // this.$parent.icon = ''
    this.$parent.$emit('changeData', 'Edit', 'Find', '', '')
  }
}
</script>

<style lang='scss' src='../styles/find.scss'></style>
