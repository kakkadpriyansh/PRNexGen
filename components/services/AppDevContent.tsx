"use client"

import { FiSmartphone, FiZap, FiWifi, FiBell, FiLock, FiRefreshCw } from "react-icons/fi"
import ServiceHero from "./ServiceHero"
import ServiceFeatures from "./ServiceFeatures"
import ServiceProcess from "./ServiceProcess"
import ServiceTech from "./ServiceTech"
import ServiceFAQ from "./ServiceFAQ"
import ServiceCTA from "./ServiceCTA"

const features = [
  { icon: <FiSmartphone size={20} />, title: "Cross-Platform Apps",    desc: "Single codebase for iOS and Android using React Native or Flutter — reducing cost without sacrificing quality." },
  { icon: <FiZap size={20} />,        title: "Native Performance",     desc: "Smooth 60fps animations, native gestures, and hardware-accelerated graphics for a premium feel." },
  { icon: <FiWifi size={20} />,       title: "Offline Support",        desc: "Apps that work without internet using local storage, sync queues, and background data fetching." },
  { icon: <FiBell size={20} />,       title: "Push Notifications",     desc: "Targeted push notifications via Firebase or OneSignal to re-engage users and drive retention." },
  { icon: <FiLock size={20} />,       title: "Secure Authentication",  desc: "Biometric login, OAuth, JWT tokens, and encrypted local storage for enterprise-grade security." },
  { icon: <FiRefreshCw size={20} />,  title: "OTA Updates",            desc: "Over-the-air updates via Expo EAS or CodePush — ship fixes without waiting for app store approval." },
]

const benefits = [
  "iOS & Android from one codebase",
  "App Store & Play Store submission",
  "Offline-first architecture",
  "Push notification support",
  "Biometric authentication",
  "Real-time data sync",
  "Analytics & crash reporting",
  "In-app purchases integration",
  "Deep linking support",
]

const process = [
  { num: "01", title: "Strategy",     desc: "Define user personas, core flows, and technical architecture before writing any code." },
  { num: "02", title: "UI Design",    desc: "Platform-native UI designs with interactive prototypes reviewed before development." },
  { num: "03", title: "Development",  desc: "Sprint-based development with TestFlight/Play Console builds for continuous feedback." },
  { num: "04", title: "Launch",       desc: "App store submission, ASO optimization, and post-launch crash monitoring." },
]

const techs = [
  { name: "React Native",  color: "border-blue-200 text-blue-700" },
  { name: "Flutter",       color: "border-cyan-200 text-cyan-700" },
  { name: "Expo",          color: "border-gray-300 text-gray-700" },
  { name: "TypeScript",    color: "border-blue-300 text-blue-800" },
  { name: "Firebase",      color: "border-orange-200 text-orange-700" },
  { name: "Redux Toolkit", color: "border-purple-200 text-purple-700" },
  { name: "Zustand",       color: "border-indigo-200 text-indigo-700" },
  { name: "Reanimated",    color: "border-green-200 text-green-700" },
  { name: "Stripe SDK",    color: "border-indigo-300 text-indigo-800" },
  { name: "OneSignal",     color: "border-red-200 text-red-700" },
  { name: "Sentry",        color: "border-pink-200 text-pink-700" },
  { name: "EAS Build",     color: "border-gray-300 text-gray-800" },
]

const faqs = [
  { q: "Do you build for both iOS and Android?",       a: "Yes. We use React Native or Flutter to build cross-platform apps that run natively on both iOS and Android from a single codebase." },
  { q: "How long does app development take?",          a: "A simple app takes 6–10 weeks. A feature-rich app with backend integration typically takes 3–5 months." },
  { q: "Do you handle App Store submission?",          a: "Yes. We handle the full submission process for both Apple App Store and Google Play Store, including screenshots and metadata." },
  { q: "Can you integrate with our existing backend?", a: "Absolutely. We integrate with any REST or GraphQL API, and can also build a new backend if needed." },
  { q: "What about app updates after launch?",         a: "We offer maintenance plans for bug fixes, OS compatibility updates, and new feature development post-launch." },
]

export default function AppDevContent() {
  return (
    <>
      <ServiceHero
        badge="App Development"
        title="Mobile Apps That"
        highlight="Users Love"
        description="We build high-performance iOS and Android apps using React Native and Flutter — delivering native experiences from a single, maintainable codebase."
        icon={<FiSmartphone size={80} />}
        gradient="from-purple-500 to-purple-700"
      />
      <ServiceFeatures features={features} benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTech techs={techs} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA title="Ready to Launch Your App?" subtitle="Let's build a mobile app that your users will love and your business will grow with." />
    </>
  )
}
