"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HelpCircle, MessageSquare } from "lucide-react"
import { mockData } from "@/lib/data/mock"

export function FAQSection() {
  const { faqs } = mockData;
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Header Column */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 mb-4 shadow-sm"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs">
                F.A.Q
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4 leading-tight tracking-tight"
            >
              Common Questions
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 mb-8 font-normal leading-relaxed"
            >
              Find answers to some of the most common questions we receive from our patients. Can't find what you're looking for? Reach out to our support team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">Still have questions?</h3>
                  <p className="text-slate-600 text-sm mb-5 font-normal">We're here to help you make the best decision for your oral health.</p>
                  <Button asChild className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-full h-11 text-sm font-semibold transition-colors">
                    <Link href="#contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Accordion Column */}
          <div className="w-full lg:w-2/3">
            <Accordion className="w-full space-y-3.5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-white px-6 md:px-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 data-[state=open]:border-blue-200"
                  >
                    <AccordionTrigger className="text-left font-bold font-heading text-base md:text-lg text-slate-900 hover:text-blue-600 py-5 [&[data-state=open]]:text-blue-600 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 font-normal text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            
            {/* Mobile Contact Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:hidden mt-8 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600 text-sm mb-5 font-normal">We're here to help you make the best decision for your oral health.</p>
              <Button asChild className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-full h-11 text-sm font-semibold transition-colors">
                <Link href="#contact">Contact Support</Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
