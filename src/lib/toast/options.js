// import ImgDanger from './img-danger.svelte';
// import ImgInfo from './img-info.svelte';
// import ImgSuccess from './img-success.svelte';
// import ImgTimer from './img-timer.svelte';
// import ImgWarn from './img-warn.svelte';

let toast = {
    danger: {
      titel: "Sorry!",
      msg: "Could not complete your transaction",
      type: "danger",
      img: "ImgDanger",
      delay: 5000
    },
    warn: {
      titel: "Warning!",
      msg: "Warning Message",
      type: "warn",
      img: "ImgWarn",
      delay: 5000
    },
    success: {
      titel: "Well Done!",
      msg: "Submit resume successfuly",
      type: "success",
      img: "ImgSuccess",
      delay: 5000
    },
    info: {
      titel: "Reminder!",
      msg: "You have a meeting at 10:30 AM",
      type: "info",
      img: "ImgInfo",
      delay: 5000
    },
    normal: {
      titel: "Reminder!",
      msg: "You have a meeting at 10:30 AM",
      type: "normal",
      img: "ImgTimer",
      delay: 4000
    }
  }

  
export default toast;