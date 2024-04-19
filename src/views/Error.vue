<template>
    <div style="padding: 200px 0 50px 0;display: grid;place-content: center;">
      <div class="container">
        <div class="row">
        <div class="col-md-4">
              <img class="w-100" src="https://etmaam.com.sa/assets/front/img/404.png" alt="">
        </div>
        <div class="col-md-8" style="display: grid;place-content: center;">
       <h1 style="color: #0a3041;">
        {{ 
            this.$i18n.locale == 'ar' ? 'نأسف هذه الصفحة غير موجودة !!':'Sorry Page Not Fount !!' }}
       </h1>
        </div>
      </div>
      </div>
    </div>
</template>