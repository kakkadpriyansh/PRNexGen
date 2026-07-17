"use client"

import ProcessTimeline from "@/components/shared/ProcessTimeline"

// Keeps original prop signature — existing service pages pass `steps` but
// the new timeline uses the canonical 7-step data internally.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ServiceProcess({ steps }: { steps: { num: string; title: string; desc: string }[] }) {
  return <ProcessTimeline sectionBg="bg-white" />
}
