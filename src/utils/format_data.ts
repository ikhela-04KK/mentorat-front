import { friendMessage } from "@/features/chat/list-streamers";

export function regrouperMessagesUtilisateurs(data: { lastMessages: any[]; chats: any[]; }) {
    const result: friendMessage[] = [];
    
    // Récupérer les informations de l'utilisateur faisant la requête
    // const requesterUserId = data.lastMessages[0][0].user_id;
    // const requesterUser = data.chats.reduce((acc, chat) => {
    //     const user = chat.users.find((user: { id: any; }) => user.id === requesterUserId);
    //     return user ? user : acc;
    // }, {});

    // Parcourir les messages
    data.lastMessages.forEach(messages => {
        const message = messages[0];
        const chatId = message.chat_id;

        // Trouver l'utilisateur dans le chat
        const usersInChat = data.chats.find(chat => chat.id === chatId).users;
        const userInChat = usersInChat.find((user: { id: any; }) => user.id === message.user_id);

        // Créer un objet avec les informations demandées
        const userInfo = {
            id: message.id,
            username: userInChat.name,
            message: message.content,
            location: userInChat.location,
            role: userInChat.role,
            source: userInChat.avatar,
            certified:false,
            online:false
        };
        result.push(userInfo)

        // Ajouter l'objet au résultat, mais si l'id est celui du demandeur, le mettre en première position
        // if (message.user_id === requesterUserId) {
        //     result.unshift(userInfo);
        // } else {
        //     result.push(userInfo);
        // }
    });

    return result;
}