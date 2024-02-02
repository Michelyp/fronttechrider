<template>
  <div class="form-outline form-white">
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :pattern="pattern"
      class="form-control form-control-lg"
      :v-model="vModel"
    />
    <label class="form-label">
      {{ label }} <span style="color: red">*</span></label
    >
  </div>
</template>
  
  <script>
export default {
  name: "InputComponent",
    props: {
    id: String,
    type: String,
    label: String,
    placeholder: String,
    pattern: String,
    vModel: String,
  }
};
</script>
  
  <style>
</style>
  