
import boxIcon from '../../assets/Svg/Duotone/Package.svg';
import CreditIcon from '../../assets/Svg/Duotone/CreditCard.svg';
import TrophyIcon from '../../assets/Svg/Duotone/Trophy.svg';
import HeadphoneIcon from '../../assets/Svg/Duotone/Headphones.svg';

const SecondaryBanner = () => {
    const bannerItems = [
        {
            icon: boxIcon,
            title: "Fasted Delivery",
            description: "Delivery in 24/H",
        },
        {
            icon: TrophyIcon,
            title: "24 Hours Return",
            description: "100% money-back guarantee",
        },
        {
            icon: CreditIcon,
            title: "Secure Payment",
            description: "Your money is safe",
        },
        {
            icon: HeadphoneIcon,
            title: "Support 24/7",
            description: "Live contact/message",
        },
    ];

    return (
        <div className="border border-[#E4E7E9] my-6 grid grid-cols-2 md:grid-cols-4 gap-3 lg:py-6 md:py-3 py-2 pl-3 md:pl-0  ">
            {bannerItems.map((item, index) => (
                <div
                    key={index}
                    className={`flex w-full md:justify-center  items-center ${index !== bannerItems.length - 1 ? 'border-r' : ''} gap-4 border-[#E4E7E9]`}
                >
                    
                    <img className="w-6 md:w-6 lg:w-8" src={item.icon} alt={item.title} />
                    <div className="lg:gap-1 flex flex-col">
                        <span className="font-medium text-[#191C1F] text-[8px] sm:text-sm md:text-[12px] lg:text-[14px] uppercase tracking-wider">
                            {item.title}
                        </span>
                        <p className="text-[#5F6C72] text-[7px] sm:text-sm md:text-[10px] lg:text-[14px]">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SecondaryBanner;
