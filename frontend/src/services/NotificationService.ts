import {toast} from 'react-toastify'
class NotificationService {
  private orderAudio: HTMLAudioElement;
  private isAudioUnlocked = false;

  constructor() {
    this.orderAudio = new Audio("/sounds/sound.mp3");
    this.orderAudio.preload = "auto";
  }

  unlockAudio() {
    if (this.isAudioUnlocked) return;

    this.orderAudio
      .play()
      .then(() => {
        this.orderAudio.pause();
        this.orderAudio.currentTime = 0;

        this.isAudioUnlocked = true;

        console.log("✅ Audio unlocked");
      })
      .catch(() => {
        console.log("Audio still locked");
      });
  }

  private playOrderSound() {
    if (!this.isAudioUnlocked) return;

    this.orderAudio.pause();
    this.orderAudio.currentTime = 0;

    this.orderAudio.play().catch(console.error);
  }

  private showOrderToast(customerName?: string) {
    toast.success(
      customerName
        ? `🛒 New order from ${customerName}`
        : "🛒 New order received!"
    );
  }

  notifyNewOrder(customerName?: string) {
    this.playOrderSound();
    this.showOrderToast(customerName);
  }
}

export const notificationService = new NotificationService();