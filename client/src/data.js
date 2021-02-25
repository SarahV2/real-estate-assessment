/* 
data related to the property ownership transfer process,
which would be imported in the 'ProcessInfo' component
*/
import bankIcon from './assets/bank.png';
import requestIcon from './assets/add.png';
import reqAcceptIcon from './assets/requests-agree.png';
import moneyIcon from './assets/money.png';
import transferIcon from './assets/keys.png';
import dealIcon from './assets/deal.png';
export const process = [
  {
    id: 6,
    imgSrc: dealIcon,
    description: 'انتهاء الطلب \nشكرًا لاستخدام الخدمة',
  },
  {
    id: 5,
    imgSrc: transferIcon,
    description: 'الوزارة تقوم بنقل الملكية للمشتري، والمال للبائع',
  },

  {
    id: 4,
    imgSrc: moneyIcon,
    description: 'يقوم المشتري بتحويل المال إلى الحساب',
  },
  {
    id: 3,
    imgSrc: bankIcon,
    description: 'الوزارة تقوم بإنشاء حساب بنكي وسيط',
  },

  {
    id: 2,
    imgSrc: reqAcceptIcon,
    description: 'المشتري يقبل الطلب من قائمة الطلبات',
  },

  {
    id: 1,
    imgSrc: requestIcon,
    description: 'البائع (المالك) يقوم باختيار صك',
  },
];
