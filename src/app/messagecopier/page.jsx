import dynamic from 'next/dynamic';
import ProductPage from '@/components/Products/ProductPage';

import { 
  Copy,
  MessageSquare,
  Zap,
  Clock,
  Filter,
  Bell,
  Download,
  Settings,
  PlayCircle,
  MessageCircle,
  BellRing,
  CheckCircle
} from 'lucide-react';

// Dynamically import components that use browser APIs
const DynamicProductPage = dynamic(() => import('@/components/Products/ProductPage'), {
  ssr: true
});

export default function MessageCopierPage() {
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
        <span className="font-extralight">Message</span>
        <span className="font-medium">Copier</span>
      </span>
    ),
    heroDescription: "Our MessageCopier software enables seamless message synchronization between Discord and Telegram channels, offering comprehensive features for efficient content distribution and channel management.",
    features: [
      {
        icon: <Copy className="w-8 h-8 text-primary" />,
        title: "Cross-Platform Copying",
        description: "Copy messages seamlessly between Telegram channels and Discord servers, maintaining formatting and media content."
      },
      {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "Smart Message Parsing",
        description: "Intelligent parsing system that preserves message formatting, emojis, and attachments across platforms."
      },
      {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Real-time Sync",
        description: "Instant message synchronization ensures your channels stay up-to-date with zero delay in content distribution."
      },
      {
        icon: <Clock className="w-8 h-8 text-primary" />,
        title: "Scheduled Posting",
        description: "Schedule messages to be copied and posted at specific times, perfect for content planning and time zone management."
      },
      {
        icon: <Filter className="w-8 h-8 text-primary" />,
        title: "Custom Filters",
        description: "Set up filters to copy only specific types of messages or content matching your criteria."
      },
      {
        icon: <Bell className="w-8 h-8 text-primary" />,
        title: "Activity Monitoring",
        description: "Get notifications about copying activities and channel updates through your preferred platform."
      }
    ],
    howItWorks: [
      {
        icon: <Download className="w-8 h-8 text-primary" />,
        number: "01",
        title: "Download & Install",
        description: "Download the MessageCopier software and follow our simple installation guide to get started."
      },
      {
        icon: <Settings className="w-8 h-8 text-primary" />,
        number: "02",
        title: "Configure Platforms",
        description: "Set up your Discord and Telegram credentials to enable cross-platform message copying."
      },
      {
        icon: <PlayCircle className="w-8 h-8 text-primary" />,
        number: "03",
        title: "Launch MessageCopier",
        description: "Start the application and connect to your source and destination channels."
      },
      {
        icon: <MessageCircle className="w-8 h-8 text-primary" />,
        number: "04",
        title: "Set Up Channels",
        description: "Select the source channels you want to copy from and the destination channels to copy to."
      },
      {
        icon: <BellRing className="w-8 h-8 text-primary" />,
        number: "05",
        title: "Configure Notifications",
        description: "Set up notification preferences to stay informed about copying activities."
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        number: "06",
        title: "Start Copying",
        description: "Begin automated message copying between your configured channels and servers."
      }
    ],
    pricingTiers: {
      telegram: [
        {
          name: "Monthly",
          price: "10",
          period: "per month",
          features: [
            "Up to 5 channels",
            "Basic message formatting",
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
            "Up to 15 channels",
            "Advanced formatting",
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
            "Unlimited channels",
            "Priority support",
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
            "All features included",
            "Lifetime updates",
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
            "Up to 5 servers",
            "Basic message copying",
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
            "Up to 15 servers",
            "Advanced features",
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
            "Unlimited servers",
            "Priority support",
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
            "All features included",
            "Lifetime updates",
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
            "5 channels/servers each",
            "Cross-platform copying",
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
            "15 channels/servers each",
            "Advanced features",
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
            "Unlimited channels/servers",
            "Priority support",
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
            "All features included",
            "Lifetime updates",
            "Telegram + Discord"
          ],
          isPopular: true,
          planId: "lifetime"
        }
      ]
    },
    faqs: [
      {
        question: "Is my data secure?",
        answer: "Yes, your credentials and data are stored locally on your machine. We don't store any sensitive information on our servers."
      },
      {
        question: "Can I copy messages between different platforms?",
        answer: "Yes, MessageCopier supports cross-platform copying between Discord and Telegram while maintaining message formatting and media content."
      },
      {
        question: "What types of content can be copied?",
        answer: "MessageCopier supports text, images, videos, files, emojis, and formatted messages. Some platform-specific features may have limited compatibility."
      },
      {
        question: "Is there a limit to the number of channels?",
        answer: "Channel limits depend on your subscription tier. Higher tiers offer more channels and unlimited copying capabilities."
      },
      {
        question: "Can I schedule message copying?",
        answer: "Yes, you can schedule messages to be copied at specific times, perfect for managing content across different time zones."
      },
      {
        question: "Do you offer customer support?",
        answer: "Yes, we provide customer support via email and our dedicated support channel. Premium users get priority support."
      },
      {
        question: "Can I try before buying?",
        answer: "We offer a limited trial version that allows you to test basic features before purchasing a full license."
      }
    ],
    sectionTitles: {
      features: "Features Of Our MessageCopier Software",
      howItWorks: "Simple Setup Process",
      pricing: "Choose Your Plan"
    },
    sectionDescriptions: {
      pricing: "Select a plan that fits your needs. Whether you're managing a single channel or multiple servers, we have the right solution for you."
    }
  };

  return (
    <DynamicProductPage {...pageData} />
  );
} 