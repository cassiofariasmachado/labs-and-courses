<template>
    <div class="quote">
        <div class="title">
            <slot name="title"></slot>
            <span>
                <slot name="subtitle">The subtitle</slot>
            </span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.quote {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

.title span {
  color: #999;
}

h2 {
  color: red;
}
</style>
