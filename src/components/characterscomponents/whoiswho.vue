<template>
    <div class="center">
        <h1>WHO'S</h1>
        <h1>WHO</h1>
        <div class="middlcecharacters">
        <div class="dccharacters" v-for="(item,index) in pic" :key="index">
            <img :src="item">
            <div class="characersname" v-for="(item,tindex) in picname" :key="tindex">
            <h1 class="chname" v-if="index === tindex" >{{item}}</h1>
        </div>
        </div>
    </div>
    </div>
</template>

<script>

import img from  '../characterscomponents/charactersimg/character1.jpg'
import img1 from '../characterscomponents/charactersimg/character2.jpg'
import img2 from '../characterscomponents/charactersimg/character3.jpg'
import img3 from '../characterscomponents/charactersimg/character4.jpg'
import img4 from '../characterscomponents/charactersimg/character5.jpg'
import img5 from '../characterscomponents/charactersimg/character6.jpg'
import img6 from '../characterscomponents/charactersimg/character7.jpg'

export default{
    data() {
        return {
            pic: [img,img1,img2,img3,img4,img5,img6],
            picname: ["SUPERMAN","BATMAN","WODNER WOMAN","GREEN LANTERN","THE FLASH","AQUAMAN", "CYBORG"]
        }
    }

}

</script>

<style scoped>

@font-face {
    font-family: SnsCpt;
    src: url('../characterscomponents/PTSansCaption-Bold.ttf');
}

.center {
    margin: auto;
    width: 70%;
}

h1 {
    color: #0282F9;
    font-family: SnsCpt;
}

.middlcecharacters {
    display: flex;
    width: 100%;
    margin: auto;
}

.dccharacters {
    width: 100%;
}

.dccharacters img {
    width: 100%;
    height: 400px;
}


.chname {
    color: black;
    font-size: 14px;
    font-family: SnsCpt;
}

</style>