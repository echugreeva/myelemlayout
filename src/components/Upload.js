import { Button, message, Upload } from 'antd';
import uploadIcon from '../media/upload.png'

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };


const props = {
  name: 'file',
  listType: 'picture-card',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  maxCount: 1,
  onChange(info) {
    console.log(info.file, info.fileList);

    if (info.file.status !== 'uploading') {
    }
    // getBase64(info.file.originFileObj, (url) => {
    //     setImageUrl(url);
    // });
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      if (props.uploaded) {
        props.uploaded(info.file)
      }
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const UploadInput = (uploaded) => (
  <Upload {...props} uploaded={uploaded} >
    <img src={uploadIcon} style={{width:'2rem'}}/>
  </Upload>
);
export default UploadInput;