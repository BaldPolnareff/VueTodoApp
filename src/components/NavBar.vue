<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const checked = ref(false);

</script>

<template>
    <!--nav class="main-nav-bar">
      <RouterLink to="/">
        <a-button type="primary">Home</a-button>
      </RouterLink>
      <RouterLink to="/about">
        <a-button >About</a-button>
      </RouterLink>
    </nav-->

    <header>
        <nav class="container">
            <div class="branding">
                <img src="../assets/Vue.js_Logo_2.svg" alt="">
                <h1>Vue Todos</h1>
                <ul class="nav-routes">
                    <RouterLink to="/">
                        Todos
                    </RouterLink>
                    <RouterLink to="/about">
                        About
                    </RouterLink>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

header {
    /* display: flex; */
    align-items: center;
    justify-content: center;
    height: 160px;
    background: linear-gradient(150deg, #4F5FB5, #A117C4);
    color: whitesmoke;
    padding: 40px;
}
.branding {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    /* using a gradient background */
    /* background: linear-gradient(150deg, #4F5FB5, #A117C4); */
    /* background: #A117C4; */
    background: linear-gradient(150deg, #A117C4, #4F5FB5);
    color: whitesmoke;
    filter: drop-shadow(0 0px 4px rgb(54, 54, 54));
    margin-bottom: 20px;
    border-radius: 10px;
    gap: 10px;
    padding: 30px;
}

.branding img {
    max-width: 50px;
    filter: drop-shadow(0 4px 4px rgb(54, 54, 54));
}

.nav-routes {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    list-style: none;
}

.nav-routes a {
    text-decoration: none;
    color: whitesmoke;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        // color: #DCA3EA;
        transform: scale(1.2);
    }
}

</style>