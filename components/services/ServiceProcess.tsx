"use client"

import ProcessTimeline from "@/components/shared/ProcessTimeline"

export default function ServiceProcess({ steps: _steps }: { steps: { num: string; title: string; desc: string }[] }) {
  return <ProcessTimeline sectionBg="bg-white" />
}
