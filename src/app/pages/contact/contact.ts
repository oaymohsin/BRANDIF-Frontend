import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  standalone: false
})
export class ContactComponent {
  faqs = [
    {
      question: 'How quickly can you respond to enquiries?',
      answer: 'We typically respond to all enquiries within 24 hours during business days, often much faster.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes. Initial 30-minute consultations are always free with no obligation.'
    },
    {
      question: 'What information should I prepare before contacting you?',
      answer: "Just a general idea of what you're trying to achieve. We'll guide the conversation from there."
    },
    {
      question: 'Do you require contracts or deposits?',
      answer: 'Yes, all projects proceed under clear written agreements. Deposits vary by project size, typically 30-50% to commence work.'
    },
    {
      question: 'Can you work with clients outside London?',
      answer: 'Absolutely. We work with clients throughout the UK and internationally.'
    }
  ];

  processSteps = [
    {
      title: 'We Review Your Enquiry',
      description: "We'll read your message carefully and prepare relevant questions or recommendations."
    },
    {
      title: 'Initial Conversation',
      description: "We'll schedule a call to discuss your needs in detail and determine if we're a good fit."
    },
    {
      title: 'Proposal & Next Steps',
      description: "If it makes sense to work together, we'll provide a clear proposal outlining approach, timeline, and investment."
    }
  ];

  openFaq: number | null = null;

  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
