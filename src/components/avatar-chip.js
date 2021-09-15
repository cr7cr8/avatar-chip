import React, { Component, useContext } from "react"

import { withStyles, makeStyles, useTheme } from '@material-ui/styles'

import { Avatar, Chip, Popover, Typography, } from "@material-ui/core";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import multiavatar from '@multiavatar/multiavatar';
import classNames from 'classnames';
import styled from 'styled-components'



const shadowArr =
  ["none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ]

const breakpoints = createBreakpoints({})
function breakpointsAttribute(...args) {
  let xs = {}, sm = {}, md = {}, lg = {}, xl = {};

  args.forEach(item_ => {
    const item = flatten(item_)
    xs = { ...xs, [item[0]]: item[1] }
    sm = { ...sm, [item[0]]: item[2] || item[1] }
    md = { ...md, [item[0]]: item[3] || item[2] || item[1] }
    lg = { ...lg, [item[0]]: item[4] || item[3] || item[2] || item[1] }
    xl = { ...xl, [item[0]]: item[5] || item[4] || item[3] || item[2] || item[1] }
  })
  return {
    [breakpoints.only('xs')]: { ...xs },
    [breakpoints.only('sm')]: { ...sm },
    [breakpoints.only('md')]: { ...md },
    [breakpoints.only('lg')]: { ...lg },
    [breakpoints.only('xl')]: { ...xl },
  }
}

function multiplyArr(arr, factor) {
  return arr.map((item) => {
    const num = Number(item.replace(/[^\d\.]/g, ''))
    const unit = String(item.replace(/[\d\.]/g, ''))
    return String(num * factor + unit)
  })
}
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}




function styleObj({ lgTextSizeArr, textSizeArr, ...theme }) {
  return {
    avatarCss: ({ size, personName, ...props }) => {
      const size_ = Array.isArray(size)
        ? size
        : typeof (size) === "string"
          ? [size]
          : lgTextSizeArr

      return {
        ...breakpointsAttribute(["width", size_], ["height", size_]), //avatar size
      }
    },
    chipCss: ({ size = ["1.3rem", "2.6rem", "3.9rem", "5.2rem"], personName, label, bgColor, lift = 3, logoOn = true, labelOn = true,
      labelSize = ["1rem", "2rem", "3rem", "4rem"], onDelete, ...props }) => {

      const size_ = Array.isArray(size)
        ? size
        : typeof (size) === "string"
          ? [size]
          : lgTextSizeArr

      const labelSize_ = Array.isArray(labelSize)
        ? labelSize
        : typeof (labelSize) === "string"
          ? [labelSize]
          : textSizeArr
      return {

        height: "auto",

        backgroundColor: bgColor,
        padding: 0,
        margin: 0,
        boxShadow: shadowArr[lift],


        overflow: "hidden",

        ...breakpointsAttribute(["borderRadius", "999999px"]),

        "& .MuiChip-avatar": {
          ...(logoOn && (!labelOn)) && { transform: "scale(0.95)" },
          ...(logoOn && (labelOn)) && { transform: "scale(0.95)" },
          ...breakpointsAttribute(["width", size_], ["height", size_], ["margin", 0]), //avatar size
        },

        "& .MuiChip-label": {
          // fontWeight: "bold",
          userSelect: "text",
          //    backgroundColor: "#a2c3b2",
          lineHeight: "100%",
          margin: 0,
          padding: 0,
          ...breakpointsAttribute(["fontSize", labelSize_ || []],
            ["paddingLeft", labelOn ? multiplyArr(labelSize_ || [], logoOn ? 0.15 : 0.5) : [0]],
            ["paddingRight", labelOn ? multiplyArr(labelSize_ || [], onDelete ? 0.15 : 0.5) : [0]]), // label size
        },
        "& .MuiChip-deleteIcon": {
          margin: 0,
          ...breakpointsAttribute(
            ["width", multiplyArr(labelSize_, 0.8)],
            ["height", multiplyArr(labelSize_, 0.8)],

          )
        }
      }

    },

    typoUpCss: ({ size, logoOn, labelOn }) => {


      // const size_ = Array.isArray(size)
      //   ? size
      //   : typeof (size) === "string"
      //     ? [size]
      //     : textSizeArr
      return {
        // lineHeight: "115%",
        // // backgroundColor:"pink",
        // margin: 0,
        // padding: 0,
        // ...breakpointsAttribute(
        //   ["fontSize", multiplyArr(size_, 65 / 100)],
        // ),

      }
    },
    typoDownCss: ({ size, logoOn, labelOn }) => {

      // const size_ = Array.isArray(size)
      //   ? size
      //   : typeof (size) === "string"
      //     ? [size]
      //     : textSizeArr
      return {
        // lineHeight: "115%",
        // //  backgroundColor:"lightblue",
        // margin: 0,
        // padding: 0,
        // ...breakpointsAttribute(
        //   ["fontSize", multiplyArr(size_, 35 / 100)],
        //),
      }
    },
    popover: () => { return { pointerEvents: 'none', } },
    paper: () => { return { pointerEvents: "auto", padding: "8px", } },
  }
}

class TwoLineLabel_ extends Component {

  static defaultProps = {
    size: ["2.6rem", "2.6rem", "2.6rem", "2.6rem", "2.6rem"],
    labelSize: ["2rem", "2rem", "2rem", "2rem", "2rem"],
  }
  constructor(props, ctx) {
    super(props, ctx)
    //   console.log(props)
  }
  render() {

    const { lineTop, lineDown, className, theme, ...props } = this.props
    const { typoUpCss, typoDownCss } = this.props.classes

    const allClassNamesTop = classNames({
      [typoUpCss]: false,
      [className]: true
    })
    const allClassNamesDown = classNames({
      [typoDownCss]: false,
      [className]: true
    })
    return (

      <>
        <Typography color="textPrimary" className={allClassNamesTop} >{lineTop}</Typography>
        <Typography color="textSecondary" className={allClassNamesDown} >{lineDown}</Typography>
      </>
    )
  }

}



export const TwoLineLabelWithStyled = styled(TwoLineLabel_).withConfig({
  shouldForwardProp: (propName, defaultValidatorFn) => { return true }
})`
    ${ (props) => {


    const {

      size = ["2.6rem", "2.6rem", "2.6rem", "2.6rem", "2.6rem"],
      labelSize = ["2rem", "2rem", "2rem", "2rem", "2rem"],
      ...rest
    } = props



    const size_ = Array.isArray(size)
      ? size
      : typeof (size) === "string"
        ? [size]
        : size

    return {
      "&:first-of-type": {
        lineHeight: "115%",
        // backgroundColor:"pink",
        margin: 0,
        padding: 0,
        ...breakpointsAttribute(
          ["fontSize", multiplyArr(size_, 65 / 100)],

          //   ((!logoOn) && labelOn) ? ["marginLeft", multiplyArr(size_, 40 / 100)] : []// not updating with props updating logoOn labelOn

        ),
      },
      "&:first-of-type ~ &": {
        lineHeight: "115%",
        // backgroundColor:"pink",
        margin: 0,
        padding: 0,
        ...breakpointsAttribute(
          ["fontSize", multiplyArr(size_, 35 / 100)],

          //   ((!logoOn) && labelOn) ? ["marginLeft", multiplyArr(size_, 40 / 100)] : []// not updating with props updating logoOn labelOn

        ),
      }
    }


  }} 
`


export const TwoLineLabel = withStyles(styleObj, { withTheme: true })(TwoLineLabelWithStyled)

class AvatarLogo_ extends Component {
  render() {
    const { classes, personName, src, ...rest } = this.props
    const src_ = "data:image/svg+xml;base64," + btoa(personName && multiavatar(personName))
    return <Avatar classes={{ root: classes.avatarCss }} src={this.props.src || src_} {...rest} />
  }
}

class AvatarChip_ extends Component {

  static defaultProps = {

    multiplyArr,
    factor: 1.3,
    breakpointsAttribute,

    size: ["2.6rem", "2.6rem", "2.6rem", "2.6rem", "2.6rem"],

    labelSize: ["2rem", "2rem", "2rem", "2rem", "2rem"],

    logoOn: true,
    labelOn: true,


  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      transOriginH: "left",
      transOriginV: "top",
      anchorPos: { "top": 0, "left": 0 },
    }
    this.anchorRef = null //  React.createRef();
  };


  handlePopoverOpen = (event) => {

    const { left, right, width, top, bottom, height } = this.anchorRef.getBoundingClientRect() //this.anchorRef.current.getBoundingClientRect()
    const centerX = left + width / 2;
    const centerY = top + height / 2;


    this.setState(pre => {
      return {
        open: true,
        transOriginH: centerX <= window.innerWidth / 2 ? "left" : "right",
        transOriginV: centerY <= window.innerHeight / 2 ? "top" : "bottom",
        anchorPos: {
          "left": centerX <= window.innerWidth / 2 ? Math.round(left) : Math.round(left + width),
          "top": centerY <= window.innerHeight / 2 ? Math.round(top + height) + 8 : Math.round(top) - 8
        },

      }
    });


  };

  handlePopoverClose = () => {
    this.setState(pre => { return { ...pre, open: false } });
  };


  render() {
    const { classes, theme, size, personName, avatarProps, logoOn = true, labelOn = true, children, ...rest } = this.props

    const { src, ...avatarRest } = this.props.avatarProps || {}
    console.log(theme)
    return (

      <div style={{ width: "fit-content", display: "inline-block" }}    >

        <Chip
          classes={{ root: classes.chipCss }}
          {...logoOn && { avatar: <AvatarLogo size={size} personName={personName} src={this.props.src}{...avatarRest} /> }}

          label={personName}
          {...rest}



          // {...(this.props.label && this.props.label.type && this.props.label.type.Naked && this.props.label.type.Naked.name === "TwoLineLabel_")
          // && labelOn && {
          {...(this.props && this.props.label && this.props.label.type && this.props.label.type.Naked && this.props.label.type.Naked.render.displayName === "Styled(TwoLineLabel_)")
          && labelOn && {

            label: <TwoLineLabel
              {...this.props.label.props}
              logoOn={this.props.logoOn}
              labelOn={this.props.labelOn}

              {...(Array.isArray(this.props.labelSize) || (typeof (this.props.labelSize) === "string")) && { size: this.props.labelSize, }}
            />
          }}

          {...this.props.children && { label: this.props.children }}

          // {...(this.props.children && this.props.children.type && this.props.children.type.Naked && this.props.children.type.Naked.name === "TwoLineLabel_")
          // && labelOn && {
          {...(this.props && this.props.children && this.props.children.type && this.props.children.type.Naked && this.props.children.type.Naked.render.displayName === "Styled(TwoLineLabel_)")
          && labelOn && {
            label: <TwoLineLabel
              {...this.props.children.props}
              logoOn={this.props.logoOn}
              labelOn={this.props.labelOn}

              {...(Array.isArray(this.props.labelSize) || (typeof (this.props.labelSize) === "string")) && { size: this.props.labelSize, }}
            />
          }}

          {...(!labelOn) && { label: null }}

          {...this.props.hoverContent && { onMouseEnter: this.handlePopoverOpen }}
          {...this.props.hoverContent && { onMouseLeave: this.handlePopoverClose }}

          ref={(element) => { this.anchorRef = element }}
        />

        {this.props.hoverContent && <Popover

          marginThreshold={0}

          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={this.state.open}
          anchorReference="anchorPosition"

          anchorEl={this.anchorRef}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          anchorPosition={{ ...this.state.anchorPos, }}
          transformOrigin={{
            horizontal: this.state.transOriginH,
            vertical: this.state.transOriginV,
          }}

          //   onClose={this.handlePopoverClose}
          disableRestoreFocus
          PaperProps={{ onMouseEnter: this.handlePopoverOpen, onMouseLeave: this.handlePopoverClose, elevation: 2 }}
        >
          {this.props.hoverContent}
        </Popover>}

      </div>

    )
  }
}

export const AvatarLogo = withStyles(styleObj, { withTheme: true })(AvatarLogo_);
export const AvatarChip = withStyles(styleObj, { withTheme: true })(AvatarChip_);



