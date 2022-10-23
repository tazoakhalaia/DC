<template>
    <div class="navback">
        <div class="navmiddle">
            <div class="navmiddlepic" v-for="pic in pictures" :key="p">
                <img :src="pic">
                <div class="text">
                    <h1>asd</h1>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import img from '../characterscomponents/charactersimg/community1.jpg'
  import img2 from '../characterscomponents/charactersimg/community2.jpg'
  import img3 from '../characterscomponents/charactersimg/community3.jpg'
  import img4 from '../characterscomponents/charactersimg/community4.jpg'

  export default {
    data() {
        return {
            pictures: [img,img2,img3,img4],
            text: ['text1','text2','text3','text4']
        }
    }
  }


</script>

<style scoped>

.navback {
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
    width: 100px;
    height: 100px;
    display: flex;
}

.navmiddlepic img {
    width: 100%;
    height: 100%;
}

</style>