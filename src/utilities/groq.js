import { Groq } from 'groq-sdk';

const GROQ_API = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true
});

export const requestToGroqAI = async (content) => {
  try {
    const reply = await groq.chat.completions.create({
      messages: [
        {
          role: 'user', // Make sure role is a string
          content
        }
      ],
      model: 'llama3-8b-8192'
    });
    return reply.choices[0].message.content;
  } catch (error) {
    console.error('Error making request to Groq AI:', error);
    throw error;
  }
};
