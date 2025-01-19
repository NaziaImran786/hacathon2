// src\components\contac.tsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-[434px] space-y-4 lg:space-y-6"
    >
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Your Name*"
          className="border-[#a4b6c8b3] text-[#8A8FB9] placeholder:text-[#8A8FB9] font-['Lato'] text-base"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          placeholder="Your E-mail"
          type="email"
          className="border-[#a4b6c8b3] text-[#8A8FB9] placeholder:text-[#8A8FB9] font-['Lato'] text-base"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      
      <Input
        placeholder="Subject*"
        className="border-[#a4b6c8b3] text-[#8A8FB9] placeholder:text-[#8A8FB9] font-['Lato'] text-base"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        required
      />
      
      <Textarea
        placeholder="Type Your Message*"
        className="min-h-[166px] border-[#a4b6c8b3] text-[#8A8FB9] placeholder:text-[#8A8FB9] font-['Lato'] text-base"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />

      <Button
        type="submit"
        className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white font-['Josefin_Sans'] text-base px-8"
      >
        Send Mail
      </Button>
    </form>
  )
}

