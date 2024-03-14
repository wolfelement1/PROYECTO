import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import numeral from 'numeral'

interface CardProps{
    title: string,
    amount: number,
    percentage: number,
    iconName: string,
};

const Card: React.FC<CardProps> = ({title, amount, percentage, iconName}) => {

    const currentFormat = numeral(amount).format('$ 0,0[.]00');
    const colorPercentage = percentage > 0 ? 'text-green-400' : 'text-red-400';
    const iconPercentage = percentage > 0 ? 'octicon:arrow-up-16' : 'octicon:arrow-down-16';

    return (
        <div className="rounded-lg border-2 border-gray-100 min-w-72 mx-auto grid grid-row-2">
            <div className="p-4 flex justify-between">
                <div>
                    <h4 className="font-bold text-gray-800 pb-2"> {title} </h4>
                    <span className="font-bold text-gray-800 text-3xl"> {currentFormat} </span>
                </div>
                <div>
                    <button className="rounded-lg bg-gray-200 p-2">
                    <Icon icon={iconName} width={20} height={20} className="text-gray-800"/>
                    </button>
                </div>
            </div>    
            <div className="border-t-2 border-gray-100 bg-gray-50 flex justify-between p-4 text-sm">
                <div className="flex items-center">
                    <span className={`${colorPercentage} flex items-center mr-2 font-semibold`}><Icon icon={`${iconPercentage}`} className="mr-1"/> {percentage}% </span>
                    <span className=" text-cyan-900">last month</span>
                </div>
                <div>
                    {/* review */}
                    <span className="text-gray-900 font-semibold">View More</span>
                </div>
            </div>
        </div>
    )
}

export default Card;



