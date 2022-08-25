<template>
  <div class="row h-100 w-100 mx-auto" style="position: fixed; overflow: visible">
    <!-- NavBar -->
    <link href="https://unpkg.com/tailwindcss@2.0.2/dist/tailwind.min.css" rel="stylesheet">
    <nav class=" bg-white w-full flex relative justify-between items-center mx-auto px-8" style="height: 7%;">
      <div class="inline-flex">
        <a class="_o6689fn" href="/">
          <div class="hidden md:block">
            {{siteName}}
          </div>
        </a>
      </div>



      <!-- login -->
      <div class="flex-initial">
        <div class="flex justify-end items-center relative">

          <t-dropdown class="dropdown-right">

            <!-- Bouton du dropdown -->
            <div class="inline relative"
             slot="trigger"
             slot-scope="{
              mousedownHandler,
              focusHandler,
              blurHandler,
              keydownHandler,
              isShown, }"
            >

              <button class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                      :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                      @mousedown="mousedownHandler"
                      @focus="focusHandler"
                      @blur="blurHandler"
                      @keydown="keydownHandler">

                <div class="pl-1">
                  <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
                  >
                    <g fill="none" fill-rule="nonzero">
                      <path d="m2 16h28"></path>
                      <path d="m2 24h28"></path>
                      <path d="m2 8h28"></path>
                    </g>
                  </svg>
                </div>

                <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                  <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style="display: block; height: 100%; width: 100%; fill: currentcolor;"
                  >
                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                  </svg>
                </div>
              </button>
            </div>

            <!-- Contenu du Dropdown -->
            <div slot-scope="{ hide, blurHandler }">
              <button
                  class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  role="menuitem"
                  @blur="blurHandler"
              >
                Your Profile
              </button>
              <button
                  class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  role="menuitem"
                  @blur="blurHandler"
              >
                Settings
              </button>
            </div>




          </t-dropdown>
        </div>
      </div>
      <!-- end login -->
    </nav>
    <!-- end NavBar -->
    
    <!-- Contenu du site -->
    <div style="height: 93%; max-height: 93%;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function (){
    return{
      siteName: "ShareList"
    }
  },
  components: {

  },
  mounted() {

  }

}
</script>

<style>
.btn-circle {
  width: 1.875rem;
  height: 1.875rem;
  text-align: center;
  padding: 0.375rem 0;
  font-size: 0.75rem;
  line-height: 1.428571429;
  border-radius: 0.938rem;
}
.btn-circle.btn-lg {
  width: 3.125rem;
  height: 3.125rem;
  padding: 0.625rem 1rem;
  font-size: 1.125rem;
  line-height: 1.33;
  border-radius: 1.563rem;
}

.dropdown-right > div:last-child > div{
  left: auto;
  right: 0;
  width: 175%;
}
</style>
