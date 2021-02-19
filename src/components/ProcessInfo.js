import React from 'react';
import StageDetails from './StageDetails';
const process = [
    {
        id: 1,
        imgSrc: require('../assets/bank.png'),
        description: 'البائع (المالك) يقوم باختيار صك',
    },
    {
        id: 2,
        imgSrc: require('../assets/bank.png'),
        description: 'المشتري يقبل الطلب من قائمة الطلبات',
    },
    {
        id: 3,
        imgSrc: require('../assets/bank.png'),
        description: 'الوزارة تقوم بإنشاء حساب بنكي وسيط',
    },
    {
        id: 4,
        imgSrc: require('../assets/bank.png'),
        description: 'يقوم المشتري بتحويل المال إلى الحساب',
    },
    {
        id: 5,
        imgSrc: require('../assets/bank.png'),
        description: 'الوزارة تقوم بنقل الملكية للمشتري، والمال للبائع',
    },
    {
        id: 6,
        imgSrc: require('../assets/bank.png'),
        description: 'انتهاء الطلب شكرًا لاستخدام الخدمة',
    },
];
export default function ProcessInfo() {
    const list = process.map((step, index) => {
        if (index !== process.length - 1) {
            return (
                <div className='detailedStage'>
                    <StageDetails key={index} data={step} />
                    <div className='splitter'>
                        <div className='line'></div>
                    </div>
                </div>
            );
        } else {
            return (<div className='detailedStage'><StageDetails key={index} data={step} /></div>);
        }
    });
    return <section className='content' id='processInfo'>{list}</section>;
}