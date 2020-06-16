<template>
    <Page>
        <ActionBar title="What The Hell!"/>
        <GridLayout columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Ill want to go home!'
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #234234;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #330033;
    }
</style>
