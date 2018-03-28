<template>
    <div>
        <form enctype="multipart/form-data"
        @submit="onSubmit"
        >
            <input type="file"
                   name="file">
            <input type="submit"
                   value="Submit">
        </form>
    </div>
</template>

<script>
export default {
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
