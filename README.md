
### This package is based on Material 4, which is OUTDATED!!! Not recommending using it..


### React avatar-chip based on  the Chip component of "material-ui" and "@multiavatar/multiavatar" package 
>>>>>>> 84fc8d6f93cc75b06c79944f9caa7a0d4fa9a162

### This package is based on Material 4, which is OUTDATED!!! Not recommending using it.

### React avatar-chip based on  the Chip component of "material-ui" and "@multiavatar/multiavatar" package 
#### Note: previous version 2.0.13 was Buggy, fixed in later version

![aCapture](https://user-images.githubusercontent.com/106660/132795601-b5862112-d3fb-43b6-a6fe-e28e78eb867c.JPG)


------------------------------------
import dependencies

    import React from "react"
    import { AvatarChip, AvatarLogo, TwoLineLabel } from "./AvatarChip";

default avatar is based on personName if "src" is not provided,     
default label is based on personName, if "label" is not provided
default avatar  size: ["2.6rem", "2.6rem", "2.6rem", "2.6rem", "2.6rem"],
default labelSize: ["2rem", "2rem", "2rem", "2rem", "2rem"],
   
    <AvatarChip
        size={["5.2rem", "3.9rem", "2.6rem", "1.8rem"]}  //avatar size array for different screen width 
        labelSize={["4rem", "3rem", "2rem", "1.5rem"]}   //label size array for different screen width 
        personName={"bob"}
       
     />

just avatar, no label
   
    <AvatarChip
        size={["4rem", "3rem", "2rem", "1.5rem"]} 
        personName={"mike"}
        onClick={function () { alert("hello mike") }}
        avatarProps={{ onClick: function (e) { e.stopPropagation(); alert("hi") } }}
        src="https://picsum.photos/200/300" 
        labelOn={false}
        lift={9}  // shadow level
     />

just label, no avatar
   
     <AvatarChip
        labelSize={["4rem", "3rem", "2rem", "1.5rem"]}
        personName={"mike"}
        bgColor="pink"
        onClick={function () { alert("hello mike") }}
        avatarProps={{ onClick: function (e) { e.stopPropagation(); alert("hi") } }}
        src="https://picsum.photos/200/300"
        logoOn={false}

      />



Avatar with hover tip

      <AvatarChip
        size={["1rem", "2rem", "3rem", "4rem", "5rem"]}  //avatarSize
        personName={"毛fdsdsdsdsdsd帅"}
        bgColor="skyblue"
        style={{ color: "blue" }}
        onClick={function () { alert("clicked") }}
        avatarProps={{ onClick: function (e) { e.stopPropagation(); alert("hi") } }}
        src="https://picsum.photos/200/300"
        label={
          <TwoLineLabel lineTop="06355 马小帅" lineDown="银行总行法律合规部" />
        }
        logoOn={true}  
        onDelete={function () { }}
        hoverContent={
          <>
            <AvatarChip
              size={["1rem", "2rem", "3rem", "4rem", "5rem"]}  //avatarSize
              personName={"毛fdsdsdsdsdsd帅"}
              style={{ backgroundColor: "skyblue", color: "blue" }}
              onClick={function () { alert("clicked") }}
              avatarProps={{ onClick: function (e) { e.stopPropagation(); alert("hi") } }}
              // src="https://picsum.photos/200/300"
              label={
                <TwoLineLabel lineTop="06355 马小帅" lineDown="银行总行法律合规部" />
              }
            />

          </>
        }
      />


 
------------------------------------

### [Demo](https://vibrant-liskov-396f96.netlify.app/) 

https://vibrant-liskov-396f96.netlify.app/



GitHub https://github.com/cr7cr8/avatar-chip.git


 
git push -f origin master
npm version patch
npm publish
