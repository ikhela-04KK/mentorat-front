import Image from "next/image"; 


const FloatSeeting:React.FC = () => {

    return (
        <>
            <div className="w-[106px] h-[38px] bg-slate-900 rounded-lg shadow border border-gray-800 inline-flex items-center content-center justify-center">
                <div className="w-[30px] h-[30px] pl-2 pr-2 pt-2 pb-2">
                    <Image src={'/copy.svg'} width={18} height={18} alt={'copy'}/>
                </div>
                <div className="w-[30px] h-[30px]  p-2 pr-2 pt-2 pb-2">
                    <Image src={'/edit.svg'} width={18} height={18} alt={'edit'}/>
                </div>
                <div className="w-[30px] h-[30px] p-2 pr-2 pt-2 pb-2">
                    <Image src={'/trash.svg'} width={18} height={18} alt={'trash'}/>
                </div>
            </div>
        </>
    )
}
export default FloatSeeting