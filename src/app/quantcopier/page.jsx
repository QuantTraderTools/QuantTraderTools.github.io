import ProductPage from '@/components/Products/ProductPage';

import { 
  Laptop, 
  Radio, 
  Target, 
  LineChart, 
  Shuffle, 
  Bell,
  Download,
  Settings,
  PlayCircle,
  MessageSquare,
  BellRing,
  CheckCircle
} from 'lucide-react';

export default function QuantCopierPage() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' }
  ];

  const pageData = {
    navItems,
    title: (
      <span className="font-serif">
        <span className="font-extralight">Quant</span>
        <span className="font-medium">Copier</span>
      </span>
    ),
    heroDescription: "Our TradeCopier software works both with discord and telegram signals and offers simple, yet comprehensive range of features designed to streamline your trading automation experience and maximize profitability.",
    features: [
      {
        icon: <Laptop className="w-8 h-8 text-primary" />,
        title: "Ease of Setup",
        description: "The QuantCopier app offers a user-friendly interface, eliminating the need for installation or configuration of Expert Advisors (EAs), simplifying initial setup and usage."
      },
      {
        icon: <Radio className="w-8 h-8 text-primary" />,
        title: "Advanced Signal Parsing",
        description: "The app uses a sophisticated parsing algorithm to accurately interpret market signals across forex, indices, and commodities, enhancing trading responsiveness."
      },
      {
        icon: <Target className="w-8 h-8 text-primary" />,
        title: "Multiple Take Profits",
        description: "The app supports creating multiple positions for each take-profit level (up to TP4), allowing traders to manage risk and capitalize on trades by tailoring strategies to varying profit goals."
      },
      {
        icon: <LineChart className="w-8 h-8 text-primary" />,
        title: "Signal Modifications",
        description: "Automatic updates to trading signals, like stop-loss or take-profit adjustments, are seamlessly integrated into corresponding MT5 positions, maintaining alignment with market conditions."
      },
      {
        icon: <Shuffle className="w-8 h-8 text-primary" />,
        title: "Entry Randomization",
        description: "To avoid detection by prop firms, the app randomly adjusts entry prices and lot sizes, ensuring compliance and maintaining trading eligibility when utilizing popular signals."
      },
      {
        icon: <Bell className="w-8 h-8 text-primary" />,
        title: "Real-time Telegram Alerts",
        description: "Instant alerts on a private Telegram channel cover all trading activities: new orders, position closures, and stop-loss adjustments, enabling swift decisions."
      }
    ],
    howItWorks: [
      {
        icon: <Download className="w-8 h-8 text-primary" />,
        number: "01",
        title: "Purchase and Installation Guide",
        description: "After purchasing the Quant Copier, you'll receive a comprehensive guide detailing every step to get started."
      },
      {
        icon: <Settings className="w-8 h-8 text-primary" />,
        number: "02",
        title: "Enable AlgoTrading in MT5",
        description: "Begin by enabling AlgoTrading in your MetaTrader 5 (MT5) platform. This allows the Quant Copier to execute trades on your behalf."
      },
      {
        icon: <PlayCircle className="w-8 h-8 text-primary" />,
        number: "03",
        title: "Launch the QuantCopier.exe",
        description: "Simply run the QuantCopier.exe file to start the software. No need to install any Expert Advisors (EAs) in your MT5 platform."
      },
      {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        number: "04",
        title: "Configure Telegram Credentials",
        description: "Enter your Telegram credentials and specify the signal channels you want to monitor. This allows the Quant Copier to receive signals from your preferred Telegram signal providers."
      },
      {
        icon: <BellRing className="w-8 h-8 text-primary" />,
        number: "05",
        title: "Set Up Notifications Channel",
        description: "Configure the Notifications channel to receive alerts and notifications about important MT5 events, keeping you informed at all times."
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        number: "06",
        title: "Enjoy Automated Trading",
        description: "Once configured, sit back and relax as the Quant Copier automatically executes and manages signals received from your subscribed Telegram signal providers."
      }
    ],
    pricingTiers: {
      telegram: [
        {
          name: "Monthly",
          price: "10",
          period: "per month",
          features: [
            "License for 1 MT5 account",
            "For 1 month",
            "Telegram Only"
          ],
          isPopular: false,
          planId: "monthly_telegram"
        },
        {
          name: "6 Months",
          price: "50",
          period: "for 6 months",
          features: [
            "Licenses for 2 MT5 accounts",
            "For 6 months",
            "Telegram Only"
          ],
          isPopular: false,
          planId: "half_month"
        },
        {
          name: "Annual",
          price: "100",
          period: "per year",
          features: [
            "Licenses for 2 MT5 accounts",
            "For 12 months",
            "Telegram Only"
          ],
          isPopular: false,
          planId: "yearly"
        },
        {
          name: "Lifetime",
          price: "200",
          period: "one-time payment",
          features: [
            "Licenses for 2 MT5 accounts",
            "For a lifetime of service",
            "Telegram Only"
          ],
          isPopular: true,
          planId: "lifetime"
        }
      ],
      discord: [
        {
          name: "Monthly",
          price: "10",
          period: "per month",
          features: [
            "License for 1 MT5 account",
            "For 1 month",
            "Discord Only"
          ],
          isPopular: false,
          planId: "monthly_discord"
        },
        {
          name: "6 Months",
          price: "50",
          period: "for 6 months",
          features: [
            "Licenses for 2 MT5 accounts",
            "For 6 months",
            "Discord Only"
          ],
          isPopular: false,
          planId: "half_month"
        },
        {
          name: "Annual",
          price: "100",
          period: "per year",
          features: [
            "Licenses for 2 MT5 accounts",
            "For 12 months",
            "Discord Only"
          ],
          isPopular: false,
          planId: "yearly"
        },
        {
          name: "Lifetime",
          price: "200",
          period: "one-time payment",
          features: [
            "Licenses for 2 MT5 accounts",
            "For a lifetime of service",
            "Discord Only"
          ],
          isPopular: true,
          planId: "lifetime"
        }
      ],
      combo: [
        {
          name: "Monthly",
          price: "20",
          period: "per month",
          features: [
            "Licenses for 2 MT5 accounts",
            "For 1 month",
            "Telegram + Discord"
          ],
          isPopular: false,
          planId: "monthly_combo"
        },
        {
          name: "6 Months",
          price: "100",
          period: "for 6 months",
          features: [
            "Licenses for 2 MT5 accounts",
            "For 6 months",
            "Telegram + Discord"
          ],
          isPopular: false,
          planId: "half_month"
        },
        {
          name: "Annual",
          price: "180",
          period: "per year",
          features: [
            "Licenses for 2 MT5 accounts",
            "For 12 months",
            "Telegram + Discord"
          ],
          isPopular: false,
          planId: "yearly"
        },
        {
          name: "Lifetime",
          price: "360",
          period: "one-time payment",
          features: [
            "Licenses for 2 MT5 accounts",
            "For a lifetime of service",
            "Telegram + Discord"
          ],
          isPopular: true,
          planId: "lifetime"
        }
      ]
    },
    faqs: [
      {
        question: "Are my Telegram and discord credentials safe?",
        answer: "Your telegram credentials like API ID and API Hash and Discord self tokens, are not stored in any of our servers, you will only use it locally on the machine where you are going to run the QuantCopier software."
      },
      {
        question: "How are my MetaTrader5 credentials secured?",
        answer: "Only your MT5 Account Nr is stored in our secured DB server for the purpose of issuing a license key to an MT5 account. Your MT5 account password is manually entered by you in the local config file of the machine where MT5 software is run. Your MT5 credentials are only used locally by the QuantCopier software to login into your MT5 account and execute trade signals"
      },
      {
        question: "Can I switch broker account?",
        answer: "Yes. You can switch MT4 | MT5 | cTrader | DXTrade | TradeLocker accounts anytime without any extra costs."
      },
      {
        question: "What Operating Systems are supported?",
        answer: "QuantCopier MT5 requires Windows operating system. For Mac OS users, an alternative such as a VPS running Windows OS is required."
      },
      {
        question: "Do I need a VPS?",
        answer: "Using a VPS is recommended since it allows you to be completely hands-free in your automated trading. A VPS is a virtual computer that runs 24/7 in the cloud."
      },
      {
        question: "After paying, how do I receive the software?",
        answer: "After paying, you will receive an email with login and activation instructions. After activating, you will receive your license code, the download link to the software and the installation and user guides."
      },
      {
        question: "How many channels can I copy?",
        answer: "There is no limit to the amount of signal channels you can copy trades from."
      }
    ],
    sectionTitles: {
      features: "Features Of Our TradeCopier Software",
      howItWorks: "Automated Signal Execution with Quant Copier",
      pricing: "Affordable pricing plans"
    },
    sectionDescriptions: {
      pricing: "Access Quant Copier's TradeCopier service with flexible plans for enhanced trading success with Telegram and/or Discord, from monthly to lifetime subscriptions, tailored to your goals."
    }
  };


  return (
    <>
      <ProductPage {...pageData} />
    </>
  );
} 