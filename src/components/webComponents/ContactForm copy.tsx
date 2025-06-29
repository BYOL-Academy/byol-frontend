import React, { useState } from 'react'
import { Send } from 'lucide-react'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })

        // Reset submitted status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1500)
    }
  }

  const inputClass = `w-full p-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white dark:focus:ring-indigo-500 bg-gray-50 border-gray-300 text-gray-900 focus:ring-indigo-400'
  }`

  const labelClass = `block mb-2 font-medium dark:text-gray-300 text-gray-700'}`

  const errorClass = 'text-red-500 text-sm mt-1'

  if (isSubmitted) {
    return (
      <div className={`text-gray-800'} flex h-full flex-col items-center justify-center p-6 dark:text-gray-200`}>
        <div
          className={`bg-green-100'} mb-4 flex h-16 w-16 items-center justify-center rounded-full dark:bg-green-700`}>
          <svg
            className={`text-green-600'} h-8 w-8 dark:text-green-300`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold">Thank You!</h3>
        <p className={`text-gray-600'} text-center dark:text-gray-400`}>
          Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <div className={`text-gray-800'} h-full p-6 dark:text-gray-200`}>
      <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="John Doe"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="john@example.com"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass}>
            <option value="" disabled>
              Select a subject
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Billing">Billing</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className={errorClass}>{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={inputClass}
            placeholder="Your message here..."></textarea>
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-3 font-medium text-white transition-all duration-300 hover:from-indigo-400 hover:to-indigo-500 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-700 dark:text-white dark:hover:from-indigo-500 dark:hover:to-indigo-600
          ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}>
          {isSubmitting ? (
            <>
              <svg
                className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
