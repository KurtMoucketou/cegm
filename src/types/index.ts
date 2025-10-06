export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  targetAudience: 'moroccan' | 'gabonese' | 'both';
}

export interface Supplier {
  id: string;
  name: string;
  sector: string;
  description: string;
  contact: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  type: 'contact' | 'membership';
}