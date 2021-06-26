export default class NotificationManager {
  static instance
  notifications
   // Private fields.
  _notificationManagerEl = null
  _uid = 0 // A unique ID for each notification.
  _notificationDefaults

  constructor () {
    // Singleton pattern.
    if (NotificationManager.instance) return NotificationManager.instance

    NotificationManager.instance = this
    this.notifications = []
    this._notificationDefaults = {
      _uid: 0,
      _value: true,
      message: '',
      timeout: 4000,
      dismiss: true
    }
  }

  init () {
    this._notificationManagerEl = document.querySelector('.w-notification-manager')
  }

  notify (...args) {
    let notification = { ...this._notificationDefaults, _uid: this._uid++ }

    if (typeof args[0] === 'object') notification = { ...notification, ...args[0] }
    else {
      const [message, type, timeout] = args
      notification = {
        ...notification,
        message: message || '',
        [type === undefined ? 'info' : type]: true,
        timeout: timeout || timeout === 0 ? parseFloat(timeout) : 4000
      }
    }
    this.notifications.push(notification)
    if (~~notification.timeout !== 0) setTimeout(() => this.dismiss(notification._uid), notification.timeout)
  }

  dismiss (uid) {
    this.notifications = this.notifications.filter(item => item._uid !== uid)
  }
}
