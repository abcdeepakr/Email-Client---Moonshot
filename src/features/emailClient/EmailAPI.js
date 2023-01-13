// File responsible to fetch emails and return them
import axios from 'axios'
// A mock function to mimic making an async request for data
export async function fetchEmails() {
    const emails = await axios.get('https://flipkart-email-mock.vercel.app/').then(res => {    
        return res.data
    }).catch(err => {
        return err
    })
    return emails
  }
  