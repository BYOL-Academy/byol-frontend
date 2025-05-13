'use client'
import { Accordion, AccordionAction, AccordionContent, AccordionIcon, AccordionItem, AccordionTitle } from '../src'

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: 'Q. What types of government exams does your platform cover?',
      answer:
        'We offer preparation material for a wide range of exams including UPSC, SSC, Banking (IBPS, SBI), Railways (RRB), Defence (NDA, CDS), Teaching (CTET, KVS), and various State PSCs.',
    },
    {
      id: 2,
      question: 'Q. Is the content available in both English and Hindi?',
      answer:
        'Yes, all our major courses, mock tests, and study materials are available in both English and Hindi to suit your language preference.',
    },
    {
      id: 3,
      question: 'Q. Are the mock tests based on the latest exam patterns?',
      answer:
        'Absolutely! Our mock tests are regularly updated to reflect the latest syllabus and pattern of each specific government exam, ensuring you practice with real-time accuracy.',
    },
    {
      id: 4,
      question: 'Q. Can I access the platform on my mobile phone?',
      answer:
        'Yes! Our platform is mobile-friendly, and we also offer a dedicated app (if applicable) so you can study anytime, anywhere — even with low internet connectivity.',
    },
    {
      id: 5,
      question: 'Q. Do you offer free resources or only paid courses?',
      answer:
        'We offer a range of free resources including practice questions, daily quizzes, and mock tests. You can also explore premium plans for full courses, mentorship, and advanced features.',
    },
    {
      id: 6,
      question: 'Q. What kind of support or mentorship do I get?',
      answer: `You'll have access to expert mentors for doubt-solving sessions, study planning, and exam strategies. We also provide community support via discussion forums and live webinars.`,
    },
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="mx-auto mb-4 px-5 text-center md:max-w-[500px] md:px-0">
          <h3 className="text-body-1 !font-semibold text-black lg:text-heading-5 dark:text-white">FAQs</h3>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <div className="w-full lg:col-span-1">
            <Accordion type="single" collapsible>
              {faqs.slice(0, 3).map((faq) => (
                <AccordionItem value={faq.id.toString()} key={faq.id} className="border-metal-200">
                  <AccordionAction>
                    <AccordionTitle className="text-body-4 md:text-body-3">{faq.question}</AccordionTitle>
                    <AccordionIcon />
                  </AccordionAction>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="w-full lg:col-span-1">
            <Accordion type="single" collapsible>
              {faqs.slice(3).map((faq) => (
                <AccordionItem value={faq.id.toString()} key={faq.id} className="border-metal-200">
                  <AccordionAction>
                    <AccordionTitle className="text-body-4 md:text-body-3">{faq.question}</AccordionTitle>
                    <AccordionIcon />
                  </AccordionAction>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
