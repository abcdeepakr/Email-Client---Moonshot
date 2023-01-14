// File responsible to fetch emails and return them
import axios from 'axios'
export async function fetchEmails() {
    const emails = await axios.get('https://flipkart-email-mock.vercel.app/').then(res => {    
        return res.data
    }).catch(err => {
        return err
    })
    return emails
  }
export async function fetchEmailBody(id) {
    const emails = await axios.get(`https://flipkart-email-mock.vercel.app?id=${id}`).then(res => { 
        return res.data
    }).catch(err => {
        return err
    })
    return emails
  }
  
export function parseUnixTimeStamp(unix_timestamp){
    var date = new Date(unix_timestamp);
    // var hours = date.getHours();
    // var minutes = "0" + date.getMinutes();
    let parsedDate = date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric',hour: '2-digit', minute:'2-digit'})
    return parsedDate
}

export function truncateText(text){
    let maxLength = 60;
    if(text.length <= maxLength){
        return text
    } else{
        let validText = text.slice(0,60)
        return validText+"..."
    }
}