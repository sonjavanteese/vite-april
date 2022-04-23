<script>
  export let src = "https://sveltejs.github.io/assets/caminandes-llamigos.mp4";
  export let poster =
    "https://sveltejs.github.io/assets/caminandes-llamigos.jpg";
  let time = 0;
  let duration;
  export let muted = true;
  export let volume = 0.5;
  export let paused = true;
  let showControls = true;
  let showControlsTimeout;
  let lastMouseDown;
  function toggleMute() {
    muted = !muted;
  }
  function togglePlay() {
    paused = !paused;
  }
  function handleMousedown(e) {
    lastMouseDown = new Date();
  }

  function handleMouseup(e) {
    if (new Date() - lastMouseDown < 300) {
      if (paused) e.target.play();
      else e.target.pause();
    }
  }

  function format(seconds) {
    if (isNaN(seconds)) return "...";

    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;

    return `${minutes}:${seconds}`;
  }
</script>

<div class="relative bg-black">
  <video
    {poster}
    {src}
    controls
    bind:volume
    bind:muted
    bind:currentTime={time}
    bind:duration
    bind:paused
  >
    <track kind="captions" />
  </video>
</div>

<style>
  @import url("https://css.gg/play-button.css");
  @import url("https://css.gg/play-pause.css");
  @import url("https://css.gg/volume.css");
  .time {
    width: 3em;
  }

  .time:last-child {
    text-align: right;
  }

  video {
    width: 100%;
  }
</style>
