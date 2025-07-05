class NotificationChannel {
    send(message) {
      throw new Error("send() method must be implemented");
    }
  }

  
  class EmailNotification extends NotificationChannel {
    constructor(emailAddress) {
      super();
      if (!emailAddress) throw new Error("Email address required");
      this.emailAddress = emailAddress;
    }
  
    send(message) {
      console.log(`Sending EMAIL to ${this.emailAddress}: ${message}`);
    }
  }
  
  class SMSNotification extends NotificationChannel {
    constructor(phoneNumber) {
      super();
      if (!phoneNumber) throw new Error("Phone number required");
      this.phoneNumber = phoneNumber;
    }
  
    send(message) {
      console.log(`Sending SMS to ${this.phoneNumber}: ${message}`);
    }
  }
  
  class TelegramNotification extends NotificationChannel {
    constructor(telegramId) {
      super();
      if (!telegramId) throw new Error("Telegram ID required");
      this.telegramId = telegramId;
    }
  
    send(message) {
      console.log(`Sending TELEGRAM to ${this.telegramId}: ${message}`);
    }
  }
  
  const emailNotifier = new EmailNotification('nexus@email.com');
emailNotifier.send('Hello!');

const smsNotifier = new SMSNotification('1234567890');
smsNotifier.send('Hi!');

const telegramNotifier = new TelegramNotification('telegram_user_42');
telegramNotifier.send('Yo!');
