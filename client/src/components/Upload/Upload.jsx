/* import React from "react";
import { useState } from "react";

export default function Upload (){
    const [fileInputState, setFileInputState] = useState('');
    const [selectFile, setSelectFile] = useState('');
    const [previewSource, setPreviewSource] = useState() 
    function handleFileInputChange(){
        const file = e.taget.files[0];
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader(); 
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setPreviewSource(reader.result)
        }
    }
    const handleSubmitFile = (e)=>{
        e.preventDefault();
        if(!previewSource) return ;
        uploadImage(previewSource)
    }

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: {'Content-type': 'application/json'}

            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div>
        <form onSubmit={handleSubmitFile}>
            <input type='file' name='image' onChange={handleFileInputChange} value={fileInputState} />
            <button type="submit">Submit</button>
        </form>
        {
            previewSource && (
                <img src={previewSource} style={{height: '300px'}} />
            )
        }
    </div> 
    )
} */