const upvoteApp = {
    data() {
        return {
            submissions: seed.submissions
        }
    }
};

Vue.createApp(upvoteApp).mount('#app');