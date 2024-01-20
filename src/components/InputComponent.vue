<template>
    <div class="form-outline form-white">
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      class="form-control form-control-lg"
    />
    <label class="form-label"> {{ label }} <span  style="color:red">*</span></label>
  </div>
  </template>
  
  <script>
  export default {
    name :"InputComponent",
    props:{
        id:String,
        type: String,
        label:String,
        placeholder:String
    }
  };
  </script>
  
  <style>
  </style>
  