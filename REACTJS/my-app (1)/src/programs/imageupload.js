import React from 'react'
import S3Upload from 'react-s3-uploader/s3upload';

class Imageupload extends React.Component{
constructor(props){
    super(props);
    this.state={
        uploadimage:''
    }
}
handlechange = async (event) => {
    event.preventDefault();
    let files = event.target.files
        let err = '';
        const types = ['image/png', 'image/jpeg', 'image/gif'];
		const data = new FormData();

        if(err !== ''){
            $('uploadimage').addClass('validation');
        }
        else{
            $('uploadimage').removeClass('validation');
            this.setState({uploadimage:''})
            
            const _this = this
           _forEach(files,function(file){
          
            let timestamp = Date.now().toString();
            let path = `profileimages/${timestamp}-lg`
            const S3Uploader = new S3Upload({
                files: [file],
                signingUrl: '/s3/sign',
                s3path: path,
                signingUrlQueryParams: {},
                onProgress: _this.onProgress.bind(_this, 2, 0),
                onFinishS3Put: _this.onFinish.bind(_this, 2, 0, file),
                onError: _this.onError.bind(_this, 2, 0),
                
                uploadRequestHeaders: {
                    'x-amz-acl': 'public-read'
                },
                contentDisposition: file.type,
                server: ''
            })

           })
        }
}
async onProgress(type, fileIndex, progress) {

    //this.setState({uploadLoader: true})
}
onError = async (type, fileIndex, err) => {

    await this.setState({ uploadLoader: false });
}
async onFinish(type, fileIndex, FileDetails, info) {

    const filepath = 'https://corpsuitetest.s3.us-west-1.amazonaws.com/' + info.filename;
    await this.filesListUpdate(filepath, FileDetails, info, -1)
    await this.setState({ uploadLoader: false });
}
async filesListUpdate(filepath, FileDetails, info, dataIndex) {
    let data = Object.assign([], this.state.uploadImages);
    data.push(filepath)
    this.setState({ uploadImages: filepath });
    await this.setState({ uploadLoader: false });
}
render(){
    return(
        <div>
            <div>
       <img src={this.state.uploadimage} alt="err" />
       </div>

            <input type = "file" 
            value={this.state.uploadimage}
            id="uploadimage" 
            name="uploadimage"
            onChange={() => this.handlechange('uploadimage',this)}
            // className="form-control"
            // hidden
            />
            </div>
    )
}
}
export default Imageupload;