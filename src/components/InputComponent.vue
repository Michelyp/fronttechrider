<template>
    <div class="form-outline form-white">
    <input
      :type="type"
      :id="typeProvincia"
      class="form-control form-control-lg"
    />
    <label class="form-label" for="typeProvincia"> {{ label }} <span  style="color:red">*</span></label>
  </div>
  </template>
  
  <script>
  export default {
    name :"InputComponent",
    props:{
        id:String,
        type: String,
        label:String
    }
  };
  </script>
  
  <style>
  </style>
  