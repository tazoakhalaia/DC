<template>
    <div class="navback">
        <div class="navmiddle">
            <div class="navmiddlepic" v-for="(pic,p) in pictures" :key="p">
                <img :src="pic">
                <div class="text" v-for="(item,index) in text" :key="index">
                    <h1 v-if="p === index">{{item}}</h1>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import img from '../characterscomponents/charactersimg/digitalcomics.png'
  import img2 from '../characterscomponents/charactersimg/merchendise.png'
  import img3 from '../characterscomponents/charactersimg/print.png'
  import img4 from '../characterscomponents/charactersimg/location.png'

  export default {
    data() {
        return {
            pictures: [img,img2,img3,img4],
            text: ['DIGITAL COMICS','DC Merchandise','Print Subscriptions','Comic Shop Locator'],
        }
    }
  }


</script>

<style scoped>

.navback {
    width: 100%;
    margin-top: 30px;
    background-color: #0282F9;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navmiddle {
    margin: auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
}

.navmiddlepic {
    width: 80px;
    height: 80px;
    display: flex;
}

.navmiddlepic img {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.text {
    margin-left: 5px;
    font-size: 10px;
    color: #FFFFFF;
    cursor: pointer;
}

</style>