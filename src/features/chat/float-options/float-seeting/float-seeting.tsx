import Image from "next/image"; 

const file_svg = [
    {
        source:"copy",
        size:18
    }, 
    {
        source:"edit",
        size:18
    }, 
    {
        source:"trash",
        size:18
    }
]

const FloatSeeting:React.FC = () => {
    return (
        <>
            <div className="cursor-pointer absolute right-[-3px] w-[106px] h-[38px] bg-slate-900 rounded-lg shadow border border-gray-800 inline-flex items-center content-center justify-center">
                {file_svg.map((file,idx) =>(
                <div key={idx} className="w-[30px] h-[30px] pl-2 pr-2 pt-2 pb-2">
                    <Image src={`/${file.source}.svg`} width={file.size} height={file.size} alt={file.source}/>
                </div>
                ))}
            </div>
        </>
    )
}
export default FloatSeeting