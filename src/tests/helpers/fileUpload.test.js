// import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

// cloudinary.config({ 
//     cloud_name: 'dlesavsfj', 
//     api_key: '115413992818538', 
//     api_secret: '9lNBNty0FxBL8evYoTR5Wz16hNw',
//     secure: false
//   });

describe('Pruebas en fileUpload',  () => { 
    test('Debe de cargar un archivo y retornar el URL', async() => { 
        // const resp = fetch('https://www.elcolombiano.com/binrepository/580x872/0c10/580d365/none/11101/GBFJ/capitan-america_37326520_20210310181935.jpg'); 
        // const blob = resp.blob();
        // const file = new File([blob],'foto.jpg');
        // const url = await fileUpload(file);
        // expect(typeof url).toBe('string');
        // cloudinary.v2.api.delete_resources(public_ids, options, callback);

        const imageUrl = 'https://www.elcolombiano.com/binrepository/580x872/0c10/580d365/none/11101/GBFJ/capitan-america_37326520_20210310181935.jpg';
        // const response = fetch(imageUrl);
        // const imageBlob = response.blob();
        // const file = new File([imageBlob],'foto.jpg');
        // const url = fileUpload(file);
        // .then(response => response.blob())
        // .then(imageBlob => {
            
        //     url = fileUpload(file);
        //     // console.log(url);
        //     // expect(typeof url).toBe('string');
        // });
        // console.log(response);
        var url ='';
        fetch(imageUrl)
        .then(response => response.blob())
        .then(imageBlob => {
            url = imageBlob
        });
        console.log(url);
     });
 })