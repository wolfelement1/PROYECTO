import React from "react";
import Card from "../../../../components/common/Card";

const getPercentage = (current: number, last: number) : number => {
    const percentage = ((current - last) / last) * 100;
    return Number(percentage.toFixed(0));
}

const totalAmount = {
    current: 34133.40,
    last: 24133.26 
}

const totalRevenue = {
    current: 62335.40,
    last: 74133.26 
}

const totalCustomer = {
    current: 15225.40,
    last: 24442.26 
}


const SalesReport: React.FC = () => {

    return (
        <div className="flex flex-wrap justify-between">
            <Card title="Total Amount" amount={totalAmount.current} percentage={getPercentage(totalAmount.current, totalAmount.last)} iconName="bx:dollar"/>
            <Card title="Total Revenue" amount={totalRevenue.current} percentage={getPercentage(totalRevenue.current, totalRevenue.last)} iconName="majesticons:analytics-line"/>
            <Card title="Total Amount" amount={totalCustomer.current} percentage={getPercentage(totalCustomer.current, totalCustomer.last)} iconName="bx:dollar"/>
        </div>
    );
}

export default SalesReport;