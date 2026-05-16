import { TextInput, Button, Stack, Center } from '@mantine/core'
import {useState,useEffect} from 'react'
import React from 'react'
import Service from '../../utils/http';

export const UrlShortner = () => {
    const service=new Service();
    const [data,setData]=useState({});
    const [shortUrl,setShortUrl]=useState("");
    const handleSubmit= async()=>{
        try{
            const response=await service.post('s',data);
            console.log(response);  
            setShortUrl(response.shortCode);
        }catch(error){
            console.error("Error creating short URL:", error.message);
        }
    } 
useEffect  ( ()=>{
console.log(`Short URL: ${shortUrl}`);
},[shortUrl])

  return (
        <>
        {shortUrl && shortUrl.length>0 ?
           
                <p>Short URL: {`https://url-shortener-bootcamp.onrender.com/api/s/${shortUrl}`}</p>
        :
       <Center>
         <Stack maw={400} w="100%">
          <TextInput
            size="md"
            label="Original URL"
            onChange={(event) => {
              setData({ ...data, originalUrl: event.target.value });
            }}
            placeholder="Input placeholder"
          />
          <TextInput
            size="md"
            label="Customize your link ( Optional )"
            onChange={(event) => {
              setData({ ...data, customUrl: event.target.value });
              console.log(data.customUrl);
            }}
            placeholder="Input placeholder"
          />
          <TextInput
            size="md"
            label="Title ( Optional )"
            onChange={(event) => {
              setData({ ...data, title: event.target.value });
            }}
            placeholder="Input placeholder"
          />
          <Button variant="outline" size="md" onClick={handleSubmit}>Button</Button>
         </Stack>
       </Center>
}
    </>
    

  )
}

