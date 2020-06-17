<template>
  <main class='chat'>
    <div class='date-divider'>
      <span class='date-divider__text'>Wednesday, March 27, 2020</span>
    </div>
    <div class='chat__message chat__message-from-me'>
      <span class='chat__message-time'>17:33</span>
      <div class='chat__message-center'>
        <span class='chat__message-body'>Hello!</span>
        <span class='chat__message-body left'>Hello! This is a test message.
          <br>Hello!
        </span>
        <span class='chat__message-body'>This is a test message.</span>
      </div>
    </div>
    <div class='chat__message chat__message--to-me'>
      <img src='../assets/bg.jpg' class='chat__message-avatar'>
      <div class='chat__message-center'>
        <h3 class='chat__message-username'>박보검</h3>
        <span class='chat__message-body'>And this is an answer</span>
        <span class='chat__message-body'>And this is an answer And this is an answer</span>
        <span class='chat__message-body'>And this is an answer</span>
      </div>
      <span class='chat__message-time'>20:37</span>
    </div>
  </main>
</template>

<script>
export default {
  name: 'chating'
}
</script>

<style lang='scss' src='../styles/chating.scss'></style>
