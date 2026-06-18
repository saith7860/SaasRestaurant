import axios from 'axios';

export const sendTemplateMessage=async()=>{
    try {
        const response=await axios({
        method:'POST',
        url:`https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
        headers:{
            "Authorization":`Bearer ${process.env.WHATSAPP_TOKEN}`,
            "Content-Type": "application/json"
        },
        data:{
            "messaging_product": "whatsapp",
            "to": "+923143247947",
            "type": "template",
            "template": {
                "name": "hello_world",
                "language": {
                    "code": "en_US",
                    "policy": "deterministic"
                }
            }}
    })
    console.log(response.data);
    } catch (error:any) {
        console.log(error.response.data)
    }
    
}
