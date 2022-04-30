<script>
  import { Modal, Content, Trigger } from "sv-popup";
  export let button = true;
  export let small = true;
  export let basic = false;
</script>

<Modal basic={basic} small={small} button={button}>
  <Content>
    <slot>Hello</slot>
  </Content>
  <Trigger>
    <slot name="trigger">Open</slot>
  </Trigger>
</Modal>
