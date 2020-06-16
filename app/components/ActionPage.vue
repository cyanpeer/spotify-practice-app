<template>
    <Page actionBarHidden="true" backgroundColor="#42b883">
            <StackLayout height="60" verticalAlignment="top">
                <Button text="TAP ME" @tap="tapMeTap" />
            </StackLayout>
    </Page>
</template>

<script>
export default {
    methods: {
        tapMeTap(){
            alert('tap')
        }
    }
}
</script>