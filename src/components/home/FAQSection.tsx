"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { mockData } from "@/lib/data/mock"

export function FAQSection() {
  const { faqs } = mockData;
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-slate-50/70 relative overflow-hidden">
      {/* Ambient Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Header Column */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 mb-4 shadow-sm"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-bold tracking-wider uppercase text-xs">
                Got Questions?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 mb-4 leading-tight tracking-tight"
            >
              Frequently Asked <br className="hidden lg:block"/>Questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 font-normal leading-relaxed"
            >
              Find answers to common questions about dental procedures, appointments, insurance, and care protocols.
            </motion.p>
          </div>

          {/* Accordion Column */}
          <div className="w-full lg:w-2/3">
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-panel px-6 md:px-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-all duration-300 data-[state=open]:border-blue-300 data-[state=open]:bg-white"
                  >
                    <AccordionTrigger className="text-left font-bold font-heading text-base md:text-lg text-slate-900 hover:text-blue-600 py-6 [&[data-state=open]]:text-blue-600 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 font-normal text-sm md:text-base border-t border-slate-100/80 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  )
}

