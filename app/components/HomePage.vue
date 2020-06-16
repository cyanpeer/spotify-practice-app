<template>
    <Page class="main-page">
        <GridLayout rows="80, 300, *">
            <Image ref="img" row="1" src="~/assets/images/meg.png" margin="-200 0 0 0" />
            <ScrollView row="2" marginTop="-380" @scroll="onScroll">
                <GridLayout rows="380, *">
                    <Label row="0" class="fade" marginTop="-50"/>
                    <Label row="0"  :text="text.mainTitle" class="title" marginTop="100"/>
                    <Label row="0"  text="8,237,429 MONTHLY LISTENERS" class="subtitle" marginTop="200"/>
                    <Label row="1" :text="text.content" textWrap="true" margin="20 20 20 30"/>
                </GridLayout>
            </ScrollView>
            <Label row="0" ref="blackBar" class="black-bar" marginTop="550"/>
            <Button row="0" ref="btnPlay" text="SHUFFLE PLAY" class="btn-play" marginTop="630"/>
            <Label row="0" ref="abTitle" :text="text.mainTitle" marginTop="-76" class="ab-title"/>
        </GridLayout>
    </Page>
</template>


<script>
import Page2Page from './Page2Page'
import { ScrollEventData, ScrollView } from 'tns-core-modules/ui/scroll-view'

export default {
    data() {
            return {
                text: {
                mainTitle: 'MEG',
                content: "test 123Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a voluptate quaerat! Officiis, quam maiores tenetur maxime beatae pariatur ducimus rerum asperiores deserunt adipisci vel tempore unde totam. Omnis culpa debitis optio eveniet a! Recusandae, praesentium non in dolorum adipisci voluptas quibusdam a voluptate quam? Praesentium illo obcaecati vel assumenda rem, a odio error doloribus, amet nulla distinctio iusto quas expedita doloremque. Ipsa soluta odit necessitatibus ratione sed quam magni? Odit vel, iusto exercitationem assumenda corporis hic, sed, amet laudantium explicabo facere natus ducimus suscipit obcaecati sunt et. Voluptatum amet doloremque, alias dolorum sint fugiat! Iste ut exercitationem accusantium ipsam quae dicta sit libero, nulla facere nihil at quaerat expedita. Excepturi similique non illum voluptate sed, officiis ut cupiditate aut nobis, quis quisquam vel dolore fugiat blanditiis voluptas qui debitis nihil! In nam nihil quas repellat magnam illo beatae maiores impedit, amet nulla soluta atque quia quaerat? Quo officiis, fuga, nam optio mollitia vero veniam fugit facilis minus nobis distinctio quos commodi. Aperiam dignissimos ratione expedita debitis dolore molestiae doloremque asperiores voluptate rem harum deleniti tempore accusantium ab animi laboriosam inventore nihil eveniet adipisci quis voluptatibus voluptates error et, laudantium architecto. Possimus eius itaque tempore earum repellendus velit voluptas temporibus a commodi ullam vitae optio et maiores, quam quaerat repudiandae dolore eligendi molestiae explicabo assumenda tempora! Repellendus fuga earum doloribus perferendis nam cupiditate nesciunt aperiam atque placeat animi, autem ipsum quas facilis amet neque porro accusamus magni totam ab at reiciendis, commodi voluptatum! Placeat sed commodi aliquid laboriosam sapiente reiciendis nostrum similique saepe officia. Expedita voluptates quo dolores quae quisquam. Ipsa iure consequuntur modi praesentium. Nobis numquam ducimus deleniti. Repellat animi ducimus et? Voluptate nemo sit accusamus ipsum quisquam rem distinctio sint exercitationem maxime, mollitia quam eum pariatur eos aliquid quos molestias animi molestiae iusto nulla libero tenetur voluptas repellendus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a voluptate quaerat! Officiis, quam maiores tenetur maxime beatae pariatur ducimus rerum asperiores deserunt adipisci vel tempore unde totam. Omnis culpa debitis optio eveniet a! Recusandae, praesentium non in dolorum adipisci voluptas quibusdam a voluptate quam? Praesentium illo obcaecati vel assumenda rem, a odio error doloribus, amet nulla distinctio iusto quas expedita doloremque. Ipsa soluta odit necessitatibus ratione sed quam magni? Odit vel, iusto exercitationem assumenda corporis hic, sed, amet laudantium explicabo facere natus ducimus suscipit obcaecati sunt et. Voluptatum amet doloremque, alias dolorum sint fugiat! Iste ut exercitationem accusantium ipsam quae dicta sit libero, nulla facere nihil at quaerat expedita. Excepturi similique non illum voluptate sed, officiis ut cupiditate aut nobis, quis quisquam vel dolore fugiat blanditiis voluptas qui debitis nihil! In nam nihil quas repellat magnam illo beatae maiores impedit, amet nulla soluta atque quia quaerat? Quo officiis, fuga, nam optio mollitia vero veniam fugit facilis minus nobis distinctio quos commodi. Aperiam dignissimos ratione expedita debitis dolore molestiae doloremque asperiores voluptate rem harum deleniti tempore accusantium ab animi laboriosam inventore nihil eveniet adipisci quis voluptatibus voluptates error et, laudantium architecto. Possimus eius itaque tempore earum repellendus velit voluptas temporibus a commodi ullam vitae optio et maiores, quam quaerat repudiandae dolore eligendi molestiae explicabo assumenda tempora! Repellendus fuga earum doloribus perferendis nam cupiditate nesciunt aperiam atque placeat animi, autem ipsum quas facilis amet neque porro accusamus magni totam ab at reiciendis, commodi voluptatum! Placeat sed commodi aliquid laboriosam sapiente reiciendis nostrum similique saepe officia. Expedita voluptates quo dolores quae quisquam. Ipsa iure consequuntur modi praesentium. Nobis numquam ducimus deleniti. Repellat animi ducimus et? Voluptate nemo sit accusamus ipsum quisquam rem distinctio sint exercitationem maxime, mollitia quam eum pariatur eos aliquid quos molestias animi molestiae iusto nulla libero tenetur voluptas repellendus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a voluptate quaerat! Officiis, quam maiores tenetur maxime beatae pariatur ducimus rerum asperiores deserunt adipisci vel tempore unde totam. Omnis culpa debitis optio eveniet a! Recusandae, praesentium non in dolorum adipisci voluptas quibusdam a voluptate quam? Praesentium illo obcaecati vel assumenda rem, a odio error doloribus, amet nulla distinctio iusto quas expedita doloremque. Ipsa soluta odit necessitatibus ratione sed quam magni? Odit vel, iusto exercitationem assumenda corporis hic, sed, amet laudantium explicabo facere natus ducimus suscipit obcaecati sunt et. Voluptatum amet doloremque, alias dolorum sint fugiat! Iste ut exercitationem accusantium ipsam quae dicta sit libero, nulla facere nihil at quaerat expedita. Excepturi similique non illum voluptate sed, officiis ut cupiditate aut nobis, quis quisquam vel dolore fugiat blanditiis voluptas qui debitis nihil! In nam nihil quas repellat magnam illo beatae maiores impedit, amet nulla soluta atque quia quaerat? Quo officiis, fuga, nam optio mollitia vero veniam fugit facilis minus nobis distinctio quos commodi. Aperiam dignissimos ratione expedita debitis dolore molestiae doloremque asperiores voluptate rem harum deleniti tempore accusantium ab animi laboriosam inventore nihil eveniet adipisci quis voluptatibus voluptates error et, laudantium architecto. Possimus eius itaque tempore earum repellendus velit voluptas temporibus a commodi ullam vitae optio et maiores, quam quaerat repudiandae dolore eligendi molestiae explicabo assumenda tempora! Repellendus fuga earum doloribus perferendis nam cupiditate nesciunt aperiam atque placeat animi, autem ipsum quas facilis amet neque porro accusamus magni totam ab at reiciendis, commodi voluptatum! Placeat sed commodi aliquid laboriosam sapiente reiciendis nostrum similique saepe officia. Expedita voluptates quo dolores quae quisquam. Ipsa iure consequuntur modi praesentium. Nobis numquam ducimus deleniti. Repellat animi ducimus et? Voluptate nemo sit accusamus ipsum quisquam rem distinctio sint exercitationem maxime, mollitia quam eum pariatur eos aliquid quos molestias animi molestiae iusto nulla libero tenetur voluptas repellendus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a voluptate quaerat! Officiis, quam maiores tenetur maxime beatae pariatur ducimus rerum asperiores deserunt adipisci vel tempore unde totam. Omnis culpa debitis optio eveniet a! Recusandae, praesentium non in dolorum adipisci voluptas quibusdam a voluptate quam? Praesentium illo obcaecati vel assumenda rem, a odio error doloribus, amet nulla distinctio iusto quas expedita doloremque. Ipsa soluta odit necessitatibus ratione sed quam magni? Odit vel, iusto exercitationem assumenda corporis hic, sed, amet laudantium explicabo facere natus ducimus suscipit obcaecati sunt et. Voluptatum amet doloremque, alias dolorum sint fugiat! Iste ut exercitationem accusantium ipsam quae dicta sit libero, nulla facere nihil at quaerat expedita. Excepturi similique non illum voluptate sed, officiis ut cupiditate aut nobis, quis quisquam vel dolore fugiat blanditiis voluptas qui debitis nihil! In nam nihil quas repellat magnam illo beatae maiores impedit, amet nulla soluta atque quia quaerat? Quo officiis, fuga, nam optio mollitia vero veniam fugit facilis minus nobis distinctio quos commodi. Aperiam dignissimos ratione expedita debitis dolore molestiae doloremque asperiores voluptate rem harum deleniti tempore accusantium ab animi laboriosam inventore nihil eveniet adipisci quis voluptatibus voluptates error et, laudantium architecto. Possimus eius itaque tempore earum repellendus velit voluptas temporibus a commodi ullam vitae optio et maiores, quam quaerat repudiandae dolore eligendi molestiae explicabo assumenda tempora! Repellendus fuga earum doloribus perferendis nam cupiditate nesciunt aperiam atque placeat animi, autem ipsum quas facilis amet neque porro accusamus magni totam ab at reiciendis, commodi voluptatum! Placeat sed commodi aliquid laboriosam sapiente reiciendis nostrum similique saepe officia. Expedita voluptates quo dolores quae quisquam. Ipsa iure consequuntur modi praesentium. Nobis numquam ducimus deleniti. Repellat animi ducimus et? Voluptate nemo sit accusamus ipsum quisquam rem distinctio sint exercitationem maxime, mollitia quam eum pariatur eos aliquid quos molestias animi molestiae iusto nulla libero tenetur voluptas repellendus!"
                }
            };
        },
    components: {
        Page2Page
    },
    methods: {
        page1BtnTap(args){
            this.$navigateTo(Page2Page, {frame: 'home-page'});
            
        },
        onScroll(e) {
            const image = this.$refs.img.nativeView
            const btnPlay = this.$refs.btnPlay.nativeView
            const blackBar = this.$refs.blackBar.nativeView
            if(e.scrollY < 0){
                const scrollAmt = Math.abs(e.scrollY);
                const scale = (scrollAmt + 300) / 300
                image.scaleX = scale
                image.scaleY = scale
                image.translateY= scrollAmt / 2

                btnPlay.translateY = scrollAmt
                blackBar.translateY = scrollAmt
            } else {
                image.translateY = -1 * e.scrollY
                if(e.scrollY < 300){
                    this.$refs.blackBar.nativeView.opacity = 0
                    this.$refs.abTitle.nativeView.opacity = 0
                    btnPlay.translateY = -1 * e.scrollY
                    blackBar.translateY = -1 * e.scrollY
                } else {
                    this.$refs.blackBar.nativeView.opacity = 100
                    this.$refs.abTitle.nativeView.opacity = 100
                    btnPlay.translateY = -300
                    blackBar.translateY = -300
                }
            }
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 60;
    font-weight: 800;
    color: white;
    text-align: center
}
.subtitle {
    font-size: 10;
    color : white;
    text-align: center;
}
.fade {
    background: linear-gradient(to top, black, transparent);
    width: 100%;
    height: 380;
}
.black-bar {
    background-color: black;
    width: 100%;
    height: 80;
    opacity: 0
}
.btn-play {
    width: 200;
    height: 50;
    border-radius: 25;
    background-color: #1aba54;
    color: white;
    font-weight: bold;
}
.main-page{
    background-color:black;
    color: white;
}
.ab-title{
    font-weight: 800;
    color: white;
    text-align: center;
    opacity: 0;
}
</style>