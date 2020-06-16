<template>
    <Page actionBarHidden="true">
        <GridLayout>
          <Frame id="home-page">
            <HomePage/>
          </Frame>
          
          <Frame @loaded="actionFrameLoaded">
            <ActionPage/>
          </Frame>
        </GridLayout>
    </Page>
</template>

<script >
import HomePage from './HomePage'
import ActionPage from './ActionPage'
import {screen} from 'tns-core-modules/platform'

  export default {
    components: {
      HomePage,
      ActionPage
    },
    methods: {
      actionFrameLoaded(args){
        const frame = args.object;
        frame.translateY = screen.mainScreen.heightDIPs -80
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
