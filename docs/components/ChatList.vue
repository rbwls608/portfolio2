<template>
  <li class='chats__chat'>
    <router-link to='/chating'>
      <div class='chats__content'>
        <img :src='li.userImage' alt>
        <div class='chats__preview'>
          <h3 class='chats__user'>{{li.username}}</h3>
          <span class='chats__last-message'>{{li.Message}}</span>
        </div>
      </div>
      <span class='chats__time'>{{li.Time}}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'chatlist',
  props: {
    li: Object
  }
}
</script>

<style></style>

