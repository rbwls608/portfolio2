<template>
  <main class='chats'>
    <div class='search-bar'>
      <i class='fa fa-search' aria-hidden='true'></i>
      <input type='text' placeholder='Find friends, chats, Plus Friends'>
    </div>
    <ul class='chats__list'>
      <chat-list v-for='(li, index) in chatlist' :li='li' :key='index' ></chat-list>
    </ul>
  </main>
</template>

<script>
import ChatList from '../components/ChatList.vue';
import chatlist from '../data/chats.js';

export default {
  name: 'chats',
  
  data() {
    return {
      title: 'chats', 
      chatlist
    }
  },
  mounted() {
    // this.$parent.menu = 'Edit'
    // this.$parent.title = 'Chats'
    // this.$parent.num = ''
    // this.$parent.icon = ''
    this.$parent.$emit('changeData', 'Edit', 'Chats', '', '')
  },
  components: {
  'chat-list' : ChatList
  }
}
</script>

<style lang='scss' src='../styles/chats.scss'></style>
