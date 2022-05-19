import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import  "./Contact.css"
import me from "./me.jpeg"
import ReactWhatsapp from 'react-whatsapp';


const theme = {
    background: 'white',
    fontFamily: 'Kalam',
    headerBgColor: '#282c34',
    headerFontColor: '#FFFAF0',
    headerFontSize: '15px',
    botBubbleColor: '#282c34',
    botFontColor: '#FFFAF0',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
 


    
  };


  const button = React.createElement('h1', {}, 'My First React Code');


  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };



function Contact() {
    return (
      <div className='wholePage'>


<div className='links'>


<h2 className='SocialMediaStatement'>... or find me on Social-Media</h2>

       <SocialIcon url="https://facebook.com/julianhotter" bgColor="#282c34"  />
        <><SocialIcon url="https://instagram.com/julian.hotter" bgColor="#282c34" /></>
        <><SocialIcon url="https://www.linkedin.com/in/julian-hotter-18277b200/" bgColor="#282c34"  /></>
        <><SocialIcon url="https://github.com/juhotter/" bgColor="#282c34"  /></>


       




        </div>
      
          
          
  <div style={{paddingLeft:"100px", paddingTop:"50px"}}>
           <ThemeProvider theme={theme}>
          
             
      <ChatBot 
     
     
steps = {[
  {
    id: 'start',
    message: 'Hi, I am Julian`s 🤖 -  just a little bit funnier than him',
    trigger: '0',
  
  },

  {
      id: '0',
      message: 'Wanna Tell me your Name?',
      trigger: 'nameorno',
    
    },
  


{
  id: 'nameorno',
  options: [
    { value: 1, label: 'No', trigger: '111' },
    { value: 2, label: 'Sure', trigger: '1' , trigger: 'name'} 
  ]
 
},

{
  id: 'name',
  user: true,
  trigger: '1',
},
{
id: '1',
message: 'Nice to "meet" you 👋 - {previousValue}! What can i do for you?',
trigger: '2',
},
{
id: '111',
message: 'Okay, then we cannot be friends 😔, but what can i do for you?',
trigger: '2',
},

{
  id: 'whatsappOrMail',
  options: [
    { value: 2, label: 'contact you via Email 📧', trigger: '4' },
  
    { value: 4, label: 'contact you via Whatsapp', trigger: '12' },
    
    
    
  ],
},

{
  id: '2',
  options: [
    { value: 1, label: 'I just want to say hello', trigger: '3' },
    { value: 2, label: 'contact you', trigger: 'whatsappOrMail' },
    { value: 3, label: 'Tell me a Joke ', trigger: '10' },
  
    
    
    
  ],
},
{
  id: '5',
  options: [
    { value: 1, label: 'No thanks', trigger: '6' },
    { value: 2, label: 'Yes, i want to contact you ', trigger: '4' },
    { value: 3, label: 'Take me back to the Main Menü Mr. Bot', trigger: '2' },
    
  ],
},

{
  id: '3',
  message: 'Hi, have a nice day ☀️. Can i do something else for you?',
 
  trigger: '5',
  
},
{
  id: '4',
  message: 'Pleased to hear from you :)',
  
  trigger: "mailme"
  
},
{
  id: '6',
  message: 'Okay :-)',
  end: true,
},
{
  id: '10',
  message: 'Did you hear about the Italian 🇮🇹 chef who died?' ,
  trigger: "11",
},
{id: '11',
message: 'He pasta-way.🤌 ' ,
end: true,
},
{id: '12',
component: <ReactWhatsapp number="+43 6609200611" message="Hello" >
  Click-Me
  </ReactWhatsapp> ,
end: true,
},

{
  
  id: 'mailme',
  component: <Mailto  email="julian.hotter@gmx.at" subject="Inquiry" body="Hello Julian"   >
  Click-Me
</Mailto>,
  end: true,
},
]}
    
botAvatar={me}


/>
    

  </ThemeProvider>  
  </div>
        </div>
        
    )
}

export default Contact