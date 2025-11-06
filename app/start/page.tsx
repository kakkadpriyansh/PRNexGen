import Header from "@/components/landing-page/header"
import StartProject from "@/components/landing-page/start-project"
import Footer from "@/components/landing-page/footer"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

export const metadata = {
  title: "Start Your Project | PRNexGen",
  description: "Get started with your next project by answering a few questions and scheduling a call with our team.",
}

export default function StartPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <StartProject />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
