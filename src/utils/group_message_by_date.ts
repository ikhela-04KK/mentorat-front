import { ChatResult } from "@/lib/chat-type";

export const groupMessagesByDate = (messageList: ChatResult): { [key: string]: ChatResult} => {
    const grouped: { [key: string]: ChatResult } = {};
    messageList.forEach((message) => {
      const messageDate = new Date(message.created_at ? message.created_at : "");
      const today = new Date();
      const dayDiff = Math.floor(
        (today.getTime() - messageDate.getTime()) / (1000 * 3600 * 24)
      );

      let category: string;

      if (dayDiff === 0) {
        category = 'Aujourd\'hui';
      } else if (dayDiff === 1) {
        category = 'Hier';
      } else if (dayDiff === 2) {
        category = 'Avant-hier';
      } else if (dayDiff >= 3 && dayDiff <= 6) {
        const options:Intl.DateTimeFormatOptions = { weekday: 'long' };
        category = new Intl.DateTimeFormat('fr-FR', options).format(messageDate);
      } else {
        const options:Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        category = new Intl.DateTimeFormat('fr-FR', options).format(messageDate);
      }

      if (!grouped[category]) {
        grouped[category] = [];
      }

      grouped[category].push(message);
    });

    return grouped;
  };
