function sendMessage() {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/938929084279451718/caSQ4bbwwjzHHkumuAcoX6ACDJ_-AqLspeJnxKABirsqIR_1gboGQ9G3KuEDzCigEHk6");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "My Webhook Name",
    avatar_url: "",
    content: "The message to send"
  }

  request.send(JSON.stringify(params));
}
