
// import {Socket, io} from "socket.io-client"; 

// const socket:Socket = io("http://localhost:8000/chats",{
//     extraHeaders: {
//        "Authorization": "1234" // ignored
//     },
//     autoConnect:false
// });
// console.log(socket)

// // capture tout les évènements 
// export default socket; 

// J'attend au montage de l'élément avant d'émettre la connection au socket 
    // useEffect(() => {
    //     if (session?.backendToken.accessToken) {
    //       const newSocket: Socket = io('http://localhost:8000/chats', {
    //         extraHeaders: {
    //           Authorization: `Bearer ${session?.backendToken.accessToken}`
    //         },
    //         autoConnect: false
    //       });
    //     //   mettre à jour l'état du scoket 
    //       setSocket(newSocket);
    //       return () => {
    //         newSocket.disconnect();
    //       };
    //     }
    //   }, [session?.backendToken.accessToken]);
    //   // Afficher la liste de utilisateurs connectés
    //   useEffect(() => {
    //     if (socket) {
    //       socket.connect();
    //       // Ajoutez ici la gestion des événements du socket, par exemple :
    //       socket.on('users', (data) => {
    //         log.error('Message from server:', data);
    //       });
    //       // return () => {
    //       //   socket.disconnect();
    //       // };
    //     }
    //   }, [socket]);

      // useEffect(() => {
      //   socket?.on('private_message', (args) => {
      //       // Mettre à jour la liste des messages
      //   // Update the messages only if the username is not present
    
      //     console.log("Entrer here")
      //     setMessages((prevMessages) => {
      //       if(!prevMessages.some(message => message.username === args.username)){
      //         return  [...prevMessages, args]
      //       }
      //       return prevMessages
      //     });
      //     // setMessages((prevMessages) => [...prevMessages, args]);
      //   });
      // }, [socket]);
      // console.log("entrer here")
  //  ;
    // }