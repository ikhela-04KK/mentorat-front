
import { friendMessage } from "@/features/chat/list-streamers";

// la logique du offline online qui doit ce gerer ici 
// el problème c'est que cette fonction doi

export function regrouperMessagesUtilisateurs(data: { lastMessages: any[]; chats: any[]; }) {
    
    const result: friendMessage[] = [];
    
    // Récupérer les informations de l'utilisateur faisant la requête
    // const requesterUserId = data.lastMessages[0][0].user_id;
    // const requesterUser = data.chats.reduce((acc, chat) => {
    //     const user = chat.users.find((user: { id: any; }) => user.id === requesterUserId);
    //     return user ? user : acc;
    // }, {});

    // Parcourir les messages
    console.log("enrtrer here the last message")
    console.log(JSON.stringify(data))
    data.lastMessages.forEach(messages => {
        if (messages.length === 0) {
            return;
        }
        const message = messages[0];
        const chatId = message.chat_id;

        // Trouver l'utilisateur dans le chat
        const usersInChat = data.chats.find(chat => chat.id === chatId).users;
        const userInChat = usersInChat.find((user: { id: any; }) => user.id === message.user_id);

        // Créer un objet avec les informations demandées
        const userInfo = {
            chat_id :chatId,
            user_id:userInChat.id,
            username: userInChat.name,
            message: message.content,
            location: userInChat.location,
            role: userInChat.role,
            source: userInChat.avatar,
            certified:false,
            online:false
        };
        result.push(userInfo)
    });

    return result;
}

