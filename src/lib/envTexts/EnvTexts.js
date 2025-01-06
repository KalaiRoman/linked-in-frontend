
const envDatas={
        "BaseUrl":process.env.REACT_APP_MODE=="Development"?process.env.REACT_APP_BASE_URL_DEVELOPMENT:process.env.REACT_APP_BASE_URL_PRODUCTION,
        "contentType":process.env.REACT_APP_CONTENT_TYPE,
        "withCredentials":process.env.REACT_APP_CONTENT_TYPE
}
export default envDatas;