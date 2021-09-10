avatarchip based on material-ui Chip component
------------------------------------

    import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid } from "@material-ui/core";
    import { AvatarChip, AvatarLogo, } from "avatar-chip";



    <AvatarChip
        size={["4rem", "3rem", "2rem", "1.5rem"]} personName={"毛fdsdsdsdsdsd帅"}

        //onClick={function () { alert("fdfdsfsd") }}
        //avatarProps={{ onClick: function (e) { e.stopPropagation(); alert("hi") } }}
        //src="https://picsum.photos/200/300"
        label={
          <>
            <Typography variant="h5" style={{  }}>
              06355 马小帅
              </Typography>
            <Typography variant="h5" style={{ fontSize: "0.8rem", display: "block", color: "gray" }}>
              银行总行法律合规部
              </Typography>
          </>
        }
        hoverContent={
          <>
            <div style={{ display: "flex", justifyContent: "center" }}><AvatarLogo size={["2.8rem"]} personName={"毛fdsdsdsdsdsd帅"} /></div>
            <Typography variant="h5" style={{ fontSize: "1rem", }}>
            06355 马小帅
              </Typography>
            <Typography variant="h5" style={{ fontSize: "0.8rem", display: "block", color: "gray" }}>
              银行总行法律合规部
              </Typography>
          </>
        }
      />

 
------------------------------------


https://github.com/cr7cr8/avatar-chip.git
git push -f origin master


npm version patch
npm publish

