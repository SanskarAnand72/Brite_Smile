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
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 mb-6 shadow-sm"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs">
                F.A.Q
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-4 mb-6 leading-tight tracking-tight"
            >
              Common Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 font-light leading-relaxed"
            >
              Find answers to some of the most common questions we receive from our patients. Can't find what you're looking for? Reach out to our support team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Still have questions?</h3>
                  <p className="text-slate-600 font-light mb-6">We're here to help you make the best decision for your oral health.</p>
                  <Button asChild className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-full h-12 transition-colors">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-white px-8 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 data-[state=open]:border-blue-200"
                  >
                    <AccordionTrigger className="text-left font-semibold font-heading text-lg text-slate-900 hover:text-blue-600 py-6 [&[data-state=open]]:text-blue-600 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-8 font-light text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            
            {/* Mobile Contact Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:hidden mt-12 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Still have questions?</h3>
              <p className="text-slate-600 font-light mb-6">We're here to help you make the best decision for your oral health.</p>
              <Button asChild className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-full h-12 transition-colors">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
