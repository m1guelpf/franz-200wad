module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const notificationCounter = document.getElementsByClassName('notification-counter')[0];

    if (notificationCounter === undefined) {
      Franz.setBadge(0);
    } else {
      Franz.setBadge(parseInt(notificationCounter.innerText));
    }

  };

  Franz.loop(getMessages);
};
