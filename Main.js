import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';
 
//  ImagePicker 라이브러리 npm install ..
import ImagePicker from 'react-native-image-picker';
 
export default class Main extends Component{
 
    constructor(){
        super();
        this.state={
            img:{uri : "https://file3.instiz.net/data/cached_img/upload/2018/06/11/16/cb424adf01fd1f3bf652fdb5294bab99.jpg"},
        }
    }
    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <Button title="사진 가져오기" onPress={this.showPicker}></Button>
                <Text style={{margin:8}}> {this.state.img.uri}</Text>
                <Image source={this.state.img} style={{marginTop:8, flex:1}}>
                </Image>
            </View>
        );
    }//render method ..
    showPicker=()=>{
        // PickerDialog의 옵션 객체
        const options= {
            title:'사진 가져오기', //다이얼로그의 제목
            takePhotoButtonTitle: '카메라 촬영',
            chooseFromLibraryButtonTitle:'앨범에서 선택',
            cancelButtonTitle: '취소',
            storageOptions:{
                skipBackup: true, //ios에서 icloud에 백업할 것인가?- 안드로이드에서는 무시됨
                path: 'images',//카메라로 캡쳐시에 저장될 폴더명 [ Pictures/[path] 경로]
            }
        };
 
        //위에서 만든 옵션을 기준으로 다이얼로그 보이기 
        ImagePicker.showImagePicker(options, (response)=>{
            if(response.didCancel){
                alert('사용자가 취소하였습니다.');
            }else if(response.error){
                alert('에러 : ', response.error);
            }else{
                // 이곳에 왔다면 이미지가 잘 선택된 것임
                // 선택된 이미지의 경로 uri 얻어오기
                const uri= {uri: response.uri};
                
                this.setState({img:uri});
            }
        });
 
    }
}//Main class..