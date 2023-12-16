import { useState } from "react"
const file_icon = [
    {
        emoji: "👍",
    },
    {
        emoji: "👎",
    },
    {
        emoji: "😄",
    },
    {
        emoji: "😕",
    },
    {
        emoji: "❤️",
    },
]

type ReactionBarProps = {
    onSelect:(emoji:string) => void
}

type ReactionDisplayPickerProps = {
    selectedEmoji:string | null
}

export const ReactionBarEmojiPicker: React.FC<ReactionBarProps> = ({onSelect}) => {
    return (
        <>
            <div className=" w-[152px] h-[38px] bg-gray-900 rounded-full border border-gray-800 flex items-center justify-center hover:cursor-pointer">
                {file_icon.map((file, idx) => (
                    <div onClick={()=>onSelect(file.emoji)} key={idx} className="flex items-center justify-center w-[30px] h-[30px] pl-2 pr-2 pt-2 pb-2 transition-transform ease-in duration-400 transform hover:translate-y-[-5px] hover:rounded-full">
                        
                        <span>{file.emoji}</span>
                    </div>
                ))}
            </div>

        </>
    )
}


export const ReactionDisplayPicker:React.FC<ReactionDisplayPickerProps> = ({selectedEmoji}) =>{
    return (
        <div className="w-[38px] h-[38px] bg-slate-900 rounded-full shadow-xl border border-gray-800 flex items-center justify-center  hover:cursor-pointer">
        <div className="flex items-center justify-center w-[30px] h-[30px] pl-2 pr-2 pt-2 pb-2 transition-transform ease-in duration-400 transform hover:translate-y-[-5px] hover:rounded-full">

            <span>{selectedEmoji}</span>
        </div>
    </div>
    )

}

// export const App:React.FC = () =>{
//     const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

//     const handleEmojiSelect = (emoji:string) =>{
//         setSelectedEmoji(emoji)
//     }
//     return (
//         <>
//             <ReactionBarEmojiPicker onSelect={handleEmojiSelect} />
//             <ReactionDisplayPicker selectedEmoji={selectedEmoji} />
//         </>
//     )
// }