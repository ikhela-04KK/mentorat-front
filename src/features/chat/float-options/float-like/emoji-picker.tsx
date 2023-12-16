import React, { useState } from 'react';
import Picker, { EmojiClickData } from 'emoji-picker-react';

const EmojiPicker = () => {
    const [chosenEmoji, setChosenEmoji] = useState<EmojiClickData>();

    const onEmojiClick = (emojiObject:EmojiClickData,event:MouseEvent, ) => {
        console.log("what append");
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            {chosenEmoji ? (
                <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default EmojiPicker;