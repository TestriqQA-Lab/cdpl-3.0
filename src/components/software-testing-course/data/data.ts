// lib/data.ts
import { Zap, Users, Briefcase, Award, Clock, ShieldCheck } from 'lucide-react';

export const features = [
    { icon: Zap, title: '100% Live Interactive Classes', desc: 'No pre-recorded videos' },
    { icon: Users, title: 'Small Batches (Max 15)', desc: 'Personal mentor attention' },
    { icon: Briefcase, title: '100% Placement Assistance', desc: 'Until you get placed' },
    { icon: Award, title: 'Industry Certificate', desc: 'Recognized by 350+ companies' },
    { icon: Clock, title: 'Flexible Timings', desc: 'Weekday & Weekend batches' },
    { icon: ShieldCheck, title: 'Lifetime Access', desc: 'Recordings + updates forever' },
];

export const curriculum = [
    { title: 'Manual Testing Fundamentals', weeks: '3 weeks', hours: 30 },
    { title: 'Java/Python for Automation', weeks: '4 weeks', hours: 50 },
    { title: 'Selenium WebDriver + TestNG', weeks: '5 weeks', hours: 60 },
    { title: 'API Testing (Postman & RestAssured)', weeks: '3 weeks', hours: 35 },
    { title: 'Cypress + Playwright (Modern Tools)', weeks: '4 weeks', hours: 45 },
    { title: 'JIRA, TestRail, Agile + DevOps', weeks: '3 weeks', hours: 30 },
    { title: 'Performance Testing with JMeter', weeks: '2 weeks', hours: 25 },
    { title: 'Mock Interviews & Resume Building', weeks: '2 weeks', hours: 20 },
];

export const testimonials = [
    { name: 'Priya Sharma', role: 'SDET at Infosys', salary: '8.5 LPA', quote: 'From zero to placed in 4 months!' },
    { name: 'Rahul Verma', role: 'QA Lead at TCS', salary: '12 LPA', quote: 'Best decision of my career.' },
    { name: 'Anjali Patel', role: 'Automation Engineer at Cognizant', salary: '9.2 LPA', quote: 'The projects were real corporate level.' },
];

export const pricingPlans = [
    {
        name: 'Basic',
        price: 14999,
        duration: '4 Months',
        popular: false,
        features: ['Manual Testing', 'Selenium', 'API Testing', 'JIRA', '100+ hrs Live', 'Certificate'],
    },
    {
        name: 'Pro',
        price: 24999,
        duration: '5 Months',
        popular: true,
        features: [
            'Everything in Basic',
            'Cypress + Playwright',
            'Java + Python',
            'Jenkins CI/CD',
            'Performance Testing',
            '1-on-1 Mentorship',
            '10 Mock Interviews',
        ],
    },
    {
        name: 'Job-Ready',
        price: 34999,
        duration: '6 Months',
        popular: false,
        features: [
            'Everything in Pro',
            '100% Job Guarantee',
            '10+ Interview Calls',
            'Resume & LinkedIn Optimization',
            'Dedicated Placement Manager',
            'Salary Negotiation Help',
        ],
    },
];

export const batches = [
    { type: 'Weekend Batch', start: '14 Dec 2025', seats: 6, instructor: 'Rakesh Sir (15+ yrs)' },
    { type: 'Weekday Batch', start: '6 Jan 2026', seats: 12, instructor: 'Neha Mam (Ex-Accenture)' },
    { type: 'Fast-Track', start: '20 Dec 2025', seats: 3, instructor: 'Vikram Sir (Ex-TCS)' },
];

export const faqs = [
    { q: 'Do you provide placement?', a: 'Yes, 100% placement assistance. Job-Ready plan has job guarantee.' },
    { q: 'Is the course live or recorded?', a: '100% live interactive classes. Recordings provided for revision.' },
    { q: 'Any prerequisites?', a: 'No prior coding needed. We teach everything from scratch.' },
    { q: 'Will I get a certificate?', a: 'Yes, industry-recognized certificate on completion.' },
    { q: 'Can I pay in installments?', a: 'Yes, 0% interest EMI available (3/6/12 months).' },
    { q: 'What if I miss a class?', a: 'You get recording + doubt session + backup class.' },
    { q: 'How many students per batch?', a: 'Maximum 15 for personal attention.' },
    { q: 'Do you help with resume building?', a: 'Yes, professional resume + LinkedIn optimization included.' },
];