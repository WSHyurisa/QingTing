import instance from "../request";

const getShowImage = () => instance.get('/other/showImage')

export{
    getShowImage
}